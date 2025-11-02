import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedSections from "@/components/FeaturedSections";
import BestGearSection from "@/components/BestGearSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CategorySection />
      <FeaturedSections />
      <BestGearSection />
    </main>
  );
}