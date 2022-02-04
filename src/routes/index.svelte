<script>
  import ProgressBar from "../components/progressBar.svelte";
  import CheckBox from "../components/checkBox.svelte";
  let progressState = {
    one: {
      checked: false,
      label: "Complete your company profile",
      text: "Upload your logo, pin your location, add a phone and description and you're all set!",
    },
    two: {
      checked: false,
      label: "Create your first experience",
      text: "Follow the easy step-by-step guide to create a compelling experience that sells.",
    },
    three: {
      checked: false,
      label: "Link your payment account",
      text: "Connect via Stripe to get paid when you sell tickets.",
    },
    four: {
      checked: false,
      label: "Set your cancellation policy",
      text: "Choose between 'Flexible', 'Moderate' or set a Custom policy",
    },
  };

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
  $: disabled = value !== 100;
</script>

<ProgressBar {value} />
<h3>Welcome to Beyonk</h3>
<p>
  Selling tickets has never been easier. Follow our simple checklist below to
  finish your set-up with Beyonk.
</p>

{#each progessValues as { checked, label, text }}
  <CheckBox bind:checked {label} {text} />
{/each}

<button {disabled}>Proceed</button>
