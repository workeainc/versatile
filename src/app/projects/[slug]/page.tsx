import { notFound } from "next/navigation";
import { ConsultationCTA } from "@/components/project-detail/ConsultationCTA";
import { ProjectApproach } from "@/components/project-detail/ProjectApproach";
import { ProjectChallenges } from "@/components/project-detail/ProjectChallenges";
import { ProjectDetailHero } from "@/components/project-detail/ProjectDetailHero";
import { ProjectFacts } from "@/components/project-detail/ProjectFacts";
import { ProjectGallery } from "@/components/project-detail/ProjectGallery";
import { ProjectMaterials } from "@/components/project-detail/ProjectMaterials";
import { ProjectNavigation } from "@/components/project-detail/ProjectNavigation";
import { ProjectStatistics } from "@/components/project-detail/ProjectStatistics";
import { ProjectStory } from "@/components/project-detail/ProjectStory";
import { ProjectTestimonial } from "@/components/project-detail/ProjectTestimonial";
import { RelatedArticles } from "@/components/project-detail/RelatedArticles";
import { RelatedProjects } from "@/components/project-detail/RelatedProjects";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { getProjectBySlug, projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo/metadata";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://versatileinterior.com.bd";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return createMetadata({
    title: project.seo.title,
    description: project.seo.description,
    path: `/projects/${project.slug}`
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.seo.description,
    image: project.heroImage,
    dateCreated: project.completionDate,
    genre: project.category,
    locationCreated: {
      "@type": "Place",
      name: project.location
    },
    creator: {
      "@type": "Organization",
      name: "Versatile Interior",
      url: siteUrl
    },
    mainEntityOfPage: `${siteUrl}/projects/${project.slug}`,
    keywords: project.services.join(", ")
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${siteUrl}/projects` },
      { "@type": "ListItem", position: 3, name: project.title, item: `${siteUrl}/projects/${project.slug}` }
    ]
  };

  return (
    <SiteLayout>
      <main>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
          suppressHydrationWarning
          type="application/ld+json"
        />
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
          suppressHydrationWarning
          type="application/ld+json"
        />
        <ProjectDetailHero project={project} />
        <ProjectFacts project={project} />
        <ProjectStory project={project} />
        <ProjectGallery project={project} />
        <ProjectApproach project={project} />
        <ProjectMaterials project={project} />
        <ProjectChallenges project={project} />
        <ProjectStatistics project={project} />
        <ProjectTestimonial project={project} />
        <RelatedArticles project={project} />
        <RelatedProjects project={project} />
        <ProjectNavigation project={project} />
        <ConsultationCTA />
      </main>
    </SiteLayout>
  );
}
