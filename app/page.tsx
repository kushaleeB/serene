import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { Story } from "@/sections/Story";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Story />
      </main>
      <Footer />
    </>
  );
}
