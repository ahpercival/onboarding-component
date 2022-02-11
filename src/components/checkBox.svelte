<script>
  export let progress;
  const checklistData = [
    {
      key: "organisation",
      label: "Complete your company profile",
      text: "Upload your logo, pin your location, add a phone and description and you're all set!",
    },
    {
      key: "adventure",
      label: "Create your first experience",
      text: "Follow the easy step-by-step guide to create a compelling experience that sells.",
    },
    {
      key: "payment",
      label: "Link your payment account",
      text: "Connect via Stripe to get paid when you sell tickets.",
    },
    {
      key: "policies",
      label: "Set your cancellation policy",
      text: "Choose between 'Flexible', 'Moderate' or set a Custom policy",
    },
  ];
</script>

{#each checklistData as { key, label, text }}
  <div>
    <label class="checklist-label" class:checked={progress[key]}>
      <input class="checkbox" type="checkbox" />
      {label}
      {#if progress[key]}
        <span class="tick">✓</span>
      {/if}
    </label>
    <p class="checklist-text" class:checked={progress[key]}>{text}</p>
  </div>
{/each}

<style>
  .checklist-label {
    display: flex;
    color: hsla(173, 56%, 44%, 1);
  }

  .checklist-label.checked {
    color: hsla(0, 0%, 40%, 1);
  }

  .checkbox {
    display: none;
  }

  .tick {
    margin: 0 0.5rem;
    color: hsla(173, 56%, 44%, 1);
  }

  .checklist-text {
    font-size: 14px;
  }

  .checklist-text.checked {
    color: hsla(0, 0%, 48%, 1);
  }
</style>
