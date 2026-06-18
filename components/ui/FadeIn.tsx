"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { EASE } from "@/utils/motion";
import { cn } from "@/utils/cn";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Mount-time entrance for above-the-fold heroes — avoids whileInView on load */
export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const reduced = useReducedMotion();

  return (
    <m.div
      className={cn(className)}
      initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : delay, ease: EASE }}
    >
      {children}
    </m.div>
  );
}
