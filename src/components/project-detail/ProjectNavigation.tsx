import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { getAdjacentProjects } from "@/data/projects";
import { typography } from "@/styles/typography";

export function ProjectNavigation({ project }: { project: Project }) {
  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <nav className="grid border-y border-[var(--color-border)] bg-[var(--color-surface)] md:grid-cols-2">
      {previous ? (
        <Link
          className="group flex min-h-44 flex-col justify-between border-b border-[var(--color-border)] p-6 transition hover:bg-[var(--color-background)] md:border-b-0 md:border-r"
          href={`/projects/${previous.slug}`}
        >
          <span className={`${typography.caption} flex items-center gap-3 text-[var(--color-text-muted)]`}>
            <ArrowLeft size={17} /> Previous project
          </span>
          <span className="font-display text-5xl leading-none">{previous.title}</span>
        </Link>
      ) : null}
      {next ? (
        <Link
          className="group flex min-h-44 flex-col justify-between p-6 text-right transition hover:bg-[var(--color-background)]"
          href={`/projects/${next.slug}`}
        >
          <span className={`${typography.caption} flex items-center justify-end gap-3 text-[var(--color-text-muted)]`}>
            Next project <ArrowRight size={17} />
          </span>
          <span className="font-display text-5xl leading-none">{next.title}</span>
        </Link>
      ) : null}
    </nav>
  );
}
