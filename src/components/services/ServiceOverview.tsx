import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Service } from "@/data/services";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function ServiceOverview({ service }: { service: Service }) {
  return (
    <section className="bg-[var(--color-background)]">
      <Container className={spacing.section}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel>Overview</SectionLabel>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <p className={typography.h2}>{service.overview}</p>
            <div className="mt-12 grid gap-8 border-t border-[var(--color-border)] pt-8 md:grid-cols-2">
              <div>
                <h2 className="font-display text-4xl">Why it matters</h2>
                <p className="mt-5 text-lg leading-8 text-[var(--color-text-muted)]">
                  {service.whyItMatters}
                </p>
              </div>
              <div>
                <h2 className="font-display text-4xl">Our approach</h2>
                <p className="mt-5 text-lg leading-8 text-[var(--color-text-muted)]">
                  {service.approach}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
