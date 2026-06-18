import type { GalleryImage, GalleryPageContent } from "@/types";

export const galleryPageContent: GalleryPageContent = {
  title: "Discover Every Corner",
  description:
    "Explore the beauty of SERENE through carefully curated photography showcasing architecture, nature, and luxury interiors.",
  exploreMoreCta: { label: "Explore More Images", href: "#gallery-grid" },
};

export const galleryImages: GalleryImage[] = [
  {
    id: "infinity-pool",
    src: "/img/gallery/infinity_pool.png",
    alt: "Infinity pool at sunset surrounded by palm trees at a luxury villa",
    gridClass: "lg:row-span-2",
  },
  {
    id: "luxury-suite",
    src: "/img/gallery/luxury_suite.png",
    alt: "Luxury bedroom suite with panoramic ocean views",
    gridClass: "",
  },
  {
    id: "aerial-view",
    src: "/img/gallery/aerial_view.png",
    alt: "Aerial view of the SERENE villa complex nestled in tropical greenery",
    gridClass: "",
  },
  {
    id: "private-beach",
    src: "/img/gallery/private_beach.png",
    alt: "Private white sand beach with lounge chairs and palm trees",
    gridClass: "lg:col-span-2",
  },
  {
    id: "night-view",
    src: "/img/gallery/night_view.png",
    alt: "Villa exterior at night illuminated beside a glowing pool",
    gridClass: "lg:col-span-2",
  },
  {
    id: "living-space",
    src: "/img/gallery/living_space.png",
    alt: "Spacious open-air living area with natural materials and ocean breeze",
    gridClass: "",
  },
  {
    id: "floating-breakfast",
    src: "/img/gallery/floating_breakfast.png",
    alt: "Floating breakfast tray in a turquoise villa pool",
    gridClass: "lg:row-span-2",
  },
  {
    id: "romantic-dining",
    src: "/img/gallery/romantic_dining.png",
    alt: "Outdoor dinner table elegantly set for a sunset dining experience",
    gridClass: "",
  },
  {
    id: "ayurveda-spa",
    src: "/img/gallery/ayurveda_spa.png",
    alt: "Folded white spa towels with a frangipani flower on warm wood",
    gridClass: "",
  },
  {
    id: "sunset",
    src: "/img/gallery/sunset.png",
    alt: "Oceanfront lounge terrace overlooking a golden sunset horizon",
    gridClass: "",
  },
  {
    id: "forest",
    src: "/img/gallery/forest.png",
    alt: "Outdoor stone shower surrounded by lush tropical Monstera leaves",
    gridClass: "lg:row-span-2",
  },
  {
    id: "villa",
    src: "/img/gallery/villa.png",
    alt: "Modern villa architecture against a clear blue sky at dusk",
    gridClass: "",
  },
];
