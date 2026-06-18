"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { contactPageContent } from "@/data";
import { Container } from "@/components/ui/Container";

export function ContactHero() {
  const { hero } = contactPageContent;

  return (
    <section
      className="relative flex min-h-[70vh] flex-col overflow-hidden md:min-h-[75vh]"
      aria-label="Contact hero"
    >
      <div className="absolute inset-0">
        <Image
          src={hero.backgroundImage}
          alt={hero.backgroundAlt}
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
        <div className="hero-overlay-bottom absolute inset-0" />
      </div>

      <Container className="relative z-10 flex flex-1 flex-col justify-center py-28 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <h1 className="font-display text-[2.25rem] leading-[1.15] text-white md:text-[3rem] lg:text-[3.25rem]">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-white/85 md:mt-6 md:text-lg">
            {hero.description}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
