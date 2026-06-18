"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, reserveCta, siteConfig } from "@/data";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/utils/cn";

function isLinkActive(pathname: string, href: string, sectionId: string) {
  if (sectionId === "home") return pathname === "/";
  if (href.startsWith("/") && !href.includes("#")) return pathname === href;
  return false;
}

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const useLightNav = !isHome || isScrolled;

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
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

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
              className={cn(
                "h-7 w-auto md:h-8",
                useLightNav ? "brightness-0" : "brightness-0 invert"
              )}
              priority
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
            type="button"
            className={cn(
              "relative z-10 rounded-full p-2 lg:hidden",
              useLightNav ? "text-heading" : "text-white"
            )}
            onClick={() => setIsMobileOpen((open) => !open)}
            aria-expanded={isMobileOpen}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-md lg:hidden"
          >
            <Container className="flex h-full flex-col justify-center gap-8 pt-20">
              <ul className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.sectionId}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="font-display text-3xl text-white"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Button
                href={reserveCta.href}
                variant="primary"
                className="w-full bg-white text-primary hover:bg-white/90"
                onClick={() => setIsMobileOpen(false)}
              >
                {reserveCta.label}
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
