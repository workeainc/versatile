import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { studioClients } from "@/data/studio";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function ClientsSection() {
  return (
    <section className="bg-[var(--color-background)]">
      <Container className={spacing.sectionTight}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-3">
            <SectionLabel>Clients</SectionLabel>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <p className={`${typography.caption} mb-8 text-[var(--color-text-muted)]`}>
              Trusted across sectors
            </p>
            <div className="grid grid-cols-2 border-t border-[var(--color-border)] md:grid-cols-4">
              {studioClients.map((client) => (
                <div
                  className="border-b border-[var(--color-border)] py-7 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]"
                  key={client}
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
