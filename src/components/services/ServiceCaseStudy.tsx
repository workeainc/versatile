import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getProjectBySlug } from "@/data/projects";
import type { Service } from "@/data/services";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function ServiceCaseStudy({ service }: { service: Service }) {
  const project = getProjectBySlug(service.featuredProjects[0]);

  if (!project) {
    return null;
  }

  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-background)]">
      <Container className={spacing.section}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <ImageFrame
              src={project.heroImage}
              alt={`${project.title} case study`}
              className="aspect-[16/10] lg:min-h-[600px]"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </div>
          <div className="lg:col-span-5">
            <SectionLabel>Case study</SectionLabel>
            <h2 className={`${typography.h2} mt-7`}>{project.title}</h2>
            <p className="mt-7 text-lg leading-8 text-[var(--color-text-muted)]">
              {project.shortDescription}
            </p>
            <Button href={`/projects/${project.slug}`} variant="ghost" className="mt-9">
              View project
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
