<script>
  import ProgressBar from "../components/progressBar.svelte";
  import CheckBox from "../components/checkBox.svelte";
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
{#each progressState as checked}
  <CheckBox bind:checked />
{/each}

<button {disabled}>Continue</button>
