<script>
  import ProgressBar from "./ProgressBar.svelte"
  export let handlePopUp;
</script>

<div class="launcher-container" on:click={handlePopUp}>
  <div class="launcher-content">
    <div></div>
    <div class="launcher-title">
      &#128075; Welcome To Beyonk! Click here to get started
    </div>
    <div class="launcher-progress">
      <ProgressBar />
    </div>
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
    display: grid;
    grid-template-columns: 20% auto 20%;
  }
  
  .launcher-title {
    font-weight: 600;
    padding: 3px 0;
  }

  .launcher-progress {
    width: 75%;
  }

  @media only screen and (max-width: 600px) {
    .launcher-content {
      display: block;
    }

    .launcher-progress {
      display: none;
    }
  }
</style>
