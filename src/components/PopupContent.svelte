<script>
  import ProgressBar from "./ProgressBar.svelte"
  import CheckList from "./CheckList.svelte"
  export let handlePopUp;
</script>

  <div class="popup-header">
    <h3>Welcome To Beyonk!</h3>
    <div class="close-popup" on:click={handlePopUp}>&#10005</div>
  </div>
  <div class="popup-body">
    <p>
      Selling tickets has never been easier. Follow our simple checklist below to
      finish your set-up with Beyonk.
    </p>
    <ProgressBar />
    <CheckList />
  </div>

<style>
  .popup-header {
    display: grid;
    grid-template-columns: auto auto;
    padding: 0 1rem;
    background-color: hsla(173, 56%, 44%, 1);
    color: #FFF;
    height: 2.3rem;
    font-size: 0.8rem;
  }

  .popup-header h3 {
    font-size: 14px;
    padding: 0;
    margin: 0.5rem 0rem;
    font-weight: 600;
  }

  .close-popup {
    border: none;
    background-color: transparent;
    font-size: 1.2rem;
    margin: auto 1rem auto auto;
  }

  .close-popup:hover {
    color: hsla(224, 58%, 96%, 1);
    cursor: pointer;
  }

  .popup-body {
    padding: 0 1rem 2rem;
    line-height: 1.5;
  }

  @media only screen and (max-width: 600px) {
    .popup-header,
    .popup-body {
      padding: 0.5rem;
    }
  }
</style>
