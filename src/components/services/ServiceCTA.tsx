import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Service } from "@/data/services";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function ServiceCTA({ service }: { service: Pick<Service, "cta"> }) {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text)]">
      <Container className={spacing.section}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
              Consultation
            </p>
            <h2 className={typography.h2}>{service.cta}</h2>
          </div>
          <div className="lg:col-span-4">
            <Button href="/request-consultation" variant="dark">
              Start your project
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
