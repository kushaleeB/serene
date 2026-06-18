export interface NavLink {
  label: string;
  href: string;
  sectionId: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  logo: string;
  logoAlt: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  social: SocialLink[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
}

export interface VillaAmenity {
  label: string;
  icon: string;
}

export interface Villa {
  id: string;
  name: string;
  location: string;
  price: number;
  currency: string;
  image: string;
  alt: string;
  description: string;
  amenities: VillaAmenity[];
  cta: {
    label: string;
    href: string;
  };
}

export interface FeaturedVillasContent {
  eyebrow: string;
  title: string;
  description: string;
  viewAllCta: {
    label: string;
    href: string;
  };
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
}

export interface ExperiencesPageHeroContent {
  eyebrow: string;
  title: string;
  description: string;
  scrollCta: string;
  backgroundImage: string;
  backgroundAlt: string;
}

export interface CuratedMomentsContent {
  title: string;
}

export interface BespokeExperienceContent {
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  image: string;
  imageAlt: string;
}

export interface ExperienceSearchLabels {
  destination: string;
  destinationPlaceholder: string;
  experience: string;
  experiencePlaceholder: string;
  date: string;
  datePlaceholder: string;
  cta: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  gridClass: string;
}

export interface GalleryPageContent {
  title: string;
  description: string;
  exploreMoreCta: {
    label: string;
    href: string;
  };
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  rating: number;
  review: string;
  image: string;
  alt: string;
}

export interface BookingConfig {
  baseNightlyRate: number;
  currency: string;
  maxGuests: number;
  minNights: number;
  cleaningFee: number;
  serviceFeePercent: number;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  rating: number;
  ratingText: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  backgroundImage: string;
  backgroundImageAlt: string;
}

export interface StoryContent {
  title: string;
  paragraphs: string[];
  cta: { label: string; href: string };
  image: string;
  imageAlt: string;
}

export interface CtaBannerContent {
  headline: string;
  subheadline: string;
  backgroundImage: string;
  backgroundAlt: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export type { ContactPageContent, ContactFormContent, ContactInfoContent, ContactPageHeroContent } from "./contact";
export type { FooterContent, FooterLegalLink, NewsletterContent } from "./footer";
