<script>
</script>

<style>
  main {
    position: relative;
    background: radial-gradient(
      29.299999999999997% 50% at 50% 50%,
      hsl(46deg 75% 84%) 0%,
      hsl(46, 70%, 64%) 100%
    );
    height: 100vh;
    width: 100vw;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 10px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .why-link {
    position: absolute;
    right: 0.5rem;
    top: 0.25rem;
    font-size: 18px;
    color: white;
    letter-spacing: -0.03em;
    text-decoration: underline;
  }
  .kyle-link {
    position: absolute;
    left: 0.5rem;
    top: 0.25rem;
    font-size: 18px;
    color: white;
    text-decoration: underline;
    letter-spacing: -0.03em;
  }
</style>

<main>
  <a href="https://twitter.com/kyleshepherddev?lang=en" class="kyle-link"
    >Created by Kyle Shepherd</a
  >
  <a href="/why" class="why-link">why?</a>
  <slot />
</main>
