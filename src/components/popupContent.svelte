<script>
  import CheckBox from "../components/checkBox.svelte";
  export let display;
</script>

<div class="progress-popup">
  <h3>Welcome To Beyonk</h3>
  <div class="form-container" style="display: {display};">
    <div class="checklist-container">
      <p>
        Selling tickets has never been easier. Follow our simple checklist below
        to finish your set-up with Beyonk.
      </p>
      <CheckBox />
    </div>
  </div>
</div>

<style>
  .progress-popup {
    z-index: 9;
    position: fixed;
    bottom: 0;
    right: 15px;
    background-color: #f4f5f7;
    font-family: "Cabin", "Trebuchet MS", Roboto, Helvetica, Arial, sans-serif;
    color: hsla(0, 0%, 40%, 1);
  }

  .form-container {
    max-width: 500px;
    padding: 5px 10px;
  }

  .checklist-container {
    padding: 0 3rem 1rem;
  }
</style>
