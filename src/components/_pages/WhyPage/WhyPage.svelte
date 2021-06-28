<script></script>

<style>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .header--wrapper {
    padding-top: 20vh;
  }
  .header {
    font-size: 123px;
    color: white;
    letter-spacing: -0.04em;
    line-height: 1.2;
    margin-bottom: 5px;
  }

  @media only screen and (max-width: 1100px) {
    .header {
      font-size: 85px;
    }
  }

  @media only screen and (max-width: 450px) {
    .header {
      font-size: 50px;
    }
  }

  .why--wrapper {
    max-width: 600px;
    margin: 0 auto;
  }

  .why--wrapper > p {
    color: white;
    font-size: 20px;
  }

  .why--wrapper a {
    color: white;
    text-decoration: underline;
  }
</style>

<div class="home">
  <div class="header--wrapper">
    <a href="/"><h1 class="header">Reasons Why <br />This Website Exists</h1></a
    >
  </div>
  <div class="why--wrapper">
    <p>
      I made this site after walking past someone smiling at their phone and
      wondering what they were looking at. I thought it'd be interesting to
      catalogue people's main reasons for why they smile at their phone, whether
      that's a photo of their favourite pet or a message from a loved one.
      <br /><br />
      Please take a look at the submitted <a href="/reasons">reasons</a> and
      then <a href="/submit">submit your own, </a>
      and also feel free to follow me on
      <a
        href="https://twitter.com/kyleshepherddev?lang=en"
        target="_blank"
        rel="noopener noreferrer">Twitter</a
      > if you'd like ☺️
    </p>
  </div>
</div>
