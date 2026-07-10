import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function ConsultationCTA() {
  return (
    <section className="bg-[var(--color-background)]">
      <Container className={spacing.section}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Consultation
            </p>
            <h2 className={typography.h2}>
              Have a project in mind?
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="mb-8 text-lg leading-8 text-[var(--color-text-muted)]">
              Let&apos;s discuss how we can bring it to life with clarity, restraint, and careful execution.
            </p>
            <Button href="/request-consultation" variant="dark">
              Start your project
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
