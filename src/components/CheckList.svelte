<script>
  import { progressStore } from "../stores.js";
  import { slide } from "svelte/transition";
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

<style>
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
    width: 100%;
    padding: 1rem 0;
  }
</style>
