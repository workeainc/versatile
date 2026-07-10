import { FinalCta } from "@/components/sections/FinalCta";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ClientsSection } from "@/components/studio/ClientsSection";
import { CultureSection } from "@/components/studio/CultureSection";
import { DesignPhilosophy } from "@/components/studio/DesignPhilosophy";
import { FounderSection } from "@/components/studio/FounderSection";
import { RecognitionSection } from "@/components/studio/RecognitionSection";
import { StudioHero } from "@/components/studio/StudioHero";
import { StudioStory } from "@/components/studio/StudioStory";
import { TeamSection } from "@/components/studio/TeamSection";
import { TimelineSection } from "@/components/studio/TimelineSection";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Studio",
  description:
    "Meet the Versatile Interior studio, team, design philosophy, timeline, recognition, and culture.",
  path: "/studio"
});

export default function StudioPage() {
  return (
    <SiteLayout>
      <main>
        <StudioHero />
        <StudioStory />
        <FounderSection />
        <DesignPhilosophy />
        <TeamSection />
        <TimelineSection />
        <RecognitionSection />
        <ClientsSection />
        <CultureSection />
        <FinalCta />
      </main>
    </SiteLayout>
  );
}
