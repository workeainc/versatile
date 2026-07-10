import type { Project } from "@/data/projects";

type ProjectMetaProps = Pick<Project, "location" | "year" | "status" | "area">;

export function ProjectMeta({ location, year, status, area }: ProjectMetaProps) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-y border-[var(--color-border)] py-6 text-sm md:grid-cols-4">
      {[
        ["Location", location],
        ["Year", String(year)],
        ["Status", status],
        ["Area", area]
      ].map(([label, value]) => (
        <div key={label}>
          <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            {label}
          </dt>
          <dd className="mt-2">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
