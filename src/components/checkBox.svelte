<script>
  export let checked = false;
  export let label = "";
  export let text = "";
</script>

<div>
  <label>
    <input type="checkbox" bind:checked />
    {label}
  </label>
  <p>{text}</p>
</div>
