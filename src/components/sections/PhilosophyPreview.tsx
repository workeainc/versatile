import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { philosophy } from "@/data/site";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function PhilosophyPreview() {
  return (
    <section className="bg-[var(--color-background)]">
      <Container className={spacing.section}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <ImageFrame
              src={philosophy.image}
              alt={philosophy.imageAlt}
              className="aspect-[4/5] md:aspect-[5/4] lg:min-h-[440px]"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionLabel>Philosophy</SectionLabel>
            <p className={`${typography.h3} mt-8 max-w-3xl`}>{philosophy.statement}</p>
            <Button href="/studio" variant="ghost" className="mt-10">
              Visit the studio
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
