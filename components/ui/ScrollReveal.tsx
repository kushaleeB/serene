"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { EASE, MOTION_VIEWPORT } from "@/utils/motion";
import { cn } from "@/utils/cn";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const reduced = useReducedMotion();

  const hidden =
    direction === "left"
      ? { opacity: reduced ? 1 : 0, x: reduced ? 0 : -22 }
      : direction === "right"
        ? { opacity: reduced ? 1 : 0, x: reduced ? 0 : 22 }
        : { opacity: reduced ? 1 : 0, y: reduced ? 0 : 18 };

  return (
    <m.div
      className={cn(className)}
      initial={hidden}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={MOTION_VIEWPORT}
      transition={{
        duration: reduced ? 0 : 0.55,
        delay: reduced ? 0 : delay,
        ease: EASE,
      }}
    >
      {children}
    </m.div>
  );
}
