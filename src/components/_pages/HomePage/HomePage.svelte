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
  .subheader {
    font-size: 40px;
    letter-spacing: -0.075em;
    line-height: 1.2;
    text-align: center;
    text-transform: uppercase;
    color: white;
    margin-bottom: 0;
  }
  .buttons--wrapper {
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
  .buttons--wrapper > .button:first-child {
    margin-right: 45px;
  }

  @media only screen and (max-width: 1100px) {
    .header {
      font-size: 85px;
    }
    .subheader {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 450px) {
    .header {
      font-size: 50px;
    }
    .subheader {
      font-size: 20px;
    }

    .buttons--wrapper {
      flex-direction: column;
      align-items: center;
    }
    .buttons--wrapper > .button:first-child {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }
</style>

<div class="home">
  <div class="header--wrapper">
    <h1 class="header">Reasons To <br />Smile At Your Phone</h1>
    <h2 class="subheader">We all need a reason to smile 🥰</h2>
  </div>
  <div class="buttons--wrapper">
    <a class="button" href="/submit">Submit<br />Yours</a>
    <a class="button" href="/reasons">View<br />Others</a>
  </div>
</div>
