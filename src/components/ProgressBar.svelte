<script>
  export let checklistLength;
  export let completedItems;
  let value = (100 / checklistLength) * completedItems;
</script>

<div class="progress-bar-container">
  {completedItems}/{checklistLength}
  <div class="progress-bar">
    <div class="progress-status" style="width: {value}%" />
  </div>
</div>

<style>
  .progress-bar-container {
    display: grid;
    grid-template-columns: 10% 90%;
    padding: 5px 0;
  }

  .progress-bar {
    height: 7.5px;
    width: 100%;
    background-color: hsla(224, 58%, 96%, 1);
    border-radius: 0.5rem;
    margin: auto;
  }
  .progress-status {
    height: 100%;
    background-color: hsla(173, 56%, 44%, 1);
    transition: width 0.5s;
    border-radius: 0.5rem;
  }
</style>
