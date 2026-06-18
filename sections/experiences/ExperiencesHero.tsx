"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { experiencesPageHero } from "@/data";
import { Container } from "@/components/ui/Container";

export function ExperiencesHero() {
  return (
    <section className="relative min-h-[75vh] overflow-hidden" aria-label="Experiences hero">
      <div className="absolute inset-0">
        <Image
          src={experiencesPageHero.backgroundImage}
          alt={experiencesPageHero.backgroundAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent" />
        <div className="hero-overlay-bottom absolute inset-0" />
      </div>

      <Container className="relative z-10 flex min-h-[75vh] flex-col justify-center pb-16 pt-28 md:pb-20 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <p className="label-caps text-white/80">{experiencesPageHero.eyebrow}</p>
          <h1 className="mt-4 font-display text-[2rem] leading-[1.15] text-white md:text-[3rem]">
            {experiencesPageHero.title}
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-white/85 md:text-lg">
            {experiencesPageHero.description}
          </p>
          <Link
            href="#curated-moments"
            className="label-caps mt-8 inline-flex items-center gap-2 text-white/90 transition-colors hover:text-white"
          >
            {experiencesPageHero.scrollCta}
            <ChevronDown size={16} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
