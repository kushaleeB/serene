"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { storyContent } from "@/data";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/utils/cn";

export function Story() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="story"
      className="bg-surface-linen section-py"
      aria-labelledby="story-heading"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: prefersReducedMotion ? 1 : 0, x: prefersReducedMotion ? 0 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div
              className="absolute -left-4 -top-4 z-0 h-[88%] w-[88%] rounded-[1.25rem] bg-white/80"
              aria-hidden="true"
            />
            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-[1.25rem] shadow-[var(--shadow-soft)]">
              <Image
                src={storyContent.image}
                alt={storyContent.imageAlt}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: prefersReducedMotion ? 1 : 0, x: prefersReducedMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.7,
              delay: prefersReducedMotion ? 0 : 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:py-4"
          >
            <h2 id="story-heading" className="type-display-lg text-heading">
              {storyContent.title}
            </h2>
            <div className="mt-6 space-y-5">
              {storyContent.paragraphs.map((paragraph, i) => (
                <p key={i} className="type-body text-body-muted">
                  {paragraph}
                </p>
              ))}
            </div>
            <Link
              href={storyContent.cta.href}
              className={cn(
                "label-caps mt-8 inline-flex items-center gap-2 text-gold",
                "transition-colors hover:text-gold-dark"
              )}
            >
              {storyContent.cta.label}
              <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
