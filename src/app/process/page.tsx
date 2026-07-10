import { ConsultationCTA } from "@/components/process/ConsultationCTA";
import { DeliverablesGrid } from "@/components/process/DeliverablesGrid";
import { ProcessFAQ } from "@/components/process/ProcessFAQ";
import { ProcessHero } from "@/components/process/ProcessHero";
import { ProcessIntroduction } from "@/components/process/ProcessIntroduction";
import { ProcessSteps } from "@/components/process/ProcessSteps";
import { ProcessTimeline } from "@/components/process/ProcessTimeline";
import { ProjectManagement } from "@/components/process/ProjectManagement";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { processPage } from "@/data/process";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: processPage.seo.title,
  description: processPage.seo.description,
  path: "/process"
});

export default function ProcessPage() {
  return (
    <SiteLayout>
      <main>
        <ProcessHero />
        <ProcessIntroduction />
        <ProcessTimeline />
        <ProcessSteps />
        <DeliverablesGrid />
        <ProjectManagement />
        <ProcessFAQ />
        <ConsultationCTA />
      </main>
    </SiteLayout>
  );
}
