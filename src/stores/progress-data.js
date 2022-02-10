import { readable } from "svelte/store";

let onboardingProgress = {
  progress: {
    adventure: false,
    onboarded: false,
    organisation: false,
    payment: false,
    policies: false,
    terms: false,
  },
};

const ProgressStore = readable(onboardingProgress);

export default ProgressStore;
