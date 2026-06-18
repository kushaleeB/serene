"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import {
  footerContent,
  footerExploreLinks,
  footerLegalLinks,
  siteConfig,
} from "@/data";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-primary text-white/90" aria-label="Site footer">
      <Container as="div" className="section-py pb-8 pt-16 md:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-4">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.logoAlt}
              width={120}
              height={32}
              className="h-7 w-auto brightness-0 invert"
            />
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              {footerContent.brandDescription}
            </p>
            <Globe size={18} className="text-white/50" strokeWidth={1.5} aria-hidden="true" />
          </div>

          <div>
            <h3 className="mb-4 font-body text-sm font-semibold text-white">
              {footerContent.exploreTitle}
            </h3>
            <ul className="space-y-3">
              {footerExploreLinks.map((link) => (
                <li key={link.sectionId}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-body text-sm font-semibold text-white">
              {footerContent.legalTitle}
            </h3>
            <ul className="space-y-3">
              {footerLegalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-body text-sm font-semibold text-white">
              {footerContent.newsletter.title}
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/70">
              {footerContent.newsletter.description}
            </p>
            <form
              className="relative border-b border-white/30 pb-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                {footerContent.newsletter.placeholder}
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder={footerContent.newsletter.placeholder}
                className="w-full bg-transparent pr-10 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
                aria-label={footerContent.newsletter.buttonLabel}
              >
                <ArrowRight size={18} strokeWidth={1.5} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8 text-center">
          <p className="text-xs text-white/50">{footerContent.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
