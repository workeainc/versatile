import { PageHero } from "@/components/heroes/PageHero";
import { ContactCard } from "@/components/contact/ContactCard";
import { MapSection } from "@/components/contact/MapSection";
import { QuickContactForm } from "@/components/contact/QuickContactForm";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { contactInfo } from "@/data/contact";
import { createMetadata } from "@/lib/seo/metadata";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Versatile Interior for studio visits, project inquiries, and consultation requests.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <SiteLayout>
      <main>
        <PageHero
          eyebrow="Contact"
          title="Let's discuss your next project."
          intro="Reach the studio, request a visit, or start a project brief when you are ready."
          breadcrumbs={[{ label: "Contact" }]}
        />

        <section className="bg-[var(--color-background)]">
          <Container className={spacing.sectionTight}>
            <div className="grid gap-8 md:grid-cols-3">
              <ContactCard label="Email" value={contactInfo.email} href={`mailto:${contactInfo.email}`} />
              <ContactCard label="Phone" value={contactInfo.phone} href={`tel:${contactInfo.phone.replaceAll(" ", "")}`} />
              <ContactCard label="Office" value={contactInfo.address} />
            </div>
          </Container>
        </section>

        <MapSection />

        <section className="bg-[var(--color-background)]">
          <Container className={spacing.section}>
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <SectionLabel>Studio hours</SectionLabel>
                <div className="mt-8 border-t border-[var(--color-border)]">
                  {contactInfo.hours.map(([day, time]) => (
                    <div className="flex justify-between gap-6 border-b border-[var(--color-border)] py-5 text-sm" key={day}>
                      <span>{day}</span>
                      <span className="text-[var(--color-text-muted)]">{time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex flex-wrap gap-5">
                  {contactInfo.socials.map((social) => (
                    <a className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)] transition hover:text-[var(--color-primary)]" href={social.href} key={social.label}>
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <SectionLabel>Quick message</SectionLabel>
                <div className="mt-8">
                  <QuickContactForm />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
          <Container className={spacing.sectionTight}>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <SectionLabel>FAQ</SectionLabel>
              </div>
              <div className="lg:col-span-8 lg:col-start-5">
                <h2 className={typography.h2}>Before you reach out.</h2>
                <div className="mt-10 border-t border-[var(--color-border)]">
                  {contactInfo.faqs.map((faq) => (
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

        <ServiceCTA service={{ cta: "Ready to discuss the space you're planning?" }} />
      </main>
    </SiteLayout>
  );
}
