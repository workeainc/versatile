import { cn } from "@/lib/cn";

export function ContactCard({
  label,
  value,
  href,
  className
}: {
  label: string;
  value: string;
  href?: string;
  className?: string;
}) {
  const content = (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
        {label}
      </p>
      <p className="mt-4 text-xl leading-8">{value}</p>
    </>
  );

  if (href) {
    return (
      <a
        className={cn(
          "block border-t border-[var(--color-border)] pt-6 transition hover:text-[var(--color-accent)]",
          className
        )}
        href={href}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={cn("border-t border-[var(--color-border)] pt-6", className)}>
      {content}
    </div>
  );
}
