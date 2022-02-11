<script>
  import LaunchButton from "../components/launchButton.svelte";
  import ProgressBar from "../components/progressBar.svelte";
  import PopUpContent from "../components/popupContent.svelte";

  export let progress;
  const { adventure, onboarded, organisation, payment, policies } = progress;
  const checklistItems = [adventure, organisation, payment, policies];
  const checklistLength = checklistItems.length;
  const completedItems = checklistItems.filter((item) => !!item).length;

  let display = "none";

  const handlePopUp = () => {
    display === "none" ? (display = "block") : (display = "none");
  };
</script>

<div class:onboarding-complete={onboarded}>
  <div class="form-container">
    <div class="progress-popup" style="display: {display};">
      <ProgressBar {checklistLength} {completedItems} />
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
