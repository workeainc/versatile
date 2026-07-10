import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function FinalCta() {
  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-background)]">
      <Container className={spacing.section}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-9">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Request a consultation
            </p>
            <h2 className={typography.h2}>Let&apos;s create your next landmark.</h2>
          </div>
          <div className="lg:col-span-3">
            <p className="mb-8 text-lg leading-8 text-[var(--color-text-muted)]">
              Tell us about the space, timeline, and ambition. We&apos;ll help shape the next step.
            </p>
            <Button href="/request-consultation" variant="dark">
              Start a project
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
