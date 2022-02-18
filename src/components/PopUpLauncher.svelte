<script>
  export let handlePopUp;
</script>

<div class="launcher-container" on:click={handlePopUp}>
  <div class="launcher-content">
    &#128075; Welcome To Beyonk! Click here to get started
  </div>
</div>

<style>
  .launcher-container {
    z-index: 9;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: hsla(224, 59%, 53%, 1);
    color: #fff;
    font-family: "Cabin", "Trebuchet MS", Roboto, Helvetica, Arial, sans-serif;
    height: 2.5rem;
    text-align: center;
    cursor: pointer;
  }

  .launcher-content {
    font-size: 0.8rem;
    margin: 0.7rem;
  }
</style>
