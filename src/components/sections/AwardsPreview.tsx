import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { awards } from "@/data/site";
import { spacing } from "@/styles/spacing";

export function AwardsPreview() {
  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text)]">
      <Container className={spacing.sectionTight}>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Recognition"
              title="Awards, press, and selected mentions."
            />
            <Button href="/awards" variant="light" className="mt-10">
              View all awards
            </Button>
          </div>
          <div className="lg:col-span-7">
            <div className="border-t border-[var(--color-border)]">
              {awards.map((award) => (
                <div
                  className="grid gap-4 border-b border-[var(--color-border)] py-7 md:grid-cols-[0.22fr_0.42fr_1fr]"
                  key={`${award.year}-${award.title}`}
                >
                  <span className="text-sm text-[var(--color-text-muted)]">
                    {award.year}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                    {award.source}
                  </span>
                  <span className="font-display text-3xl leading-tight">
                    {award.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
