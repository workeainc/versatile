import { processPage } from "@/data/process";

export function ProcessTimeline() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 md:grid-cols-4 xl:grid-cols-8">
        {processPage.steps.map((step) => (
          <a
            className="group flex min-h-32 flex-row justify-between border-b border-[var(--color-border)] p-5 transition hover:bg-[var(--color-background)] md:flex-col md:border-r"
            href={`#step-${step.id}`}
            key={step.id}
          >
            <span className="font-display text-4xl text-[var(--color-accent)]">
              {String(step.id).padStart(2, "0")}
            </span>
            <span className="self-end text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)] md:self-start">
              {step.title}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
