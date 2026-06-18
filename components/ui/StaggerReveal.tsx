"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import {
  MOTION_VIEWPORT,
  fadeUpVariants,
  staggerContainerVariants,
} from "@/utils/motion";
import { cn } from "@/utils/cn";

type StaggerTag = "div" | "ul" | "section";
type StaggerItemTag = "div" | "li";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  as?: StaggerTag;
}

export function StaggerReveal({ children, className, as = "div" }: StaggerRevealProps) {
  const reduced = useReducedMotion();
  const props = {
    className: cn(className),
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: MOTION_VIEWPORT,
    variants: staggerContainerVariants(reduced),
  };

  if (as === "ul") return <m.ul {...props}>{children}</m.ul>;
  if (as === "section") return <m.section {...props}>{children}</m.section>;
  return <m.div {...props}>{children}</m.div>;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: StaggerItemTag;
}

export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const reduced = useReducedMotion();
  const props = {
    className: cn(className),
    variants: fadeUpVariants(reduced),
  };

  if (as === "li") return <m.li {...props}>{children}</m.li>;
  return <m.div {...props}>{children}</m.div>;
}
