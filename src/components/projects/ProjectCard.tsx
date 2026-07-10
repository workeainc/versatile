import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CategoryBadge } from "@/components/projects/CategoryBadge";
import { ProjectMeta } from "@/components/projects/ProjectMeta";
import { ImageFrame } from "@/components/ui/ImageFrame";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";
import { typography } from "@/styles/typography";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const imageRatios = [
  "aspect-[16/9] xl:min-h-[620px]",
  "aspect-[4/5] xl:min-h-[560px]",
  "aspect-[3/2] xl:min-h-[720px]",
  "aspect-[5/4] xl:min-h-[560px]"
];

export function ProjectCard({ project, index }: ProjectCardProps) {
  const imageLeft = index % 2 === 0;
  const wide = index % 3 === 0;
  const ratio = imageRatios[index % imageRatios.length];

  return (
    <article
      className={cn(
        "group reveal-on-scroll grid gap-8 border-b border-[var(--color-border)] pb-16 lg:grid-cols-12 lg:gap-10 lg:pb-24",
        wide ? "lg:items-end" : "lg:items-center"
      )}
    >
      <Link
        className={cn(
          "block lg:col-span-7",
          wide ? "lg:col-span-8" : "",
          imageLeft ? "" : cn("lg:order-2", wide ? "lg:col-start-5" : "lg:col-start-6")
        )}
        href={`/projects/${project.slug}`}
      >
        <ImageFrame
          src={project.coverImage}
          alt={`${project.title} interior project`}
          className={ratio}
          imageClassName="group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 66vw, 100vw"
        />
      </Link>
      <div
        className={cn(
          "lg:col-span-5",
          wide ? "lg:col-span-4" : "",
          imageLeft ? "" : "lg:order-1 lg:col-start-1"
        )}
      >
        <div className="flex items-center gap-4">
          <span className="font-display text-5xl leading-none text-[var(--color-border)]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px flex-1 bg-[var(--color-border)]" />
          <CategoryBadge>{project.category}</CategoryBadge>
        </div>
        <Link href={`/projects/${project.slug}`}>
          <h2 className={cn(typography.h2, "mt-6 transition group-hover:text-[var(--color-accent)]")}>
            {project.title}
          </h2>
        </Link>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-text-muted)]">
          {project.shortDescription}
        </p>
        <div className="mt-8">
          <ProjectMeta
            area={project.area}
            location={project.location}
            status={project.status}
            year={project.year}
          />
        </div>
        <Link
          className={cn(
            typography.caption,
            "mt-8 inline-flex items-center gap-3 transition hover:text-[var(--color-accent)]"
          )}
          href={`/projects/${project.slug}`}
        >
          View Project
          <ArrowUpRight
            className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            size={18}
            strokeWidth={1.7}
          />
        </Link>
      </div>
    </article>
  );
}
