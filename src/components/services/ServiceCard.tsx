import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { typography } from "@/styles/typography";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      className="group grid gap-5 border-t border-[var(--color-border)] py-7 transition hover:pl-3 md:grid-cols-[0.16fr_0.44fr_1fr_auto]"
      href={`/services/${service.slug}`}
    >
      <span className="font-display text-3xl leading-none text-[var(--color-accent)]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h2 className="font-display text-4xl leading-none">{service.title}</h2>
        <p className={`${typography.caption} mt-4 text-[var(--color-text-muted)]`}>
          {service.projectCount}
        </p>
      </div>
      <p className="max-w-xl text-sm leading-7 text-[var(--color-text-muted)]">
        {service.subtitle}
      </p>
      <span className={`${typography.caption} inline-flex items-center gap-3`}>
        Explore
        <ArrowUpRight
          className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
          size={18}
        />
      </span>
    </Link>
  );
}
