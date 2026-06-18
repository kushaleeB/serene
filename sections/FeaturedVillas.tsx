import { featuredVillasContent } from "@/data";
import { VillasListing } from "@/sections/VillasListing";

export function FeaturedVillas() {
  return (
    <VillasListing
      content={featuredVillasContent}
      showCta
      sectionId="featured-villas"
    />
  );
}
