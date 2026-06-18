"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, type Transition, type Variants } from "framer-motion";
import { heroContent } from "@/data";
import { BookingBar } from "@/components/layout/BookingBar";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import { cn } from "@/utils/cn";

const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];

function useCompactHeroMotion() {
  const [isCompact, setIsCompact] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactQuery = window.matchMedia("(max-width: 767px)");

    const updateMotion = () => setPrefersReducedMotion(motionQuery.matches);
    const updateCompact = () => setIsCompact(compactQuery.matches);

    updateMotion();
    updateCompact();

    motionQuery.addEventListener("change", updateMotion);
    compactQuery.addEventListener("change", updateCompact);

    return () => {
      motionQuery.removeEventListener("change", updateMotion);
      compactQuery.removeEventListener("change", updateCompact);
    };
  }, []);

  return { isCompact, prefersReducedMotion };
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const { isCompact, prefersReducedMotion } = useCompactHeroMotion();

  const fadeUp = useMemo<Variants>(
    () => ({
      hidden: {
        opacity: prefersReducedMotion ? 1 : 0,
        y: prefersReducedMotion ? 0 : isCompact ? 10 : 24,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: prefersReducedMotion ? 0 : isCompact ? 0.45 : 0.8,
          ease: EASE,
        },
      },
    }),
    [isCompact, prefersReducedMotion]
  );

  const fadeIn = useMemo<Variants>(
    () => ({
      hidden: { opacity: prefersReducedMotion ? 1 : 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: prefersReducedMotion ? 0 : isCompact ? 0.4 : 0.8,
          ease: EASE,
        },
      },
    }),
    [isCompact, prefersReducedMotion]
  );

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
      className={cn(
        "relative flex min-h-screen min-h-dvh flex-col overflow-x-hidden bg-primary",
        "pt-[max(6.5rem,env(safe-area-inset-top)+4.5rem)]",
        "pb-[max(1rem,env(safe-area-inset-bottom))]"
      )}
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

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 text-center sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto w-full max-w-3xl"
        >
          <h1
            className={cn(
              "font-display text-balance break-words tracking-[-0.02em] text-white",
              "text-[clamp(2rem,5.5vw+0.75rem,4rem)] leading-[1.08]",
              "max-w-[14ch] mx-auto sm:max-w-none sm:leading-[1.1] md:mx-auto"
            )}
          >
            {heroContent.headline}
          </h1>
          <p
            className={cn(
              "mx-auto mt-4 max-w-xl text-pretty font-body leading-relaxed text-white/85",
              "text-[clamp(0.9375rem,1.6vw+0.65rem,1.125rem)]",
              "sm:mt-5 md:mt-6"
            )}
          >
            {heroContent.subheadline}
          </p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: prefersReducedMotion ? 0 : isCompact ? 0.08 : 0.2 }}
            className="mt-6 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-8 md:mt-10 md:flex-row md:items-center"
          >
            <Button
              href={heroContent.primaryCta.href}
              variant="primary"
              className="w-full md:w-auto"
            >
              {heroContent.primaryCta.label}
            </Button>
            <Button
              href={heroContent.secondaryCta.href}
              variant="ghost"
              className="w-full md:w-auto"
            >
              {heroContent.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: prefersReducedMotion ? 0 : isCompact ? 0.12 : 0.4 }}
            className="mt-6 flex flex-col items-center justify-center gap-1.5 sm:mt-8 sm:flex-row sm:gap-2 md:mt-10"
          >
            <StarRating rating={heroContent.rating} />
            <span className="max-w-[16rem] text-center text-pretty text-sm text-white/90 sm:max-w-none">
              {heroContent.ratingText}
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: prefersReducedMotion ? 0 : isCompact ? 0.1 : 0.2 }}
        className="relative z-20 shrink-0 px-5 pt-4 sm:px-6 md:px-8 md:pt-6"
      >
        <div className="mx-auto w-full max-w-4xl">
          <BookingBar id="booking" />
        </div>
      </motion.div>
    </section>
  );
}
