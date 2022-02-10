import { readable } from "svelte/store";
import ProgressStore from "./progress-data";

let progressData;

ProgressStore.subscribe((data) => {
  progressData = data;
});

let checklistData = {
  organisation: {
    checked: progressData.progress.organisation,
    label: "Complete your company profile",
    text: "Upload your logo, pin your location, add a phone and description and you're all set!",
  },
  adventure: {
    checked: progressData.progress.adventure,
    label: "Create your first experience",
    text: "Follow the easy step-by-step guide to create a compelling experience that sells.",
  },
  payment: {
    checked: progressData.progress.payment,
    label: "Link your payment account",
    text: "Connect via Stripe to get paid when you sell tickets.",
  },
  policies: {
    checked: progressData.progress.policies,
    label: "Set your cancellation policy",
    text: "Choose between 'Flexible', 'Moderate' or set a Custom policy",
  },
};

const ChecklistStore = readable(checklistData);

export default ChecklistStore;
