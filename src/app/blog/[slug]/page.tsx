import { notFound } from "next/navigation";
import { ArticleCta } from "@/components/blog/ArticleCta";
import { ArticleHero } from "@/components/blog/ArticleHero";
import { ArticleMeta } from "@/components/blog/ArticleMeta";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { ShareLinks } from "@/components/blog/ShareLinks";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog/blog";
import { MarkdownContent } from "@/lib/blog/markdown";
import { createMetadata } from "@/lib/seo/metadata";
import { spacing } from "@/styles/spacing";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://versatileinterior.com.bd";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return createMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
    image: `/blog/${post.slug}/opengraph-image`
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription,
    image: post.cover,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author
    },
    publisher: {
      "@type": "Organization",
      name: "Versatile Interior"
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteUrl}/blog/${post.slug}` }
    ]
  };

  return (
    <SiteLayout>
      <ReadingProgress />
      <main>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
          suppressHydrationWarning
          type="application/ld+json"
        />
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
          suppressHydrationWarning
          type="application/ld+json"
        />
        <ArticleHero post={post} />
        <section className="bg-[var(--color-background)]">
          <Container className={spacing.section}>
            <div className="grid gap-14 lg:grid-cols-12">
              <aside className="grid content-start gap-8 lg:sticky lg:top-32 lg:col-span-3 lg:self-start">
                <ArticleMeta post={post} />
                <TableOfContents headings={post.headings} />
                <ShareLinks post={post} />
              </aside>
              <article className="lg:col-span-7 lg:col-start-5">
                <MarkdownContent content={post.content} />
                <div className="mt-14">
                  <ArticleCta />
                </div>
                <div className="mt-14">
                  <AuthorCard />
                </div>
                <div className="mt-16">
                  <RelatedPosts posts={relatedPosts} />
                </div>
              </article>
            </div>
          </Container>
        </section>
      </main>
    </SiteLayout>
  );
}
