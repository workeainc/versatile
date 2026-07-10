import Link from "next/link";
import type { BlogHeading } from "@/lib/blog/blog";

export function TableOfContents({ headings }: { headings: BlogHeading[] }) {
  if (!headings.length) {
    return null;
  }

  return (
    <nav aria-label="Article table of contents" className="border-y border-[var(--color-border)] py-6">
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
        In this article
      </h2>
      <ol className="mt-5 grid gap-3">
        {headings.map((heading) => (
          <li className={heading.level === 3 ? "pl-4" : ""} key={heading.id}>
            <Link className="text-sm leading-6 hover:text-[var(--color-primary)]" href={`#${heading.id}`}>
              {heading.text}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
