import { cn } from "@/lib/cn";
import { typography } from "@/styles/typography";

export function CategoryBadge({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn(typography.caption, "text-[var(--color-accent)]", className)}>
      {children}
    </span>
  );
}
