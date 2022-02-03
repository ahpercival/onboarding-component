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

<div>
  <label>
    <input type="checkbox" bind:checked={progressState[0]} />
    {progressState[0]}
  </label>
</div>
<div>
  <label>
    <input type="checkbox" bind:checked={progressState[1]} />
    {progressState[1]}
  </label>
</div>

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
