import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processPage } from "@/data/process";
import { spacing } from "@/styles/spacing";

export function DeliverablesGrid() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className={spacing.section}>
        <SectionHeading
          eyebrow="Deliverables"
          title="What you receive during the design process."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {processPage.deliverables.map((item, index) => (
            <article className="border-t border-[var(--color-border)] pt-6" key={item.title}>
              <span className="font-display text-5xl text-[var(--color-accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-4xl leading-none">{item.title}</h3>
              <p className="mt-5 text-sm leading-7 text-[var(--color-text-muted)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
