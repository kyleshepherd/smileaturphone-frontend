<script>
  import { onMount } from "svelte";

  export let reasons = [];

  export let reasonIndex = -1;

  onMount(() => {
    if (reasons && reasons.length > 0) {
      reasonIndex = Math.floor(Math.random() * reasons.length);
    }
  });

  const newReason = () => {
    let oldReason = reasonIndex;
    if (reasons && reasons.length > 0) {
      reasonIndex = Math.floor(Math.random() * reasons.length);
      if (oldReason === reasonIndex) {
        newReason();
      }
    }
  };
</script>

<style>
  .reasons {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
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

  .reasons--wrapper {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    flex: 1;
    width: 100%;
  }

  .reasons--button {
    align-self: center;
  }

  .phone {
    width: 100%;
    max-width: 450px;
    background-color: white;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    padding: 20px;
    margin: 0 15px;
  }

  .phone--header {
    display: block;
    text-align: center;
    color: #c1bdbd;
    letter-spacing: 0;
    line-height: 1.2;
    font-size: 14px;
  }

  .messages {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .phone--other-message {
    background: #e6e5eb;
    border-radius: 15px;
    padding: 10px 15px;
    color: white;
    margin-top: 25px;
    position: relative;
    align-self: flex-start;
    min-height: 57px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 90%;
  }

  .phone--other-message:after {
    width: 0;
    height: 0;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 0px solid transparent;
    border-left: 15px solid #e6e5eb;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .message-dot {
    height: 12.5px;
    width: 12.5px;
    background: #bdbcc2;
    border-radius: 100%;
  }

  .message-dot:not(:last-child) {
    margin-right: 5px;
  }

  .phone--message {
    background: #397ef6;
    border-radius: 15px;
    padding: 10px 15px;
    color: white;
    font-size: 25px;
    letter-spacing: -0.04em;
    margin-top: 25px;
    position: relative;
    text-transform: lowercase;
    max-width: 90%;
  }

  .phone--message:after {
    width: 0;
    height: 0;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 0px solid transparent;
    border-right: 15px solid #397ef6;
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @media only screen and (max-width: 960px) {
    .reasons--wrapper {
      flex-wrap: wrap;
    }
    .reasons--button {
      order: -1;
      align-self: flex-start;
    }
    .reasons--button:first-of-type {
      margin-right: 15px;
    }
  }
</style>

<div class="reasons">
  <div class="header--wrapper">
    <a href="/">
      <h1 class="header">Reasons To <br />Smile At Your Phone</h1>
    </a>
  </div>
  <div class="reasons--wrapper">
    <div class="reasons--button">
      <a class="button" href="/submit">Submit<br />Your Reason</a>
    </div>
    {#if reasonIndex != -1}
      <div class="phone">
        <span class="phone--header">Message</span>
        <span class="phone--header">Today 10:09pm</span>
        <div class="messages">
          <div class="phone--message">
            <span class="phone--message_text">
              {reasons[reasonIndex].reason.substring(0, 90)}
            </span>
          </div>
          <div class="phone--other-message">
            <div class="message-dot" />
            <div class="message-dot" />
            <div class="message-dot" />
          </div>
        </div>
      </div>
      <div class="reasons--button">
        <button class="button" type="button" on:click={newReason}
          >Find<br />More Reasons</button
        >
      </div>
    {/if}
  </div>
</div>
