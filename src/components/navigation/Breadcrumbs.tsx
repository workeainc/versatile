import Link from "next/link";
import { cn } from "@/lib/cn";
import { typography } from "@/styles/typography";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({
  items,
  className
}: {
  items: BreadcrumbItem[];
  className?: string;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(typography.caption, "text-[var(--color-text-muted)]", className)}
    >
      <ol className="flex flex-wrap items-center gap-3">
        <li>
          <Link className="transition hover:text-[var(--color-primary)]" href="/">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li className="flex items-center gap-3" key={item.label}>
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link className="transition hover:text-[var(--color-primary)]" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-[var(--color-text)]">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
