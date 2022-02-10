<script>
  export let handlePopUp = () => {};
</script>

<button class="popup-button" on:click={handlePopUp}>Launch</button>

<style>
  .popup-button {
    background-color: transparent;
    color: hsla(173, 56%, 44%, 1);
    border: solid 1px hsla(173, 56%, 44%, 1);
    border-radius: 0.4rem;
    font-size: 1rem;
    line-height: 1.1;
    padding: 0.4rem 1rem;
  }

  .popup-button:hover {
    cursor: pointer;
    background-color: hsla(173, 56%, 44%, 1);
    color: #fff;
  }
</style>
