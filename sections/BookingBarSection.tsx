"use client";

import { motion } from "framer-motion";
import { BookingBar } from "@/components/layout/BookingBar";

export function BookingBarSection() {
  return (
    <section
      id="booking"
      aria-label="Check availability"
      className="relative z-30 bg-surface-linen"
    >
      <div className="px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative -mt-12 mx-auto w-full max-w-4xl md:-mt-14"
        >
          <BookingBar />
        </motion.div>
      </div>
      <div className="h-10 md:h-12" aria-hidden="true" />
    </section>
  );
}
