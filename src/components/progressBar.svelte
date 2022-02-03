<script>
  export let value = 0;
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
