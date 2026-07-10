import { cn } from "@/lib/cn";

export function ProgressIndicator({ step }: { step: number }) {
  const labels = ["Project", "Scope", "Contact"];

  return (
    <ol className="grid grid-cols-3 border-y border-[var(--color-border)]">
      {labels.map((label, index) => {
        const active = step === index + 1;
        const complete = step > index + 1;

        return (
          <li
            aria-current={active ? "step" : undefined}
            className={cn(
              "border-r border-[var(--color-border)] px-4 py-5",
              active || complete ? "text-[var(--color-text)]" : "text-[var(--color-text-muted)]"
            )}
            key={label}
          >
            <span className="block font-display text-4xl leading-none">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.2em]">
              {label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
