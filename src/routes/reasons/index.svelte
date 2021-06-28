<script>
  import { onMount } from "svelte";
  import firebase from "firebase/app";
  import ReasonsPage from "../../components/_pages/ReasonsPage/ReasonsPage.svelte";

  let reasons = [];
  let reasonIndex = -1;

  onMount(async () => {
    const reasonQuery = await firebase.firestore().collection("reasons").get();

    reasons = reasonQuery.docs.map(reason => ({
      reason: reason.data().reason,
    }));

    if (reasons && reasons.length > 0) {
      reasonIndex = Math.floor(Math.random() * reasons.length);
    }
  });
</script>

<style>
</style>

<svelte:head>
  <title>Smile At Ur Phone - Reasons</title>
</svelte:head>

<ReasonsPage {reasons} {reasonIndex} />
