"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { m, type Variants } from "framer-motion";
import { heroContent } from "@/data";
import { useHeroVideoPreload } from "@/components/layout/HomeEntry";
import { BookingBar } from "@/components/layout/BookingBar";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { EASE } from "@/utils/motion";
import { cn } from "@/utils/cn";

function useCompactViewport() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const compactQuery = window.matchMedia("(max-width: 767px)");
    const updateCompact = () => setIsCompact(compactQuery.matches);
    updateCompact();
    compactQuery.addEventListener("change", updateCompact);
    return () => compactQuery.removeEventListener("change", updateCompact);
  }, []);

  return isCompact;
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { wasPreloaded } = useHeroVideoPreload();
  const [isVideoReady, setIsVideoReady] = useState(wasPreloaded);
  const isCompact = useCompactViewport();
  const prefersReducedMotion = useReducedMotion();

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

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
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
          // @ts-expect-error fetchPriority is valid on video in modern browsers
          fetchPriority="high"
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
        <m.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto w-full max-w-3xl"
        >
          <h1 className="type-display-hero mx-auto max-w-[14ch] text-balance break-words text-white sm:max-w-none">
            {heroContent.headline}
          </h1>
          <p className="type-body mx-auto mt-4 max-w-xl text-pretty text-white/85 sm:mt-5 md:mt-6">
            {heroContent.subheadline}
          </p>

          <m.div
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
          </m.div>

          <m.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: prefersReducedMotion ? 0 : isCompact ? 0.12 : 0.4 }}
            className="mt-6 flex flex-col items-center justify-center gap-1.5 sm:mt-8 sm:flex-row sm:gap-2 md:mt-10"
            role="group"
            aria-label={heroContent.ratingText}
          >
            <StarRating rating={heroContent.rating} label={`${heroContent.rating} out of 5 stars`} />
            <span className="type-body-sm max-w-[16rem] text-center text-pretty text-white/90 sm:max-w-none">
              {heroContent.ratingText}
            </span>
          </m.div>
        </m.div>
      </div>

      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: prefersReducedMotion ? 0 : isCompact ? 0.1 : 0.2 }}
        className="relative z-20 shrink-0 px-5 pt-4 sm:px-6 md:px-8 md:pt-6"
      >
        <div className="mx-auto w-full max-w-4xl">
          <BookingBar id="booking" />
        </div>
      </m.div>
    </section>
  );
}
