import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Project } from "@/data/projects";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function ProjectStory({ project }: { project: Project }) {
  return (
    <section className="bg-[var(--color-background)]">
      <Container className={spacing.section}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel>Project story</SectionLabel>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <p className={typography.h2}>{project.overview}</p>
            <div className="mt-12 grid gap-8 border-t border-[var(--color-border)] pt-8 md:grid-cols-2">
              <div>
                <h2 className="font-display text-4xl">The brief</h2>
                <p className="mt-5 text-lg leading-8 text-[var(--color-text-muted)]">
                  {project.fullDescription}
                </p>
              </div>
              <div>
                <h2 className="font-display text-4xl">The outcome</h2>
                <p className="mt-5 text-lg leading-8 text-[var(--color-text-muted)]">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
