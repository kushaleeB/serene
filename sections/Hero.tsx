"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { heroContent } from "@/data";
import { BookingBar } from "@/components/layout/BookingBar";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import { cn } from "@/utils/cn";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleReady = () => setIsVideoReady(true);

    if (video.readyState >= 3) {
      handleReady();
    } else {
      video.addEventListener("canplay", handleReady);
    }

    if (prefersReducedMotion) {
      video.pause();
      return () => video.removeEventListener("canplay", handleReady);
    }

    video.play().catch(() => {
      handleReady();
    });

    return () => video.removeEventListener("canplay", handleReady);
  }, [prefersReducedMotion]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-x-hidden bg-primary"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay={!prefersReducedMotion}
          muted
          loop
          playsInline
          preload="auto"
          className={cn(
            "h-full w-full object-cover object-center transition-opacity duration-700",
            isVideoReady ? "opacity-100" : "opacity-0"
          )}
          aria-hidden="true"
        >
          <source src={heroContent.backgroundVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay-top absolute inset-0" />
        <div className="hero-overlay-bottom absolute inset-0" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-36 pt-28 text-center md:px-6 md:pb-44 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl"
        >
          <h1 className="font-display text-[2.5rem] leading-[1.1] tracking-[-0.02em] text-white md:text-[4rem]">
            {heroContent.headline}
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-body text-base leading-relaxed text-white/85 md:mt-6 md:text-lg">
            {heroContent.subheadline}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-10"
          >
            <Button href={heroContent.primaryCta.href} variant="primary">
              {heroContent.primaryCta.label}
            </Button>
            <Button href={heroContent.secondaryCta.href} variant="ghost">
              {heroContent.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-2 md:mt-10"
          >
            <StarRating rating={heroContent.rating} />
            <span className="text-sm text-white/90">{heroContent.ratingText}</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 px-5 pb-8 md:px-6 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-4xl"
        >
          <BookingBar id="booking" />
        </motion.div>
      </div>
    </section>
  );
}
