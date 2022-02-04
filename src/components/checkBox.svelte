<script>
  export let checked = false;
  export let label = "";
</script>

<div>
  <label>
    <input type="checkbox" bind:checked />
    {label}
  </label>
</div>
