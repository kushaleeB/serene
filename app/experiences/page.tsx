import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { experiencesPageHero } from "@/data";
import { BespokeExperience } from "@/sections/experiences/BespokeExperience";
import { CuratedMoments } from "@/sections/experiences/CuratedMoments";
import { ExperiencesHero } from "@/sections/experiences/ExperiencesHero";

export const metadata: Metadata = {
  title: "Experiences | SERENE Luxury Boutique Villas",
  description: experiencesPageHero.description,
};

export default function ExperiencesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ExperiencesHero />
        <CuratedMoments />
        <BespokeExperience />
      </main>
      <Footer />
    </>
  );
}
