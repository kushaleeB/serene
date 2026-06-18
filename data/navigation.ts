import type { NavLink } from "@/types";
import type { FooterContent, FooterLegalLink } from "@/types/footer";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", sectionId: "home" },
  { label: "Villas", href: "/villas", sectionId: "villas" },
  { label: "Experiences", href: "/experiences", sectionId: "experiences" },
  { label: "Gallery", href: "/gallery", sectionId: "gallery" },
  { label: "Contact", href: "/contact", sectionId: "contact" },
];

export const footerExploreLinks: NavLink[] = [
  { label: "Villas", href: "/villas", sectionId: "villas" },
  { label: "Experiences", href: "/experiences", sectionId: "experiences" },
  { label: "Gallery", href: "/gallery", sectionId: "gallery" },
  { label: "Contact", href: "/contact", sectionId: "contact" },
];

export const footerLegalLinks: FooterLegalLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Sustainability", href: "#" },
  { label: "Press", href: "#" },
];

export const footerContent: FooterContent = {
  brandDescription:
    "A sanctuary of quiet, sustainable luxury on the southern coast of Sri Lanka.",
  exploreTitle: "Explore",
  legalTitle: "Legal",
  newsletter: {
    title: "Newsletter",
    description: "Receive curated stories and exclusive offers from SERENE.",
    placeholder: "Email Address",
    buttonLabel: "Subscribe",
  },
  copyright: "© 2024 SERENE Luxury Villas Sri Lanka. All Rights Reserved.",
};

export const reserveCta = {
  label: "Reserve Your Escape",
  href: "/#booking",
};
