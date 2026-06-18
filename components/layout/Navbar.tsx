"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, reserveCta, siteConfig } from "@/data";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/utils/cn";

const MOBILE_DRAWER_ID = "mobile-nav-drawer";
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function isLinkActive(pathname: string, href: string, sectionId: string) {
  if (sectionId === "home") return pathname === "/";
  if (href.startsWith("/") && !href.includes("#")) return pathname === href;
  return false;
}

function getFocusableElements(container: HTMLElement, menuButton: HTMLButtonElement | null) {
  const items = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
  if (menuButton) {
    return [...items, menuButton];
  }
  return items;
}

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstNavLinkRef = useRef<HTMLAnchorElement>(null);

  const useLightNav = !isHome || isScrolled;

  const closeMobileMenu = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileOpen((open) => !open);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  useEffect(() => {
    if (!isMobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      firstNavLinkRef.current?.focus();
    }, 100);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMobileMenu();
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;

      const focusable = getFocusableElements(drawerRef.current, menuButtonRef.current);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [isMobileOpen, closeMobileMenu]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        useLightNav
          ? "glass-panel border-b border-stone-200/60 py-3 shadow-[var(--shadow-soft)]"
          : "bg-gradient-to-b from-black/30 to-transparent py-5"
      )}
    >
      <Container as="div">
        <nav
          className="flex items-center justify-between gap-4"
          aria-label="Main navigation"
        >
          <Link href="/" className="relative z-10 shrink-0" aria-label="SERENE home">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.logoAlt}
              width={120}
              height={32}
              loading="lazy"
              sizes="120px"
              className={cn(
                "h-7 w-auto md:h-8",
                useLightNav ? "brightness-0" : "brightness-0 invert"
              )}
            />
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const active = isLinkActive(pathname, link.href, link.sectionId);
              return (
                <li key={link.sectionId}>
                  <Link
                    href={link.href}
                    className={cn(
                      "font-body text-sm transition-colors",
                      useLightNav
                        ? "text-on-surface-variant hover:text-heading"
                        : "text-white/90 hover:text-white",
                      active &&
                        (useLightNav
                          ? "border-b border-primary-container pb-0.5 text-heading"
                          : "border-b border-white pb-0.5 text-white")
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Button href={reserveCta.href} variant="primary" className="px-6 py-2.5 text-sm">
              {reserveCta.label}
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className={cn(
              "relative z-[60] flex h-11 w-11 items-center justify-center rounded-full lg:hidden",
              useLightNav ? "text-heading" : "text-white"
            )}
            onClick={toggleMobileMenu}
            aria-expanded={isMobileOpen}
            aria-controls={MOBILE_DRAWER_ID}
            aria-haspopup="dialog"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id={MOBILE_DRAWER_ID}
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-md lg:hidden"
          >
            <Container className="flex h-full flex-col justify-center gap-8 pt-20">
              <nav aria-label="Mobile navigation links">
                <ul className="flex flex-col gap-6">
                  {navLinks.map((link, i) => {
                    const active = isLinkActive(pathname, link.href, link.sectionId);
                    return (
                      <motion.li
                        key={link.sectionId}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{
                          duration: 0.35,
                          delay: i * 0.05,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Link
                          ref={i === 0 ? firstNavLinkRef : undefined}
                          href={link.href}
                          className={cn(
                            "inline-block type-display-md text-white transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
                            active && "border-b border-white/60 pb-1"
                          )}
                          aria-current={active ? "page" : undefined}
                          onClick={closeMobileMenu}
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{
                  duration: 0.35,
                  delay: navLinks.length * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={reserveCta.href}
                  className={cn(
                    "type-btn inline-flex w-full items-center justify-center rounded-full",
                    "bg-white text-primary hover:bg-white/90",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  )}
                  onClick={closeMobileMenu}
                >
                  {reserveCta.label}
                </Link>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
