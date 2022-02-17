<script>
  import { progressStore } from "../stores.js";
  import ProgressBar from "./ProgressBar.svelte"
  import CheckList from "./CheckList.svelte"

  export let handlePopUp;
  export let progress;

  const { adventure, organisation, payment, policies } = progress;
  const checklistItems = [adventure, organisation, payment, policies];
  const checklistLength = checklistItems.length;
  const completedItems = checklistItems.filter((item) => !!item).length;
</script>

<div class="checklist-container">
  <div class="popup-header">
    <h3>Welcome To Beyonk</h3>
    <div class="close-popup" on:click={handlePopUp}>&#10005</div>
  </div>
  <div class="popup-body">
    <p>
      Selling tickets has never been easier. Follow our simple checklist below to
      finish your set-up with Beyonk.
    </p>
    <ProgressBar {checklistLength} {completedItems} />
    <CheckList />
  </div>
</div>

<style>
  .popup-header {
    display: grid;
    grid-template-columns: auto auto;
    padding: 0 1rem;
    background-color: hsla(173, 56%, 44%, 1);
    color: #FFF;
  }

  .close-popup {
    border: none;
    background-color: transparent;
    font-size: 1.2rem;
    margin: auto 1rem auto auto;
  }

  .close-popup:hover {
    color: hsla(0, 0%, 40%, 1);
    cursor: pointer;
  }

  .popup-body {
    padding: 0 1rem 2rem;
  }

  @media only screen and (max-width: 600px) {
    .popup-header,
    .popup-body {
      padding: 0.5rem;
    }
  }
</style>
