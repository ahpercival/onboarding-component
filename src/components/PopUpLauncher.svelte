<script>
  export let handlePopUp;
</script>

<div class="button-container" on:click={handlePopUp}>
    &#128075; Getting started
</div>

<style>
  .button-container {
    z-index: 9;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: hsla(224, 59%, 53%, 1);
    color: #fff;
    font-size: 1rem;
    font-family: "Cabin", "Trebuchet MS", Roboto, Helvetica, Arial, sans-serif;
    padding: 0.4rem 1rem;
    height: 1.7rem;
    text-align: center;
    cursor: pointer;
  }
</style>
