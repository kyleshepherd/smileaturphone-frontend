<script>
  import firebase from "firebase/app";

  let reason = "";
  let submitted = false;

  const submitReason = async () => {
    if (reason != "") {
      await firebase.firestore().collection("reasons").add({
        reason: reason,
        approved: false,
      });
      reason = "";
      submitted = true;
    }
  };
</script>

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

  .form {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .reason-input {
    font-family: "Padauk", sans-serif;
    border-radius: 75px;
    background: white;
    border: 2px solid white;
    padding: 10px 25px;
    font-size: 30px;
    width: 500px;
    letter-spacing: -0.04em;
    transition: all 0.25s ease;
  }

  .reason-input:focus {
    outline: none;
    border: 2px solid hsl(46, 70%, 64%);
  }

  .form > * {
    margin: 0 auto 25px;
  }

  @media only screen and (max-width: 1100px) {
    .header {
      font-size: 85px;
    }
    .subheader {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 600px) {
    .reason-input {
      width: 320px;
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 450px) {
    .header {
      font-size: 50px;
    }
    .subheader {
      font-size: 20px;
    }
  }
</style>

<div class="home">
  <div class="header--wrapper">
    <a href="/">
      <h1 class="header">Reasons To <br />Smile At Your Phone</h1>
    </a>
  </div>
  <div class="form">
    {#if !submitted}
      <input
        class="reason-input"
        type="text"
        name="reason"
        bind:value={reason}
        placeholder="what's your reason?"
        maxlength="75"
      />
      <button class="button" type="button" on:click={submitReason}
        >Submit</button
      >
    {:else}
      <h2 class="subheader">Thanks for submitting your reason to smile</h2>
    {/if}
    <a class="button" href="/reasons">View<br />Others</a>
  </div>
</div>
