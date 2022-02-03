<script>
  let checked = [false];
  $: value =
    checked.filter((b) => {
      if (!!b) {
        return b;
      }
    }).length * 100;
</script>

<div class="progress-bar">
  <div class="progress-status" style="width: {value}%" />
</div>

<div>
  <label>
    <input type="checkbox" bind:checked={checked[0]} />
    {checked[0]}
  </label>
</div>

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
