import type { Transition, Variants } from "framer-motion";

export const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];

/** Single fire, low threshold — one observer per section, not per card */
export const MOTION_VIEWPORT = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -48px 0px",
} as const;

export function fadeUpVariants(reduced: boolean, distance = 18): Variants {
  return {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.5, ease: EASE },
    },
  };
}

export function staggerContainerVariants(reduced: boolean): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : 0.06,
        delayChildren: reduced ? 0 : 0.04,
      },
    },
  };
}

export function slideInVariants(reduced: boolean, direction: "left" | "right"): Variants {
  const offset = direction === "left" ? -22 : 22;
  return {
    hidden: { opacity: reduced ? 1 : 0, x: reduced ? 0 : offset },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: reduced ? 0 : 0.6, ease: EASE },
    },
  };
}
