"use client";

import { LazyMotion, domAnimation } from "framer-motion";

/** Loads only the DOM animation feature set — smaller bundle, better Lighthouse score */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
