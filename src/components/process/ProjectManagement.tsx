import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { processPage } from "@/data/process";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function ProjectManagement() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]">
      <Container className={spacing.section}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel>
              Project management
            </SectionLabel>
            <h2 className={`${typography.h2} mt-8`}>
              Communication keeps the process calm.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {processPage.management.map((item) => (
              <article className="border-t border-[var(--color-border)] pt-6" key={item.title}>
                <h3 className="font-display text-4xl leading-none">{item.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[var(--color-text-muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
