import { notFound } from "next/navigation";
import { LocalSeoLanding } from "@/components/local-seo/LocalSeoLanding";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { getLocalSeoPage } from "@/data/localSeo";
import { createMetadata } from "@/lib/seo/metadata";

const pageData = getLocalSeoPage("interior-design-dhanmondi");

export const metadata = pageData
  ? createMetadata({
      title: pageData.seo.title,
      description: pageData.seo.description,
      path: `/${pageData.slug}`
    })
  : {};

export default function InteriorDesignDhanmondiPage() {
  if (!pageData) {
    notFound();
  }

  return (
    <SiteLayout>
      <main>
        <LocalSeoLanding page={pageData} />
      </main>
    </SiteLayout>
  );
}
