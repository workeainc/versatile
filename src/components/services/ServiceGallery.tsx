import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CategoryBadge } from "@/components/projects/CategoryBadge";
import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { getRelatedProjects } from "@/data/projects";
import type { Service } from "@/data/services";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function ServiceGallery({ service }: { service: Service }) {
  const projects = getRelatedProjects(service.featuredProjects);

  return (
    <section className="bg-[var(--color-background)]">
      <Container className={spacing.section}>
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Featured work
            </p>
            <h2 className={typography.h2}>Projects that show the service in practice.</h2>
          </div>
          <Link className={`${typography.caption} inline-flex items-center gap-3`} href="/projects">
            See all projects <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              className={index === 1 ? "group lg:mt-16" : "group"}
              href={`/projects/${project.slug}`}
              key={project.slug}
            >
              <ImageFrame
                src={project.coverImage}
                alt={`${project.title} project preview`}
                className="aspect-[4/5]"
                imageClassName="group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <div className="mt-5 border-t border-[var(--color-border)] pt-5">
                <CategoryBadge>{project.category}</CategoryBadge>
                <h3 className="mt-3 font-display text-4xl leading-none">{project.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  {project.location} / {project.year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
