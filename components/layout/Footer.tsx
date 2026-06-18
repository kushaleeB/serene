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
import { cn } from "@/utils/cn";

const footerLinkClass =
  "inline-flex min-h-11 items-center text-sm text-white/70 transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="bg-primary text-white/90" aria-label="Site footer">
      <Container as="div" className="py-10 md:py-12 lg:py-14">
        <div className="grid grid-cols-1 gap-10 sm:gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-4 lg:gap-6">
          <div className="space-y-4">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.logoAlt}
              width={120}
              height={32}
              loading="lazy"
              sizes="120px"
              className="h-7 w-auto brightness-0 invert"
            />
            <p className="max-w-xs text-pretty text-sm leading-relaxed text-white/70">
              {footerContent.brandDescription}
            </p>
            <Globe size={18} className="text-white/50" strokeWidth={1.5} aria-hidden="true" />
          </div>

          <div>
            <h3 className="mb-3 font-body text-sm font-semibold text-white">
              {footerContent.exploreTitle}
            </h3>
            <ul className="space-y-1">
              {footerExploreLinks.map((link) => (
                <li key={link.sectionId}>
                  <Link href={link.href} className={footerLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-body text-sm font-semibold text-white">
              {footerContent.legalTitle}
            </h3>
            <ul className="space-y-1">
              {footerLegalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={footerLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="mb-2 font-body text-sm font-semibold text-white">
              {footerContent.newsletter.title}
            </h3>
            <p className="mb-4 text-pretty text-sm leading-relaxed text-white/70">
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
                className="min-h-11 w-full bg-transparent pr-12 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className={cn(
                  "absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center",
                  "text-white/70 transition-colors hover:text-white"
                )}
                aria-label={footerContent.newsletter.buttonLabel}
              >
                <ArrowRight size={18} strokeWidth={1.5} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center md:mt-8 md:pt-5">
          <p className="text-xs text-white/50">{footerContent.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
