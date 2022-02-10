<script>
  import ProgressBar from "../components/progressBar.svelte";
  import CheckBox from "../components/checkBox.svelte";

  let display = "none";
  let popupControl = "+";
  let popupTitle = "Onboarding Progress";

  let handlePopUp = () => {
    if (display === "none") {
      display = "block";
      popupControl = "-";
      popupTitle = "Welcome To Beyonk";
    } else if (display === "block") {
      display = "none";
      popupControl = "+";
      popupTitle = "Onboarding Progress";
    }
  };
</script>

<div class="progress-popup">
  <ProgressBar />
  <button class="popup-button" on:click={handlePopUp}>{popupControl}</button>
  <h3>{popupTitle}</h3>
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
