import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { processPage } from "@/data/process";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function ProcessIntroduction() {
  return (
    <section className="bg-[var(--color-background)]">
      <Container className={spacing.sectionTight}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel>Philosophy</SectionLabel>
          </div>
          <p className={`${typography.h2} lg:col-span-8 lg:col-start-5`}>
            {processPage.introduction}
          </p>
        </div>
      </Container>
    </section>
  );
}
