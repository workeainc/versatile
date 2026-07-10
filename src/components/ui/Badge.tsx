import { cn } from "@/lib/cn";
import { typography } from "@/styles/typography";

export function Badge({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex border border-current px-3 py-2 text-current",
        typography.caption,
        className
      )}
    >
      {children}
    </span>
  );
}
