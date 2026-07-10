import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Service } from "@/data/services";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function ServiceFAQ({ service }: { service: Pick<Service, "faqs"> }) {
  return (
    <section className="bg-[var(--color-surface)]">
      <Container className={spacing.sectionTight}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel>FAQ</SectionLabel>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className={typography.h2}>Common questions.</h2>
            <div className="mt-10 border-t border-[var(--color-border)]">
              {service.faqs.map((faq) => (
                <div className="border-b border-[var(--color-border)] py-7" key={faq.question}>
                  <h3 className="font-display text-3xl leading-tight">{faq.question}</h3>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
