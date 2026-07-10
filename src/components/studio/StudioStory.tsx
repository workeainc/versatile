import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { studioStory } from "@/data/studio";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function StudioStory() {
  return (
    <section className="bg-[var(--color-background)]">
      <Container className={spacing.section}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel>Our story</SectionLabel>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className={typography.h2}>A practice built around trust, detail, and delivery.</h2>
            <div className="mt-10 grid gap-7 text-lg leading-9 text-[var(--color-text-muted)]">
              {studioStory.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
