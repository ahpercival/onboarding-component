import { readable } from "svelte/store";

let checklistData = {
  organisation: {
    checked: false,
    label: "Complete your company profile",
    text: "Upload your logo, pin your location, add a phone and description and you're all set!",
  },
  adventure: {
    checked: false,
    label: "Create your first experience",
    text: "Follow the easy step-by-step guide to create a compelling experience that sells.",
  },
  payment: {
    checked: false,
    label: "Link your payment account",
    text: "Connect via Stripe to get paid when you sell tickets.",
  },
  policies: {
    checked: false,
    label: "Set your cancellation policy",
    text: "Choose between 'Flexible', 'Moderate' or set a Custom policy",
  },
};

const ChecklistStore = readable(checklistData);

export default ChecklistStore;
