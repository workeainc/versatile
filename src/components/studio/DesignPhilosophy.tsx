import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { philosophyPoints } from "@/data/studio";
import { spacing } from "@/styles/spacing";

export function DesignPhilosophy() {
  return (
    <section className="bg-[var(--color-background)]">
      <Container className={spacing.section}>
        <SectionHeading
          eyebrow="Philosophy"
          title="Spaces should feel effortless, but the work behind them never is."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {philosophyPoints.map((point, index) => (
            <article className="border-t border-[var(--color-border)] pt-6" key={point.title}>
              <span className="font-display text-5xl text-[var(--color-accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-4xl leading-none">{point.title}</h3>
              <p className="mt-5 text-sm leading-7 text-[var(--color-text-muted)]">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
