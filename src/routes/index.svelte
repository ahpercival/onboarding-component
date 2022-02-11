<script>
  import OnboardingChecklist from "../components/OnboardingChecklist.svelte";

  const progress = {
    adventure: false,
    onboarded: false,
    organisation: false,
    payment: false,
    policies: false,
    terms: false,
  };
</script>

<OnboardingChecklist {progress} />
