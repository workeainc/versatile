import { CategoryBadge } from "@/components/projects/CategoryBadge";
import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
import type { Project } from "@/data/projects";
import { typography } from "@/styles/typography";

export function ProjectCaseHero({ project }: { project: Project }) {
  return (
    <section className="bg-[var(--color-background)] pt-24 md:pt-32">
      <Container className="pb-8 md:pb-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="max-w-3xl lg:col-span-7">
            <CategoryBadge>{project.category}</CategoryBadge>
            <h1 className={`${typography.h1} mt-5`}>{project.title}</h1>
          </div>
          <dl className="grid grid-cols-3 gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)] lg:col-span-4 lg:col-start-9">
            <div>
              <dt className="sr-only">Location</dt>
              <dd>{project.location}</dd>
            </div>
            <div>
              <dt className="sr-only">Category</dt>
              <dd>{project.category}</dd>
            </div>
            <div>
              <dt className="sr-only">Year</dt>
              <dd>{project.year}</dd>
            </div>
          </dl>
        </div>
      </Container>
      <ImageFrame
        src={project.heroImage}
        alt={`${project.title} interior`}
        priority
        className="h-[64vh] min-h-[420px] w-full md:h-[82vh]"
        sizes="100vw"
      />
    </section>
  );
}
