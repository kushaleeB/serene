"use client";

import { motion } from "framer-motion";
import { ExperienceSearchBar } from "@/components/layout/ExperienceSearchBar";

export function ExperienceSearchBarSection() {
  return (
    <section
      aria-label="Search experiences"
      className="relative z-30 bg-white"
    >
      <div className="px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative -mt-12 mx-auto w-full max-w-4xl md:-mt-14"
        >
          <ExperienceSearchBar />
        </motion.div>
      </div>
      <div className="h-10 md:h-12" aria-hidden="true" />
    </section>
  );
}
