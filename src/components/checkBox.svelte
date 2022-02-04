<script>
  export let checked = false;
  export let label = "";
  export let text = "";
</script>

<div class="checklist">
  <label class="checklist-label">
    <input type="checkbox" bind:checked />
    {label}
  </label>
  <p>{text}</p>
</div>

<style>
  .checklist {
    margin: auto 1rem;
  }

  .checklist-label {
    color: hsla(173, 56%, 44%, 1);
  }
</style>
