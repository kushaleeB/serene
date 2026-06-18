"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import { heroContent, siteConfig } from "@/data";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { EASE } from "@/utils/motion";

const SESSION_KEY = "serene-entry-seen";
const MIN_DURATION_MS = 2000;
const MAX_DURATION_MS = 3000;

interface HeroVideoContextValue {
  wasPreloaded: boolean;
}

const HeroVideoContext = createContext<HeroVideoContextValue>({ wasPreloaded: false });

export function useHeroVideoPreload() {
  return useContext(HeroVideoContext);
}

interface HomeEntryProps {
  children: ReactNode;
}

export function HomeEntry({ children }: HomeEntryProps) {
  const [phase, setPhase] = useState<"checking" | "loading" | "ready">("checking");
  const [wasPreloaded, setWasPreloaded] = useState(false);

  useEffect(() => {
    setPhase(sessionStorage.getItem(SESSION_KEY) ? "ready" : "loading");
  }, []);

  function handleComplete(preloaded: boolean) {
    sessionStorage.setItem(SESSION_KEY, "1");
    setWasPreloaded(preloaded);
    setPhase("ready");
  }

  if (phase === "checking") {
    return <div className="min-h-dvh bg-primary" aria-hidden="true" />;
  }

  return (
    <HeroVideoContext.Provider value={{ wasPreloaded }}>
      <AnimatePresence mode="wait">
        {phase === "loading" && (
          <EntryLoader key="entry-loader" onComplete={handleComplete} />
        )}
      </AnimatePresence>
      {phase === "ready" ? children : null}
    </HeroVideoContext.Provider>
  );
}

interface EntryLoaderProps {
  onComplete: (videoPreloaded: boolean) => void;
}

function EntryLoader({ onComplete }: EntryLoaderProps) {
  const prefersReducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const startTimeRef = useRef<number>(0);
  const completedRef = useRef(false);
  const [progress, setProgress] = useState(0);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    startTimeRef.current = performance.now();

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const markReady = () => setVideoReady(true);
    video.addEventListener("canplaythrough", markReady);
    video.addEventListener("canplay", markReady);
    video.load();

    return () => {
      video.removeEventListener("canplaythrough", markReady);
      video.removeEventListener("canplay", markReady);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      const timer = window.setTimeout(() => {
        if (!completedRef.current) {
          completedRef.current = true;
          onComplete(videoReady);
        }
      }, 400);
      return () => window.clearTimeout(timer);
    }

    const tick = () => {
      const elapsed = performance.now() - startTimeRef.current;
      const timeProgress = Math.min(elapsed / MAX_DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - timeProgress, 2);
      setProgress(eased);

      const minReached = elapsed >= MIN_DURATION_MS;
      const maxReached = elapsed >= MAX_DURATION_MS;
      const canFinish = minReached && (videoReady || maxReached);

      if (canFinish && !completedRef.current) {
        completedRef.current = true;
        setProgress(1);
        window.setTimeout(() => onComplete(videoReady), prefersReducedMotion ? 0 : 520);
        return;
      }

      frameId = requestAnimationFrame(tick);
    };

    let frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [onComplete, prefersReducedMotion, videoReady]);

  return (
    <m.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-primary"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: prefersReducedMotion ? 0.15 : 0.55, ease: EASE }}
      role="status"
      aria-live="polite"
      aria-label="Loading SERENE"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,146,90,0.14)_0%,transparent_68%)]"
        aria-hidden="true"
      />

      <m.div
        className="absolute inset-0 opacity-[0.07]"
        animate={prefersReducedMotion ? undefined : { scale: [1, 1.06, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 h-[min(90vw,36rem)] w-[min(90vw,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/40" />
      </m.div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <m.div
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.9, ease: EASE }}
          className="relative"
        >
          <Image
            src={siteConfig.logo}
            alt=""
            width={160}
            height={44}
            priority
            className="h-9 w-auto brightness-0 invert md:h-10"
          />
        </m.div>

        <m.div
          className="mt-8 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: prefersReducedMotion ? 0 : 0.45, duration: 0.7, ease: EASE }}
          aria-hidden="true"
        >
          <m.span
            className="h-px origin-right bg-gold/70"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.5, duration: 0.8, ease: EASE }}
            style={{ width: "3.5rem" }}
          />
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <m.span
            className="h-px origin-left bg-gold/70"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.5, duration: 0.8, ease: EASE }}
            style={{ width: "3.5rem" }}
          />
        </m.div>

        <m.p
          className="label-caps mt-6 max-w-xs text-pretty text-white/55"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: prefersReducedMotion ? 0 : 0.75, duration: 0.65, ease: EASE }}
        >
          {siteConfig.tagline}
        </m.p>
      </div>

      <div className="absolute bottom-[max(2.5rem,env(safe-area-inset-bottom))] left-1/2 z-10 w-44 -translate-x-1/2">
        <div className="h-px overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-gold transition-[width] duration-150 ease-out"
            style={{ width: `${progress * 100}%` }}
            aria-hidden="true"
          />
        </div>
        <p className="mt-3 text-center text-[0.65rem] uppercase tracking-[0.22em] text-white/35">
          Preparing your escape
        </p>
      </div>

      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        className="sr-only"
        aria-hidden="true"
      >
        <source src={heroContent.backgroundVideo} type="video/mp4" />
      </video>
    </m.div>
  );
}
