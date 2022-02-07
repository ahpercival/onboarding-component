<script>
  import ProgressChecklist from "../components/progress-checklist.svelte";
</script>

<button class="popup-button">Open</button>

<div class="chat-popup">
  <div class="form-container">
    <ProgressChecklist />
  </div>
</div>

<style>
  .popup-button {
    font-family: "Cabin", "Trebuchet MS", Roboto, Helvetica, Arial, sans-serif;
    background-color: hsla(173, 56%, 44%, 1);
    border: 0;
    color: #fff;
    font-size: 1rem;
    line-height: 1.1;
    padding: 0.4rem 1rem;
    border-radius: 0.4rem;
  }

  .popup-button:hover {
    background-color: transparent;
    color: hsla(173, 56%, 44%, 1);
    border: solid 1px hsla(173, 56%, 44%, 1);
    cursor: pointer;
  }

  .chat-popup {
    /* display: none; */
    z-index: 9;
    position: fixed;
    bottom: 0;
    right: 15px;
  }

  .form-container {
    max-width: 500px;
    padding: 5px 10px;
  }
</style>
