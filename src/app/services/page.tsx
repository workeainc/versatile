import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ServiceGallery } from "@/components/services/ServiceGallery";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { serviceIntro, services } from "@/data/services";
import { createMetadata } from "@/lib/seo/metadata";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Interior design services for residential, commercial, restaurant, showroom, and event spaces.",
  path: "/services"
});

export default function ServicesPage() {
  const featuredService = services[0];

  return (
    <SiteLayout>
      <main>
        <ServiceHero
          title="Interior design services shaped around use, climate, and execution."
          subtitle="From homes to hospitality, we plan interiors around people, daily movement, material durability, and the realities of building in Bangladesh."
          image="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=90"
          imageAlt="Architectural interior detail with warm sunlight"
        />

        <section className="bg-[var(--color-background)]">
          <Container className={spacing.sectionTight}>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <SectionLabel>Introduction</SectionLabel>
              </div>
              <p className={`${typography.h2} lg:col-span-8 lg:col-start-5`}>
                {serviceIntro}
              </p>
            </div>
          </Container>
        </section>

        <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
          <Container className={spacing.section}>
            <SectionHeading
              eyebrow="Service navigator"
              title="Choose the kind of space you want to shape."
            />
            <div className="mt-12 border-b border-[var(--color-border)]">
              {services.map((service, index) => (
                <ServiceCard index={index} key={service.slug} service={service} />
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[var(--color-background)]">
          <Container className={spacing.section}>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-5">
                <SectionLabel>Featured service</SectionLabel>
                <h2 className={`${typography.h2} mt-8`}>{featuredService.pluralTitle}</h2>
                <p className="mt-7 text-lg leading-8 text-[var(--color-text-muted)]">
                  {featuredService.overview}
                </p>
                <Button href={`/services/${featuredService.slug}`} variant="ghost" className="mt-9">
                  Explore {featuredService.title}
                </Button>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <ImageFrame
                  src={featuredService.heroImage}
                  alt={featuredService.heroAlt}
                  className="aspect-[4/5] xl:min-h-[680px]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </Container>
        </section>

        <ServiceProcess service={featuredService} compact />
        <ServiceGallery service={featuredService} />

        <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
          <Container className={spacing.sectionTight}>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <SectionLabel>FAQ</SectionLabel>
              </div>
              <div className="lg:col-span-8 lg:col-start-5">
                <h2 className={typography.h2}>Questions clients ask before we begin.</h2>
                <div className="mt-10 border-t border-[var(--color-border)]">
                  {featuredService.faqs.map((faq) => (
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

        <ServiceCTA service={{ cta: "Ready to start a thoughtful, buildable project?" }} />
      </main>
    </SiteLayout>
  );
}
