import { PageHero } from "@/components/heroes/PageHero";
import { ConsultationWizard } from "@/components/consultation/ConsultationWizard";
import { Container } from "@/components/ui/Container";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Request a Consultation",
  description:
    "Start a project brief for residential, commercial, restaurant, showroom, or event interior design.",
  path: "/request-consultation"
});

export default function RequestConsultationPage() {
  return (
    <SiteLayout>
      <main className="bg-[var(--color-background)]">
        <PageHero
          eyebrow="Project brief"
          title="Let's discuss the space you're planning."
          intro="A short guided form helps us understand project type, scope, timeline, and the best next conversation."
          breadcrumbs={[{ label: "Request Consultation" }]}
        />
        <Container className="pb-20 md:pb-28 lg:pb-36">
          <ConsultationWizard />
        </Container>
      </main>
    </SiteLayout>
  );
}
