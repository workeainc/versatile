import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/data/studio";
import { spacing } from "@/styles/spacing";

export function TeamSection() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className={spacing.section}>
        <SectionHeading
          eyebrow="Team"
          title="A compact team with design, documentation, and site experience."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {team.map((member) => (
            <article key={member.name}>
              <ImageFrame
                src={member.portrait}
                alt={`${member.name} portrait`}
                className="aspect-[4/5]"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className="border-b border-[var(--color-border)] py-5">
                <h3 className="font-display text-4xl leading-none">{member.name}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
