import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { villasPageContent } from "@/data";
import { VillasListing } from "@/sections/VillasListing";
import { VillasPageHero } from "@/sections/VillasPageHero";

export const metadata: Metadata = {
  title: "Villas | SERENE Luxury Boutique Villas",
  description: villasPageContent.description,
};

export default function VillasPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <VillasPageHero
          eyebrow={villasPageContent.eyebrow}
          title={villasPageContent.title}
          description={villasPageContent.description}
        />
        <VillasListing
          content={villasPageContent}
          showCta
          showHeader={false}
          sectionId="villas"
        />
      </main>
      <Footer />
    </>
  );
}
