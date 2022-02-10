<script>
  import ChecklistStore from "../stores/checklist-data";

  let progressState;

  ChecklistStore.subscribe((data) => {
    progressState = data;
  });

  $: progessValues = Object.values(progressState);
</script>

{#each progessValues as { checked, label, text }}
  <div class="checklist">
    <label
      class="checklist-label"
      style="color: {!checked
        ? 'hsla(173, 56%, 44%, 1)'
        : 'hsla(0, 0%, 40%, 1)'}"
    >
      <input class="checkbox" type="checkbox" />
      {label}
      <span class="tick" style="display: {!checked ? 'none' : 'block'};">
        ✓</span
      >
    </label>
    <p
      class="checklist-text"
      style="color: {!checked ? 'hsla(0, 0%, 14%, 1)' : 'hsla(0, 0%, 48%, 1)'}"
    >
      {text}
    </p>
  </div>
{/each}

<style>
  .checklist-label {
    display: flex;
  }

  .checklist-text {
    font-size: 14px;
  }

  .checkbox {
    display: none;
  }

  .tick {
    margin: 0 0.5rem;
    color: hsla(173, 56%, 44%, 1);
  }
</style>
