import { PageHero } from "@/components/heroes/PageHero";

export function ProcessHero() {
  return (
    <section className="bg-[var(--color-background)]">
      <PageHero
        eyebrow="Process"
        title="A transparent process from concept to completion."
        intro="Clear stages, visible decisions, and steady communication reduce uncertainty from first conversation to final handover."
        imageHeight="short"
      />
      <div className="mx-auto h-px w-[min(100%-32px,1440px)] bg-[var(--color-border)]" />
    </section>
  );
}
