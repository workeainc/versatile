import { Container } from "@/components/ui/Container";
import { contactInfo } from "@/data/contact";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function MapSection() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className={spacing.sectionTight}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-4">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Visit by appointment
            </p>
            <h2 className={typography.h2}>Studio location.</h2>
            <p className="mt-6 text-lg leading-8 text-[var(--color-text-muted)]">
              {contactInfo.address}
            </p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text)] lg:col-span-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-[var(--color-success)]" />
            <div className="absolute inset-0 opacity-80 [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] [background-size:48px_48px]" />
            <div className="relative flex h-full min-h-[360px] flex-col justify-between p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
                Studio appointment zone
              </p>
              <p className="max-w-xl font-display text-5xl leading-none">
                Gulshan / Dhaka
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
