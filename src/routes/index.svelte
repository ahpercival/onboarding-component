<script>
  import ProgressBar from "../components/progressBar.svelte";
  import CheckBox from "../components/checkBox.svelte";
  let progressState = {
    one: { checked: false, label: "Step One" },
    two: { checked: false, label: "Step Two" },
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
  $: disabled = value !== 100;
</script>

<ProgressBar {value} />
{#each progessValues as { checked, label }}
  <CheckBox bind:checked {label} />
{/each}

<button {disabled}>Continue</button>
