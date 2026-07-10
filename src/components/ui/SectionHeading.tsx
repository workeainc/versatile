import { cn } from "@/lib/cn";
import { typography } from "@/styles/typography";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
  tone?: "default" | "inverse";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className,
  tone = "default"
}: SectionHeadingProps) {
  const muted =
    tone === "inverse"
      ? "text-[var(--color-text-muted)]"
      : "text-[var(--color-text-muted)]";

  return (
    <div className={cn("grid gap-6 lg:grid-cols-12", className)}>
      {eyebrow ? <p className={cn(typography.caption, muted, "lg:col-span-3")}>{eyebrow}</p> : null}
      <div className={cn(eyebrow ? "lg:col-span-9" : "lg:col-span-8")}>
        <h2 className={typography.h2}>{title}</h2>
        {intro ? (
          <p className={cn(typography.body, muted, "mt-7 max-w-2xl")}>
            {intro}
          </p>
        ) : null}
      </div>
    </div>
  );
}
