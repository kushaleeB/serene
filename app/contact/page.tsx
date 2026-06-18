import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { contactPageContent } from "@/data";
import { ContactHero } from "@/sections/contact/ContactHero";
import { ContactSection } from "@/sections/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact | SERENE Luxury Boutique Villas",
  description: contactPageContent.hero.description,
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ContactHero />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
