<script>
  import ProgressBar from "../components/progressBar.svelte";
  import CheckBox from "../components/checkBox.svelte";
  import LaunchButton from "../components/launchButton.svelte";

  let display = "none";

  let handlePopUp = () => {
    if (display === "none") {
      display = "block";
    } else if (display === "block") {
      display = "none";
    }
  };
</script>

<div class="progress-popup">
  <ProgressBar />
  <h3>Welcome To Beyonk</h3>
  <div class="form-container" style="display: {display};">
    <div class="checklist-container">
      <p>
        Selling tickets has never been easier. Follow our simple checklist below
        to finish your set-up with Beyonk.
      </p>
      <CheckBox />
    </div>
  </div>
</div>

<LaunchButton {handlePopUp} />

<style>
  .progress-popup {
    z-index: 9;
    position: fixed;
    bottom: 0;
    right: 15px;
    background-color: #f4f5f7;
    font-family: "Cabin", "Trebuchet MS", Roboto, Helvetica, Arial, sans-serif;
    color: hsla(0, 0%, 40%, 1);
  }

  .form-container {
    max-width: 500px;
    padding: 5px 10px;
  }

  .checklist-container {
    padding: 0 3rem 1rem;
  }
</style>
