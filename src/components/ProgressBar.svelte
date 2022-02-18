<script>
  import { get } from 'svelte/store'
  import { progressStore } from "../stores.js";
  const progress = get(progressStore)
  const { adventure, organisation, payment, policies } = progress;
  const checklistItems = [adventure, organisation, payment, policies];
  const checklistLength = checklistItems.length;
  const completedItems = checklistItems.filter((item) => !!item).length;
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
    grid-template-columns: 2rem auto;
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
