import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Project } from "@/data/projects";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function ProjectTestimonial({ project }: { project: Project }) {
  if (!project.testimonial) {
    return null;
  }

  return (
    <section className="bg-[var(--color-surface)]">
      <Container className={spacing.sectionTight}>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel>Client note</SectionLabel>
          </div>
          <blockquote className="lg:col-span-8 lg:col-start-5">
            <p className={typography.h2}>&quot;{project.testimonial.quote}&quot;</p>
            <footer className="mt-8 border-t border-[var(--color-border)] pt-6">
              <p className="font-semibold">{project.testimonial.author}</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                {project.testimonial.role}
              </p>
            </footer>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
