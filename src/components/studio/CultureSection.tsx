import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cultureImages } from "@/data/studio";
import { spacing } from "@/styles/spacing";

export function CultureSection() {
  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className={spacing.section}>
        <SectionHeading
          eyebrow="Culture"
          title="Behind every finished space is a slower process of testing, visiting, and refining."
          intro="Material reviews, site walks, sketches, and workshop conversations shape the quiet decisions that clients eventually feel in the finished space."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <ImageFrame
            src={cultureImages[0].src}
            alt={cultureImages[0].alt}
            className="aspect-[4/5] lg:col-span-4"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
          <ImageFrame
            src={cultureImages[1].src}
            alt={cultureImages[1].alt}
            className="aspect-[5/4] lg:col-span-5 lg:mt-24"
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
          <ImageFrame
            src={cultureImages[2].src}
            alt={cultureImages[2].alt}
            className="aspect-[4/5] lg:col-span-3"
            sizes="(min-width: 1024px) 25vw, 100vw"
          />
        </div>
      </Container>
    </section>
  );
}
