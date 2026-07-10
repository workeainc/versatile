import { AwardsPreview } from "@/components/sections/AwardsPreview";
import { FinalCta } from "@/components/sections/FinalCta";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { PhilosophyPreview } from "@/components/sections/PhilosophyPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { StudioStats } from "@/components/sections/StudioStats";
import { TestimonialPreview } from "@/components/sections/TestimonialPreview";

export default function Home() {
  return (
    <SiteLayout>
      <main>
        <Hero />
        <StudioStats />
        <FeaturedProjects />
        <ServicesPreview />
        <PhilosophyPreview />
        <AwardsPreview />
        <TestimonialPreview />
        <FinalCta />
      </main>
    </SiteLayout>
  );
}
