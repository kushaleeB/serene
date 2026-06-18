import type { NavLink } from "@/types";

export interface FooterLegalLink {
  label: string;
  href: string;
}

export interface NewsletterContent {
  title: string;
  description: string;
  placeholder: string;
  buttonLabel: string;
}

export interface FooterContent {
  brandDescription: string;
  exploreTitle: string;
  legalTitle: string;
  newsletter: NewsletterContent;
  copyright: string;
}
