import { notFound } from "next/navigation";
import { ServiceCaseStudy } from "@/components/services/ServiceCaseStudy";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ServiceDetailHero } from "@/components/services/ServiceHero";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceGallery } from "@/components/services/ServiceGallery";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { getServiceBySlug, services } from "@/data/services";
import { createMetadata } from "@/lib/seo/metadata";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://versatileinterior.com.bd";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return createMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}`
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.seo.title,
    description: service.seo.description,
    image: service.heroImage,
    provider: {
      "@type": "Organization",
      name: "Versatile Interior",
      url: siteUrl
    },
    areaServed: ["Dhaka", "Bangladesh"],
    serviceType: service.title,
    url: `${siteUrl}/services/${service.slug}`
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${siteUrl}/services/${service.slug}` }
    ]
  };

  return (
    <SiteLayout>
      <main>
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
        <ServiceDetailHero service={service} />
        <ServiceOverview service={service} />
        <ServiceProcess service={service} />
        <ServiceGallery service={service} />
        <ServiceCaseStudy service={service} />
        <ServiceFAQ service={service} />
        <ServiceCTA service={service} />
      </main>
    </SiteLayout>
  );
}
