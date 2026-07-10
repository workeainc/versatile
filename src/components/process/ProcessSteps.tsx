import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessStep } from "@/components/process/ProcessStep";
import { processPage } from "@/data/process";
import { spacing } from "@/styles/spacing";

export function ProcessSteps() {
  return (
    <section className="bg-[var(--color-background)]">
      <Container className={spacing.section}>
        <SectionHeading
          eyebrow="Detailed steps"
          title="Each phase has a purpose, a rhythm, and a clear set of outputs."
        />
        <div className="mt-14">
          {processPage.steps.map((step) => (
            <ProcessStep key={step.id} step={step} />
          ))}
        </div>
      </Container>
    </section>
  );
}
