<script>
  import CheckBox from "../components/checkBox.svelte";
  export let handlePopUp;
</script>

<div class="checklist-container">
  <div class="popup-header">
    <h3>Welcome To Beyonk</h3>
    <div class="close-popup" on:click={handlePopUp}>X</div>
  </div>
  <p>
    Selling tickets has never been easier. Follow our simple checklist below to
    finish your set-up with Beyonk.
  </p>
  <CheckBox />
</div>

<style>
  .checklist-container {
    padding: 0 1rem 2rem;
  }

  .popup-header {
    display: grid;
    grid-template-columns: auto auto;
  }

  .close-popup {
    border: none;
    background-color: transparent;
    font-family: "Cabin", "Trebuchet MS", Roboto, Helvetica, Arial, sans-serif;
    font-weight: bolder;
    font-size: 1.5rem;
    margin: auto 1rem auto auto;
    color: black;
  }

  .close-popup:hover {
    color: hsla(0, 0%, 40%, 1);
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    .checklist-container {
      padding: 0.5rem;
    }
  }
</style>
