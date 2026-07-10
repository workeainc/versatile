import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function ConsultationCTA() {
  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className={spacing.section}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Begin
            </p>
            <h2 className={typography.h2}>Ready to begin your design journey?</h2>
          </div>
          <div className="lg:col-span-4">
            <p className="mb-8 text-lg leading-8 text-[var(--color-text-muted)]">
              Tell us about your space, goals, timeline, and expectations. We&apos;ll help clarify the next step.
            </p>
            <Button href="/request-consultation" variant="dark">
              Book a consultation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
