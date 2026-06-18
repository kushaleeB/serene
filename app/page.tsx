import dynamic from "next/dynamic";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { Story } from "@/sections/Story";

const Testimonials = dynamic(
  () => import("@/sections/Testimonials").then((mod) => mod.Testimonials),
  { loading: () => <div className="min-h-[24rem] bg-surface-linen" aria-hidden="true" /> }
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Story />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
