import { Container } from "@/components/ui/Container";
import type { Project } from "@/data/projects";
import { spacing } from "@/styles/spacing";

export function ProjectStatistics({ project }: { project: Project }) {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-background)]">
      <Container className={spacing.sectionTight}>
        <div className="grid gap-8 md:grid-cols-4">
          {project.statistics.map((stat) => (
            <div className="border-t border-[var(--color-border)] pt-5" key={stat.label}>
              <strong className="font-display text-6xl font-medium leading-none">
                {stat.value}
              </strong>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
