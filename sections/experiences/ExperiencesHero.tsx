"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { BookingBar } from "@/components/layout/BookingBar";
import { experiencesPageHero } from "@/data";
import { Container } from "@/components/ui/Container";

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

      <Container className="relative z-10 flex flex-1 flex-col justify-center pb-36 pt-28 md:pb-44 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <p className="label-caps text-white/80">{experiencesPageHero.eyebrow}</p>
          <h1 className="mt-4 font-display text-[2rem] leading-[1.15] text-white md:text-[3rem] lg:text-[3.5rem]">
            {experiencesPageHero.title}
          </h1>
          <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-white/85 md:mt-6 md:text-lg">
            {experiencesPageHero.description}
          </p>
          <Link
            href="#curated-moments"
            className="label-caps mt-8 inline-flex items-center gap-2 text-white/90 transition-colors hover:text-white md:mt-10"
          >
            {experiencesPageHero.scrollCta}
            <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </motion.div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 z-20 px-5 pb-8 md:px-6 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-4xl"
        >
          <BookingBar />
        </motion.div>
      </div>
    </section>
  );
}
