<script>
  import ChecklistStore from "../stores/checklist-data";

  let progressState;

  ChecklistStore.subscribe((data) => {
    progressState = data;
  });

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
</script>

<div class="progress-bar">
  <div class="progress-status" style="width: {value}%" />
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
