import type { FeaturedVillasContent, Villa } from "@/types";

export const featuredVillasContent: FeaturedVillasContent = {
  eyebrow: "Featured Villas",
  title: "Choose Your Perfect Escape",
  description:
    "Discover our handpicked selection of sanctuary retreats. Each villa is designed to harmonize with nature while providing uncompromising luxury and absolute privacy.",
  viewAllCta: { label: "View All Villas", href: "/villas" },
};

export const villasPageContent: FeaturedVillasContent = {
  eyebrow: "Luxury Villas",
  title: "Choose Your Perfect Escape",
  description:
    "Discover our handpicked selection of sanctuary retreats. Each villa is designed to harmonize with nature while providing uncompromising luxury and absolute privacy.",
  viewAllCta: { label: "Reserve Your Escape", href: "/#booking" },
};

export const villas: Villa[] = [
  {
    id: "ocean-serenity",
    name: "Ocean Serenity Villa",
    location: "Mirissa, Sri Lanka",
    price: 420,
    currency: "USD",
    image: "/img/villas/ocean_serenity_villa.png",
    alt: "Ocean Serenity Villa with infinity pool overlooking the Indian Ocean at sunset",
    description:
      "Private oceanfront villa featuring an infinity pool, outdoor lounge, and uninterrupted sunset views.",
    amenities: [
      { label: "2 Bedrooms", icon: "Bed" },
      { label: "Private Pool", icon: "Waves" },
      { label: "Ocean View", icon: "Eye" },
    ],
    cta: { label: "View Details", href: "/#booking" },
  },
  {
    id: "rainforest-hideaway",
    name: "Rainforest Hideaway",
    location: "Ella, Sri Lanka",
    price: 360,
    currency: "USD",
    image: "/img/villas/rainforest_hideaway_villa.png",
    alt: "Rainforest Hideaway villa nestled among lush green mountains",
    description:
      "A peaceful retreat surrounded by lush greenery with panoramic mountain views.",
    amenities: [
      { label: "1 Bedroom", icon: "Bed" },
      { label: "Mountain View", icon: "Mountain" },
      { label: "Private Deck", icon: "Trees" },
    ],
    cta: { label: "View Details", href: "/#booking" },
  },
  {
    id: "golden-coast",
    name: "Golden Coast Residence",
    location: "Tangalle, Sri Lanka",
    price: 590,
    currency: "USD",
    image: "/img/villas/golden_coast_residence.png",
    alt: "Golden Coast Residence beachfront villa with palm trees and ocean views",
    description:
      "An exclusive beachfront residence designed for unforgettable family vacations.",
    amenities: [
      { label: "3 Bedrooms", icon: "Bed" },
      { label: "Beach Access", icon: "Umbrella" },
      { label: "Private Butler", icon: "User" },
    ],
    cta: { label: "View Details", href: "/#booking" },
  },
];
