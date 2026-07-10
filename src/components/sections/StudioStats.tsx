import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stat } from "@/components/ui/Stat";
import { clients, studioStats } from "@/data/site";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function StudioStats() {
  return (
    <section id="studio" className="bg-[var(--color-background)]">
      <Container className={spacing.sectionTight}>
        <SectionHeading
          eyebrow="Studio"
          title="A careful practice for homes, offices, restaurants, and showrooms."
          intro="We work with clients who care about detail, atmosphere, and the long-term experience of a space."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {studioStats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
        <Divider className="my-12" />
        <div className="grid gap-5 md:grid-cols-[0.28fr_1fr] md:items-center">
          <p className={typography.caption}>Trusted sectors</p>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            {clients.map((client) => (
              <span key={client}>{client}</span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
