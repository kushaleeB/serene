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
    details: {
      guests: "Up to 4 guests",
      size: "2,800 sq ft",
      longDescription:
        "Perched above the Indian Ocean, Ocean Serenity Villa blends indoor-outdoor living with floor-to-ceiling glass, a heated infinity pool, and a private terrace designed for golden-hour dining. Every room is oriented toward the horizon for uninterrupted coastal views.",
      highlights: [
        "Heated infinity pool with ocean panorama",
        "Master suite with private ocean-view terrace",
        "Outdoor rain shower and tropical garden",
        "Dedicated villa host and daily housekeeping",
      ],
      includes: [
        "Daily breakfast prepared in-villa",
        "Airport transfers (round trip)",
        "Welcome champagne and fruit platter",
        "High-speed Wi-Fi throughout",
        "Beach gear and snorkeling equipment",
      ],
    },
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
    details: {
      guests: "Up to 2 guests",
      size: "1,650 sq ft",
      longDescription:
        "Nestled in the misty highlands of Ella, Rainforest Hideaway is an intimate sanctuary wrapped in emerald canopy. Wake to birdsong, unwind on your private deck, and watch clouds drift across the valley from a soaking tub framed by panoramic windows.",
      highlights: [
        "Panoramic mountain and valley views",
        "Private deck with fire pit lounge",
        "Soaking tub overlooking the rainforest",
        "Curated hiking and tea trail excursions",
      ],
      includes: [
        "Daily breakfast and afternoon tea",
        "Guided Ella Rock hike (on request)",
        "In-villa massage (60 minutes)",
        "High-speed Wi-Fi throughout",
        "Complimentary mountain bike hire",
      ],
    },
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
    details: {
      guests: "Up to 6 guests",
      size: "4,200 sq ft",
      longDescription:
        "Golden Coast Residence is SERENE's most expansive beachfront offering — a three-bedroom estate with direct sand access, a private butler, and generous living spaces for families or groups seeking refined coastal living without compromise.",
      highlights: [
        "Direct private beach access",
        "Three en-suite bedrooms with ocean views",
        "Private butler and in-villa chef on call",
        "Expansive pool deck and alfresco dining pavilion",
      ],
      includes: [
        "Private butler service throughout stay",
        "Daily breakfast and one chef-prepared dinner",
        "Airport transfers (round trip)",
        "Kids' welcome amenities on request",
        "Kayaks, paddleboards, and beach cabana setup",
      ],
    },
    cta: { label: "View Details", href: "/#booking" },
  },
];
