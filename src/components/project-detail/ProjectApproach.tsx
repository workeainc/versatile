import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Project } from "@/data/projects";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function ProjectApproach({ project }: { project: Project }) {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className={spacing.section}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel>Design approach</SectionLabel>
            <h2 className={`${typography.h2} mt-8`}>Thinking behind the space.</h2>
          </div>
          <p className="text-2xl leading-10 text-[var(--color-text-muted)] lg:col-span-7 lg:col-start-6">
            {project.concept}
          </p>
        </div>
      </Container>
    </section>
  );
}
