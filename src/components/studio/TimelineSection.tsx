import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { timeline } from "@/data/studio";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function TimelineSection() {
  return (
    <section className="bg-[var(--color-background)]">
      <Container className={spacing.sectionTight}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel>Timeline</SectionLabel>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className={typography.h2}>Growth measured by trust.</h2>
            <div className="mt-10 border-t border-[var(--color-border)]">
              {timeline.map(([year, text]) => (
                <div
                  className="grid gap-5 border-b border-[var(--color-border)] py-7 md:grid-cols-[0.24fr_1fr]"
                  key={year}
                >
                  <span className="font-display text-5xl leading-none text-[var(--color-accent)]">
                    {year}
                  </span>
                  <p className="text-xl leading-8">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
