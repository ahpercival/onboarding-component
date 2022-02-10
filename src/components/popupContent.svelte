<script>
  import CheckBox from "../components/checkBox.svelte";
</script>

<div class="checklist-container">
  <h3>Welcome To Beyonk</h3>
  <p>
    Selling tickets has never been easier. Follow our simple checklist below to
    finish your set-up with Beyonk.
  </p>
  <CheckBox />
</div>

<style>
  .checklist-container {
    padding: 0 1rem 2rem;
  }

  @media only screen and (max-width: 600px) {
    .checklist-container {
      padding: 0.5rem;
    }
  }
</style>
