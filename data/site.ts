import type { CtaBannerContent, HeroContent, SiteConfig, StoryContent } from "@/types";

export const siteConfig: SiteConfig = {
  name: "SERENE",
  tagline: "Where the Indian Ocean meets timeless elegance",
  description:
    "A sanctuary of quiet, sustainable luxury on the southern coast of Sri Lanka.",
  url: "https://serenevillas.com",
  logo: "/img/hero/logo.png",
  logoAlt: "SERENE luxury boutique villas",
  contact: {
    phone: "+94 77 123 4567",
    email: "hello@serenevillas.com",
    address: "Southern Coast, Sri Lanka",
  },
  social: [
    { platform: "instagram", href: "https://instagram.com", label: "Instagram" },
    { platform: "facebook", href: "https://facebook.com", label: "Facebook" },
    { platform: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
  ],
  seo: {
    title: "SERENE | Luxury Boutique Villas — Southern Coast, Sri Lanka",
    description:
      "Experience handcrafted luxury villas surrounded by tropical forests and the Indian Ocean. A sanctuary of silence, space, and unmatched hospitality.",
    keywords: [
      "luxury villa Sri Lanka",
      "boutique hotel Galle",
      "honeymoon villa",
      "southern coast Sri Lanka",
    ],
    ogImage: "/img/hero/hero_img.png",
  },
};

export const heroContent: HeroContent = {
  headline: "Escape Beyond Ordinary",
  subheadline:
    "Experience handcrafted luxury villas surrounded by tropical forests and the Indian Ocean. A sanctuary of silence, space, and unmatched hospitality.",
  rating: 4.9,
  ratingText: "4.9 from 600+ discerning guests",
  primaryCta: { label: "Reserve Your Escape", href: "/#booking" },
  secondaryCta: { label: "Explore Villas", href: "/villas" },
  backgroundVideo: "/videos/hero.mp4",
};

export const storyContent: StoryContent = {
  title: "A Sanctuary Woven Into Nature",
  paragraphs: [
    "SERENE was born from a desire to create a retreat where the noise of the world fades away. Nestled on the untouched southern coast of Sri Lanka, our boutique villas are designed to harmonize with their environment.",
    "We believe true luxury is found in space, silence, and deeply personalized service. From our sustainably sourced materials to the culinary journeys crafted by our private chefs, every detail is intentional. Here, you don't just stay; you breathe, reflect, and reconnect.",
  ],
  cta: { label: "Discover Our Philosophy", href: "#story" },
  image: "/img/story/our_story.png",
  imageAlt:
    "Minimalist interior with wooden pedestal table, white ceramic vase, and soft curtain light",
};

export const ctaBannerContent: CtaBannerContent = {
  headline: "Your private escape awaits",
  subheadline:
    "Reserve your villa and experience the southern coast of Sri Lanka in uncompromising comfort and calm.",
  backgroundImage: "/img/cta/banner.jpg",
  backgroundAlt: "Aerial view of luxury villas nestled along a palm-lined coastline",
  primaryCta: { label: "Reserve Your Stay", href: "#booking" },
  secondaryCta: { label: "Contact Us", href: "#contact" },
};
