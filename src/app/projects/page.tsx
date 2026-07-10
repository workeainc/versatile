import { FinalCta } from "@/components/sections/FinalCta";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo/metadata";
import { spacing } from "@/styles/spacing";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Selected residential, commercial, restaurant, showroom, and event interior projects by Versatile Interior.",
  path: "/projects"
});

export default function ProjectsPage() {
  return (
    <SiteLayout>
      <main>
        <ProjectHero />
        <section className="border-t border-[var(--color-border)] bg-[var(--color-background)]">
          <Container className={spacing.section}>
            <ProjectGrid projects={projects} />
          </Container>
        </section>
        <FinalCta />
      </main>
    </SiteLayout>
  );
}
