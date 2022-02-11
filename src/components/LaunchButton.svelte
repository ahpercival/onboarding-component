<script>
  export let handlePopUp;
</script>

<div class="button-container">
  <div class="popup-button" on:click={handlePopUp}>
    &#128075; Getting started
  </div>
</div>

<style>
  .button-container {
    z-index: 9;
    position: fixed;
    bottom: 2rem;
    width: 100%;
  }

  .popup-button {
    z-index: 9;
    background-color: hsla(173, 56%, 44%, 1);
    color: #fff;
    border: solid 1px hsla(173, 56%, 44%, 1);
    border-radius: 0.2rem;
    font-size: 1rem;
    padding: 0.4rem 1rem;
    font-family: "Cabin", "Trebuchet MS", Roboto, Helvetica, Arial, sans-serif;
    margin: 0 auto;
    height: 1.7rem;
    max-width: 9rem;
  }

  .popup-button:hover {
    cursor: pointer;
    background-color: transparent;
    color: hsla(173, 56%, 44%, 1);
  }
</style>
