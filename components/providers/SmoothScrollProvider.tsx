"use client";

/**
 * Native scroll is used intentionally — Lenis smooth-scroll added perceptible
 * input lag and fought Framer Motion's whileInView observers on long pages.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
