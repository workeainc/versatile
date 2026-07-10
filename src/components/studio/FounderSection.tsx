import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { founder } from "@/data/studio";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function FounderSection() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className={spacing.section}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <ImageFrame
              src={founder.portrait}
              alt={founder.portraitAlt}
              className="aspect-[4/5]"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionLabel>Founder</SectionLabel>
            <h2 className={`${typography.h2} mt-8`}>{founder.name}</h2>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
              {founder.role}
            </p>
            <p className="mt-8 text-lg leading-8 text-[var(--color-text-muted)]">
              {founder.bio}
            </p>
            <blockquote className="mt-10 border-l border-[var(--color-accent)] pl-6">
              <p className="font-display text-4xl leading-tight">
                &quot;{founder.philosophy}&quot;
              </p>
              <footer className="mt-6 font-display text-5xl text-[var(--color-accent)]">
                {founder.signature}
              </footer>
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
