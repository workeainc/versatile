import { cn } from "@/lib/cn";

type StatProps = {
  value: string;
  label: string;
  className?: string;
};

export function Stat({ value, label, className }: StatProps) {
  return (
    <div className={cn("border-t border-[var(--color-border)] pt-5", className)}>
      <strong className="font-display text-6xl font-medium leading-none md:text-7xl lg:text-8xl">
        {value}
      </strong>
      <p className="mt-3 max-w-44 text-sm leading-6 text-[var(--color-text-muted)]">
        {label}
      </p>
    </div>
  );
}
