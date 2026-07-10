import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Service } from "@/data/services";
import { spacing } from "@/styles/spacing";

export function ServiceProcess({
  service,
  compact = false
}: {
  service: Pick<Service, "process">;
  compact?: boolean;
}) {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className={compact ? spacing.sectionTight : spacing.section}>
        <SectionHeading
          eyebrow="Process"
          title="A clear path from first conversation to final handover."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {service.process.map((item, index) => (
            <article className="border-t border-[var(--color-border)] pt-6" key={item.step}>
              <span className="font-display text-5xl text-[var(--color-accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-4xl leading-none">{item.step}</h3>
              <p className="mt-5 text-sm leading-7 text-[var(--color-text-muted)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
        <Button href="/process" variant="ghost" className="mt-12">
          Explore full process
        </Button>
      </Container>
    </section>
  );
}
