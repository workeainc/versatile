import { Container } from "@/components/ui/Container";
import type { Project } from "@/data/projects";
import { spacing } from "@/styles/spacing";

export function ProjectFacts({ project }: { project: Project }) {
  const facts = [
    ["Client", project.client],
    ["Location", project.location],
    ["Category", project.category],
    ["Scope", project.services.join(", ")],
    ["Area", project.area],
    ["Timeline", project.duration],
    ["Completion", project.completionDate],
    ["Status", project.status]
  ];

  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className={spacing.sectionTight}>
        <dl className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {facts.map(([label, value]) => (
            <div className="border-t border-[var(--color-border)] pt-5" key={label}>
              <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                {label}
              </dt>
              <dd className="mt-3 text-lg leading-7">{value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
