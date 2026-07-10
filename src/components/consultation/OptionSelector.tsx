import type { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/lib/cn";

export function OptionSelector({
  label,
  options,
  value,
  register
}: {
  label: string;
  options: readonly string[];
  value?: string;
  register: UseFormRegisterReturn;
}) {
  return (
    <fieldset>
      <legend className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
        {label}
      </legend>
      <div className="grid gap-3 md:grid-cols-2">
        {options.map((option) => (
          <label
            className={cn(
              "cursor-pointer border px-5 py-4 transition",
              value === option
                ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                : "border-[var(--color-border)] hover:border-[var(--color-primary)]"
            )}
            key={option}
          >
            <input className="sr-only" type="radio" value={option} {...register} />
            <span className="text-sm font-semibold uppercase tracking-[0.16em]">
              {option}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
