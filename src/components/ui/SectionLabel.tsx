import { cn } from "@/lib/cn";
import { typography } from "@/styles/typography";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p className={cn(typography.caption, "text-[var(--color-accent)]", className)}>
      {children}
    </p>
  );
}
