<script>
  import ProgressBar from "../components/progressBar.svelte";
  import CheckBox from "../components/checkBox.svelte";
  let progressState = {
    one: {
      checked: false,
      label: "Complete your company profile",
      text: "Upload your logo, pin your location, add a phone and description and you're all set!",
    },
    two: {
      checked: false,
      label: "Create your first experience",
      text: "Follow the easy step-by-step guide to create a compelling experience that sells.",
    },
    three: {
      checked: false,
      label: "Link your payment account",
      text: "Connect via Stripe to get paid when you sell tickets.",
    },
    four: {
      checked: false,
      label: "Set your cancellation policy",
      text: "Choose between 'Flexible', 'Moderate' or set a Custom policy",
    },
  };
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

  $: progessValues = Object.values(progressState);
  $: progessStatus = progessValues.reduce((acc, val) => {
    acc.push(val.checked);
    return acc;
  }, []);
  $: completedItems = progessStatus.filter((b) => {
    if (!!b) {
      return b;
    }
  });
  $: value = (100 / progessStatus.length) * completedItems.length;
</script>

<div class="progress-popup">
  <ProgressBar {value} />
  <button class="popup-button" on:click={handlePopUp}>{popupControl}</button>
  <h3>{popupTitle}</h3>
  <div class="form-container" style="display: {display};">
    <div class="checklist-container">
      <p>
        Selling tickets has never been easier. Follow our simple checklist below
        to finish your set-up with Beyonk.
      </p>

      {#each progessValues as { checked, label, text }}
        <CheckBox bind:checked {label} {text} />
      {/each}
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
