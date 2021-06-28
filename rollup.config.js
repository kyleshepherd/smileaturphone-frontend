import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
  (warning.code === "MISSING_EXPORT" && /'preload'/.test(warning.message)) ||
  (warning.code === "CIRCULAR_DEPENDENCY" &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  warning.code === "THIS_IS_UNDEFINED" ||
  onwarn(warning);

  function getEnv(key) {
    return JSON.stringify(process.env[`SAUP_${key}`]);
  }

  const replaceConfig = {
  preventAssignment: true,
  'process.browser': true,
  'process.env.NODE_ENV': JSON.stringify(mode),
  "process.env.FIREBASE_API_KEY": getEnv("FIREBASE_API_KEY"),
  "process.env.FIREBASE_AUTH_DOMAIN": getEnv("FIREBASE_AUTH_DOMAIN"),
  "process.env.FIREBASE_PROJECT_ID": getEnv("FIREBASE_PROJECT_ID"),
  "process.env.FIREBASE_STORAGE_BUCKET": getEnv("FIREBASE_STORAGE_BUCKET"),
  "process.env.FIREBASE_MESSAGING_SENDER_ID": getEnv(
    "FIREBASE_MESSAGING_SENDER_ID",
    ),
  "process.env.FIREBASE_APP_ID": getEnv("FIREBASE_APP_ID"),
  };

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({...replaceConfig}),
			svelte({
				compilerOptions: {
					dev,
					hydratable: true
				}
			}),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/'
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				babelHelpers: 'runtime',
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			})
		],

		preserveEntrySignatures: false,
		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				...replaceConfig,
					'process.browser': false,
			}),
			svelte({
				compilerOptions: {
					dev,
					generate: 'ssr',
					hydratable: true
				},
				emitCss: false
			}),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/',
				emitFiles: false // already emitted by client build
			}),
			resolve({
				dedupe: ['svelte']
			}),
			commonjs()
		],
		external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),
		preserveEntrySignatures: 'strict',
		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({...replaceConfig}),
			commonjs(),
			!dev && terser()
		],
		preserveEntrySignatures: false,
		onwarn,
	}
};
