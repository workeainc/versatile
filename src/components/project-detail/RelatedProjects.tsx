import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CategoryBadge } from "@/components/projects/CategoryBadge";
import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
import type { Project } from "@/data/projects";
import { getRelatedProjects } from "@/data/projects";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function RelatedProjects({ project }: { project: Project }) {
  const related = getRelatedProjects(project.relatedProjects).slice(0, 3);

  return (
    <section className="bg-[var(--color-background)]">
      <Container className={spacing.section}>
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Related projects
            </p>
            <h2 className={typography.h2}>Continue browsing.</h2>
          </div>
          <Link
            className={`${typography.caption} inline-flex items-center gap-3`}
            href="/projects"
          >
            See all projects <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {related.map((item) => (
            <Link className="group" href={`/projects/${item.slug}`} key={item.slug}>
              <ImageFrame
                src={item.coverImage}
                alt={`${item.title} related project`}
                className="aspect-[4/5]"
                imageClassName="group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <div className="mt-5 border-t border-[var(--color-border)] pt-5">
                <CategoryBadge>{item.category}</CategoryBadge>
                <h3 className="mt-3 font-display text-4xl leading-none">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  {item.location} / {item.year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
