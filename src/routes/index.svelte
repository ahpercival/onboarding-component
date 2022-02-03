<script>
  import ProgressBar from "../components/progressBar.svelte";
  let progressState = [false, false];
  $: completedItems = progressState.filter((b) => {
    if (!!b) {
      return b;
    }
  });
  $: value = (100 / progressState.length) * completedItems.length;
  $: disabled = value !== 100;
</script>

<ProgressBar {value} />
{#each progressState as bool}
  <div>
    <label>
      <input type="checkbox" bind:checked={bool} />
      {bool}
    </label>
  </div>
{/each}

<button {disabled}>Continue</button>
