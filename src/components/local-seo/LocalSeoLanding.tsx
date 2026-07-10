import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FinalCta } from "@/components/sections/FinalCta";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Stat } from "@/components/ui/Stat";
import type { LocalSeoPage } from "@/data/localSeo";
import { getRelatedProjects } from "@/data/projects";
import { typography } from "@/styles/typography";
import { spacing } from "@/styles/spacing";

type LocalSeoLandingProps = {
  page: LocalSeoPage;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://versatileinterior.com.bd";

export function LocalSeoLanding({ page }: LocalSeoLandingProps) {
  const featuredProjects = getRelatedProjects(page.featuredProjectSlugs);
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.serviceType,
    description: page.seo.description,
    areaServed: page.location,
    provider: {
      "@type": "Organization",
      name: "Versatile Interior",
      url: siteUrl
    },
    url: `${siteUrl}/${page.slug}`
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: page.seo.title, item: `${siteUrl}/${page.slug}` }
    ]
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        suppressHydrationWarning
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        suppressHydrationWarning
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        suppressHydrationWarning
        type="application/ld+json"
      />
      <section className="border-b border-[var(--color-border)] bg-[var(--color-background)] pt-36 md:pt-40">
        <Container className="grid gap-12 pb-16 md:pb-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className={typography.caption}>{page.eyebrow}</p>
            <h1 className={`${typography.hero} mt-8 max-w-5xl`}>{page.title}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)] md:text-xl md:leading-9">
              {page.intro}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface)] lg:col-span-5">
            <Image alt={page.heroAlt} className="object-cover" fill priority sizes="(min-width: 1024px) 40vw, 100vw" src={page.heroImage} />
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className={spacing.sectionTight}>
          <div className="grid gap-8 md:grid-cols-3">
            {page.proof.map((item) => (
              <Stat key={item.label} label={item.label} value={item.value} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-background)]">
        <Container className={spacing.section}>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <SectionLabel>Local approach</SectionLabel>
            </div>
            <div className="grid gap-12 lg:col-span-8 lg:col-start-5">
              {page.sections.map((section) => (
                <div className="border-b border-[var(--color-border)] pb-10" key={section.title}>
                  <h2 className={typography.h2}>{section.title}</h2>
                  <p className="mt-6 text-lg leading-8 text-[var(--color-text-muted)]">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className={spacing.section}>
          <SectionHeading
            eyebrow="Services"
            title={`Interior services relevant to ${page.location}.`}
            intro="Each engagement is scoped around project type, site conditions, timeline, budget, and the level of execution support required."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {page.serviceLinks.map((service) => (
              <Link className="group flex min-h-72 flex-col justify-between border border-[var(--color-border)] bg-white p-6 transition hover:border-[var(--color-primary)]" href={service.href} key={service.href}>
                <div>
                  <h3 className="font-display text-3xl leading-tight">{service.label}</h3>
                  <p className="mt-5 text-sm leading-7 text-[var(--color-text-muted)]">
                    {service.description}
                  </p>
                </div>
                <span className={`${typography.caption} mt-8 inline-flex items-center gap-3`}>
                  View service
                  <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={18} strokeWidth={1.7} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-background)]">
        <Container className={spacing.section}>
          <SectionHeading
            eyebrow="Related work"
            title="Selected projects with relevant planning, materials, and execution lessons."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link className="group grid gap-5" href={`/projects/${project.slug}`} key={project.slug}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface)]">
                  <Image alt={`${project.title} interior project`} className="object-cover transition duration-700 group-hover:scale-[1.03]" fill sizes="(min-width: 1024px) 30vw, 100vw" src={project.coverImage} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                    {project.category} / {project.location}
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-tight">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
                    {project.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
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
              <h2 className={typography.h2}>Questions clients ask before starting.</h2>
              <div className="mt-10 border-t border-[var(--color-border)]">
                {page.faqs.map((faq) => (
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

      <FinalCta />
    </>
  );
}
