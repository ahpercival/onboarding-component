<script>
  let progressState = [false, false];
  $: completedItems = progressState.filter((b) => {
    if (!!b) {
      return b;
    }
  });
  $: value = (100 / progressState.length) * completedItems.length;
  $: disabled = value !== 100;
</script>

<div class="progress-bar">
  <div class="progress-status" style="width: {value}%" />
</div>

{#each progressState as bool}
  <div>
    <label>
      <input type="checkbox" bind:checked={bool} />
      {bool}
    </label>
  </div>
{/each}

<button {disabled}>Continue</button>

<style>
  .progress-bar {
    height: 5px;
    width: 100%;
  }
  .progress-status {
    height: 100%;
    background-color: hsla(173, 56%, 44%, 1);
    transition: width 0.5s;
  }
</style>
