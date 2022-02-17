<script>
  import { progressStore } from "../stores.js";
  import LaunchButton from "./LaunchButton.svelte";
  import PopUpContent from "./PopupContent.svelte";

  export let progress;

  progressStore.set(progress);

  const { onboarded } = progress;
  let display = "none";
  const handlePopUp = () => {
    display === "none" ? (display = "block") : (display = "none");
  };
</script>

<div class:onboarding-complete={onboarded}>
  <div class="form-container">
    <div class="progress-popup" style="display: {display};">
      <PopUpContent {handlePopUp} {progress} />
    </div>
  </div>
  <LaunchButton {handlePopUp} />
</div>

<style>
  .onboarding-complete {
    display: none;
  }

  .form-container {
    z-index: 9;
    position: fixed;
    top: 4rem;
    width: 100%;
    margin: 0;
  }

  .progress-popup {
    max-width: 500px;
    background-color: #FFF;
    font-family: "Cabin", "Trebuchet MS", Roboto, Helvetica, Arial, sans-serif;
    color: hsla(0, 0%, 14%, 1);
    box-shadow: 2px 5px 5px lightgrey;
    margin: 0 auto;
    border: solid hsla(173, 56%, 44%, 1);
    font-size: 14px;
  }

  @media only screen and (max-width: 600px) {
    .progress-popup {
      max-width: 90%;
      margin: 0 auto;
    }
  }
</style>
