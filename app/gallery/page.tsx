import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { galleryPageContent } from "@/data";
import { GalleryMasonry } from "@/sections/gallery/GalleryMasonry";
import { GalleryPageHero } from "@/sections/gallery/GalleryPageHero";

export const metadata: Metadata = {
  title: "Gallery | SERENE Luxury Boutique Villas",
  description: galleryPageContent.description,
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <GalleryPageHero
          title={galleryPageContent.title}
          description={galleryPageContent.description}
        />
        <GalleryMasonry />
      </main>
      <Footer />
    </>
  );
}
