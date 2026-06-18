"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experiencesPageHero } from "@/data";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function ExperiencesHero() {
  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden"
      aria-label="Experiences hero"
    >
      <div className="absolute inset-0">
        <Image
          src={experiencesPageHero.backgroundImage}
          alt={experiencesPageHero.backgroundAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
        <div className="hero-overlay-bottom absolute inset-0" />
      </div>

      <Container className="relative z-10 flex flex-1 flex-col justify-center py-28 md:py-32">
        <FadeIn className="max-w-xl">
          <p className="label-caps text-white/80">{experiencesPageHero.eyebrow}</p>
          <h1 className="type-display-lg mt-4 text-white">{experiencesPageHero.title}</h1>
          <p className="type-body mt-5 max-w-lg text-white/85 md:mt-6">
            {experiencesPageHero.description}
          </p>
          <Link
            href="#curated-moments"
            className="label-caps mt-8 inline-flex items-center gap-2 text-white/90 transition-colors hover:text-white md:mt-10"
          >
            {experiencesPageHero.scrollCta}
            <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
