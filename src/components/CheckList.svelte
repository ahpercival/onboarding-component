<script>
  import { progressStore } from "../stores.js";

  const checklistData = [
    {
      key: "organisation",
      label: "Complete your company profile",
      text: "Upload your logo, pin your location, add a phone and description and you're all set!",
      url: "profile/organisation?backTo=/"
    },
    {
      key: "adventure",
      label: "Create your first experience",
      text: "Follow the easy step-by-step guide to create a compelling experience that sells.",
      url: "event/create?backTo=/"
    },
    {
      key: "payment",
      label: "Link your payment account",
      text: "Connect via Stripe to get paid when you sell tickets.",
      url: "profile/payment-details?backTo=/"
    },
    {
      key: "policies",
      label: "Set your cancellation policy",
      text: "Choose between 'Flexible', 'Moderate' or set a Custom policy",
      url: "profile/terms?backTo=/"
    },
  ];
</script>

{#each checklistData as { key, label, text, url }}
  <div>
    <label class="checklist-label" class:checked={$progressStore[key]}>
      <input class="checkbox" type="checkbox" />
      {#if $progressStore[key]}
        <span class="checkbox-icon" class:tick={$progressStore[key]}>✓</span>
        {:else}
        <span class="checkbox-icon">x</span>
      {/if}
      <a rel="prefetch" title={label} href={url}>{label}</a>
    </label>
    <p class="checklist-text" class:checked={$progressStore[key]}>{text}</p>
  </div>
{/each}

<style>
  .checklist-label a {
    color: hsla(173, 56%, 44%, 1);
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

  .tick {
    color: hsla(173, 56%, 44%, 1);
  }
  
  .checklist-text.checked {
    color: hsla(0, 0%, 48%, 1);
  }
</style>
