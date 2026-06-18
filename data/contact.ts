import type { ContactPageContent } from "@/types/contact";

export const contactPageContent: ContactPageContent = {
  hero: {
    title: "Begin Your Journey",
    description:
      "Our concierge team is available around the clock to help plan your perfect Sri Lankan getaway.",
    backgroundImage: "/img/cta/hero.png",
    backgroundAlt: "Infinity pool at sunset overlooking the tropical Sri Lankan coastline",
  },
  info: {
    title: "Connect With Us",
    followLabel: "Follow the Collection",
    mapLabel: "SERENE — Southern Coast, Sri Lanka",
  },
  form: {
    title: "Direct Inquiry",
    fullName: { label: "Full Name", placeholder: "Johnathan Doe" },
    email: { label: "Email Address", placeholder: "j.doe@example.com" },
    subject: {
      label: "Subject",
      placeholder: "Villa Availability",
      options: [
        "Villa Availability",
        "Bespoke Experience",
        "General Inquiry",
        "Press & Media",
      ],
    },
    message: {
      label: "Your Message",
      placeholder: "Tell us about your dream stay...",
    },
    submit: "Send Inquiry",
  },
};
