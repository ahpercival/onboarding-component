<script>
  import PopUpLauncher from "./PopUpLauncher.svelte";
  import ProgressBar from "./ProgressBar.svelte"
  import { slide } from "svelte/transition";
  import { progressStore } from "../stores.js";
  export let progress;

  progressStore.set(progress);

  const { onboarded } = progress;
  let display = "none";
  const handlePopUp = () => {
    display === "none" ? (display = "block") : (display = "none");
  };

  const checklistData = [
    {
      key: "organisation",
      label: "Complete your company profile",
      text: "Upload your logo, pin your location, add a phone and description and you're all set!",
      url: "profile/organisation?backTo=/",
      toggle: false
    },
    {
      key: "adventure",
      label: "Create your first experience",
      text: "Follow the easy step-by-step guide to create a compelling experience that sells.",
      url: "event/create?backTo=/",
      toggle: false
    },
    {
      key: "payment",
      label: "Link your payment account",
      text: "Connect via Stripe to get paid when you sell tickets.",
      url: "profile/payment-details?backTo=/",
      toggle: false
    },
    {
      key: "policies",
      label: "Set your cancellation policy",
      text: "Choose between 'Flexible', 'Moderate' or set a Custom policy",
      url: "profile/terms?backTo=/",
      toggle: false
    },
  ];

</script>

<div class:onboarding-complete={onboarded}>
  <div class="form-container">
    <div class="progress-popup" style="display: {display};">
      <div class="popup-header">
        <h3>Welcome To Beyonk!</h3>
        <div class="close-popup" on:click={handlePopUp}>&#10005</div>
      </div>
      <div class="popup-body">
        <p>
          Selling tickets has never been easier. Follow our simple checklist below to
          finish your set-up with Beyonk.
        </p>
        <ProgressBar />
        {#each checklistData as { key, label, text, url, toggle }}
          <div class="checkbox-item" class:toggled={toggle}>
            <label class="checklist-label" class:checked={$progressStore[key]}>
              <input class="checkbox" type="checkbox" />
                {#if $progressStore[key]}
                  <span class="checkbox-icon" class:tick={$progressStore[key]}>✓</span>
                  {:else}
                  <span class="checkbox-icon">x</span>
                {/if}
                <a rel="prefetch" title={label} href={url}>{label}</a>
            </label>
            <span class="dropdown-trigger" on:click={()=>{toggle = !toggle}}></span>
            {#if toggle}
              <p transition:slide={{ duration: 300 }} class="checklist-text">{text}</p>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
  <PopUpLauncher {handlePopUp} />
</div>

<style>
  .onboarding-complete {
    display: none;
  }

  .form-container {
    z-index: 9;
    position: fixed;
    top: 4rem;
    right: 1.5rem;
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

  .popup-header {
    display: grid;
    grid-template-columns: auto auto;
    padding: 0 1rem;
    background-color: hsla(173, 56%, 44%, 1);
    color: #FFF;
    height: 2.3rem;
    font-size: 0.8rem;
  }

  .popup-header h3 {
    font-size: 14px;
    padding: 0;
    margin: 0.5rem 0rem;
    font-weight: 600;
  }

  .close-popup {
    border: none;
    background-color: transparent;
    font-size: 16px;
    margin: auto 1rem auto auto;
  }

  .close-popup:hover {
    color: hsla(224, 58%, 96%, 1);
    cursor: pointer;
  }

  .popup-body {
    padding: 0 1rem 2rem;
    line-height: 1.5;
  }

  .checkbox-item {
    margin: 0.5rem 0;
    padding: 0.5rem 0;
  }

  .toggled {
    background-color: hsla(224, 58%, 96%, 1);
  }
  
  .checklist-label a {
    color: hsla(224, 59%, 53%, 1);
    text-decoration: none;
    cursor: pointer;
  }

  .checklist-label.checked a {
    color: hsla(0, 0%, 40%, 1);
  }

  .checkbox {
    display: none;
  }

  .checkbox-icon {
    margin: 0 0.5rem;
    color: hsla(0, 0%, 40%, 1);
  }

  .dropdown-trigger {
    float: right;
    margin: 0 1rem;
    color: hsla(0, 0%, 40%, 1);
    cursor: pointer;
  }

  .dropdown-trigger::before {
    border-style: solid;
    border-width: 0.12em 0.12em 0 0;
    content: '';
    display: inline-block;
    height: 0.45em;
    left: 0.15em;
    position: relative;
    vertical-align: top;
    width: 0.45em;
    top: 0;
    transform: rotate(135deg);
  }

  .tick {
    color: hsla(173, 56%, 44%, 1);
  }
  
  .checklist-text {
    color: hsla(0, 0%, 48%, 1);
    margin: 0 0.5rem;
    max-width: 90%;
    padding: 1rem;
  }

  @media only screen and (max-width: 600px) {
    .form-container {
      width: 100%;
      margin: 0;
      right: 0;
    }

    .progress-popup {
      max-width: 90%;
      margin: 0 auto;
    }

    .popup-header,
    .popup-body {
      padding: 0.5rem;
    }

    .checklist-text {
      padding: .5rem;
    }
  }
</style>
