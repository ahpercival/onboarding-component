<script>
  import ProgressBar from "../components/progressBar.svelte";
  import LaunchButton from "../components/launchButton.svelte";
  import PopupContent from "../components/popupContent.svelte";
  import ProgressStore from "../stores/progress-data";

  let progressData;

  ProgressStore.subscribe((data) => {
    progressData = data;
  });

  let onboarded = !progressData.progress.onboarded ? "block" : "none";
  let display = "none";
  let handlePopUp = () => {
    display === "none" ? (display = "block") : (display = "none");
  };
</script>

<div style="display: {onboarded};">
  <div class="form-container">
    <div class="progress-popup" style="display: {display};">
      <ProgressBar />
      <PopupContent {handlePopUp} />
    </div>
  </div>
  <LaunchButton {handlePopUp} />
</div>

<style>
  .form-container {
    z-index: 9;
    position: fixed;
    bottom: 6rem;
    width: 100%;
    margin: 0;
  }

  .progress-popup {
    max-width: 500px;
    background-color: hsla(224, 58%, 96%, 1);
    font-family: "Cabin", "Trebuchet MS", Roboto, Helvetica, Arial, sans-serif;
    color: hsla(0, 0%, 14%, 1);
    box-shadow: 2px 5px 5px lightgrey;
    margin: 0 auto;
  }

  @media only screen and (max-width: 600px) {
    .progress-popup {
      max-width: 90%;
      margin: 0 auto;
    }
  }
</style>
