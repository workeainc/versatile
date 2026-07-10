import { cn } from "@/lib/cn";

export function Divider({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-[var(--color-border)]", className)} />;
}
