import type {
  BespokeExperienceContent,
  CuratedMomentsContent,
  Experience,
  ExperiencesPageHeroContent,
  ExperienceSearchLabels,
} from "@/types";

export const experiencesPageHero: ExperiencesPageHeroContent = {
  eyebrow: "Experiences",
  title: "Immerse Yourself in the Magic of Sri Lanka",
  description:
    "From tranquil retreats to exhilarating adventures, discover the soul of the island with SERENE.",
  scrollCta: "Scroll to Explore",
  backgroundImage: "/img/experiences/experience_bg_img.png",
  backgroundAlt:
    "Couple on a luxury boat watching a whale tail emerge from the Indian Ocean",
};

export const experienceSearchLabels: ExperienceSearchLabels = {
  destination: "Destination",
  destinationPlaceholder: "Southern Coast",
  experience: "Experience",
  experiencePlaceholder: "All Experiences",
  date: "Date",
  datePlaceholder: "Add Date",
  cta: "Search",
};

export const curatedMomentsContent: CuratedMomentsContent = {
  title: "Curated Moments",
};

export const experiences: Experience[] = [
  {
    id: "private-chef-dining",
    title: "Private Chef Dining",
    description:
      "Savor bespoke menus crafted by your private chef, featuring the finest local ingredients in an intimate outdoor setting.",
    image: "/img/experiences/culinary.png",
    alt: "Private chef preparing a gourmet meal in an outdoor kitchen",
    badge: "Full Day",
  },
  {
    id: "whale-watching",
    title: "Whale Watching",
    description:
      "Set sail on a private charter to witness blue whales and dolphins in their natural habitat along the southern coast.",
    image: "/img/experiences/adventure.png",
    alt: "Luxury boat near a whale tail on the open ocean",
    badge: "Full Day",
  },
  {
    id: "tea-plantation-tour",
    title: "Tea Plantation Tour",
    description:
      "Journey through emerald hill country plantations for guided tastings and insight into Sri Lanka's tea heritage.",
    image: "/img/experiences/culture.png",
    alt: "Rolling green tea plantations at sunrise in the Sri Lankan highlands",
    badge: "Full Day",
  },
  {
    id: "sunset-yoga",
    title: "Sunset Yoga",
    description:
      "Unwind with guided yoga on a private oceanfront deck as golden light settles over the horizon.",
    image: "/img/experiences/wellness.png",
    alt: "Coastal villa deck at sunset prepared for a yoga session",
    badge: "2 Hours",
  },
  {
    id: "luxury-spa-retreat",
    title: "Luxury Spa Retreat",
    description:
      "Restore body and mind with bespoke Ayurvedic treatments using indigenous herbs and centuries-old healing traditions.",
    image: "/img/experiences/rejuvenation.png",
    alt: "Serene luxury spa treatment room with natural materials",
    badge: "2 Hours",
  },
  {
    id: "wildlife-safari",
    title: "Wildlife Safari",
    description:
      "Venture into national parks with a private guide to encounter leopards, elephants, and Sri Lanka's remarkable biodiversity.",
    image: "/img/experiences/exploration.png",
    alt: "Leopard resting on a tree branch in the Sri Lankan wilderness",
    badge: "Full Day",
  },
];

export const bespokeExperienceContent: BespokeExperienceContent = {
  eyebrow: "Bespoke Services",
  title: "Tailor Your Own Experience",
  description:
    "Tell us what you're looking for and we'll help you create a personalized itinerary that suits your needs.",
  features: [
    "Personalized Itinerary",
    "Private Transportation",
    "24/7 Concierge Service",
  ],
  cta: { label: "Enquire Now", href: "/#contact" },
  image: "/img/experiences/inquiry.png",
  imageAlt: "Romantic candlelit dinner set up on a beach at dusk",
};
