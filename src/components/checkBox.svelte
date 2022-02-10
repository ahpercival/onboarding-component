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
    <label class="checklist-label">
      <input type="checkbox" bind:checked />
      {label}
    </label>
    <p>{text}</p>
  </div>
{/each}

<style>
  .checklist {
    margin: auto 1rem;
  }

  .checklist-label {
    color: hsla(173, 56%, 44%, 1);
  }
</style>
