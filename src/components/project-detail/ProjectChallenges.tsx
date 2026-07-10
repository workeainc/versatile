import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Project } from "@/data/projects";
import { spacing } from "@/styles/spacing";

export function ProjectChallenges({ project }: { project: Project }) {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]">
      <Container className={spacing.section}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel>
              Constraint
            </SectionLabel>
          </div>
          <div className="grid gap-10 lg:col-span-8 lg:col-start-5 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-5xl">Challenge</h2>
              <p className="mt-6 text-lg leading-8 text-[var(--color-text-muted)]">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="font-display text-5xl">Solution</h2>
              <p className="mt-6 text-lg leading-8 text-[var(--color-text-muted)]">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
