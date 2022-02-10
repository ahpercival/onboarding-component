<script>
  import ProgressBar from "../components/progressBar.svelte";
  import LaunchButton from "../components/launchButton.svelte";
  import PopupContent from "../components/popupContent.svelte";

  let display = "none";

  let handlePopUp = () => {
    if (display === "none") {
      display = "block";
    } else if (display === "block") {
      display = "none";
    }
  };
</script>

<div>
  <ProgressBar />
  <PopupContent {display} />
</div>

<LaunchButton {handlePopUp} />
