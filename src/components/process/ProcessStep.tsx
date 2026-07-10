import type { ProcessStep as ProcessStepType } from "@/data/process";
import { typography } from "@/styles/typography";

export function ProcessStep({ step }: { step: ProcessStepType }) {
  return (
    <article
      className="grid gap-8 border-t border-[var(--color-border)] py-12 lg:grid-cols-12"
      id={`step-${step.id}`}
    >
      <div className="lg:col-span-3">
        <span className="font-display text-7xl leading-none text-[var(--color-accent)]">
          {String(step.id).padStart(2, "0")}
        </span>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
          {step.timeframe}
        </p>
      </div>
      <div className="lg:col-span-4">
        <h2 className={typography.h2}>{step.title}</h2>
        <p className="mt-6 text-lg leading-8 text-[var(--color-text-muted)]">
          {step.summary}
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:col-span-5">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Activities
          </h3>
          <ul className="mt-5 grid gap-3 text-sm leading-7 text-[var(--color-text-muted)]">
            {step.activities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Deliverables
          </h3>
          <ul className="mt-5 grid gap-3 text-sm leading-7 text-[var(--color-text-muted)]">
            {step.deliverables.map((deliverable) => (
              <li key={deliverable}>{deliverable}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
