import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { getPostsByTag, getTags } from "@/lib/blog/blog";
import { createMetadata } from "@/lib/seo/metadata";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

type TagPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getTags().map((tag) => ({
    slug: tag.slug
  }));
}

export async function generateMetadata({ params }: TagPageProps) {
  const { slug } = await params;
  const tag = getTags().find((item) => item.slug === slug);

  if (!tag) {
    return {};
  }

  return createMetadata({
    title: `${tag.name} Articles`,
    description: `Interior design articles tagged ${tag.name} by Versatile Interior.`,
    path: `/blog/tag/${tag.slug}`
  });
}

export default async function BlogTagPage({ params }: TagPageProps) {
  const { slug } = await params;
  const tag = getTags().find((item) => item.slug === slug);
  const posts = getPostsByTag(slug);

  if (!tag || !posts.length) {
    notFound();
  }

  return (
    <SiteLayout>
      <main>
        <section className="border-b border-[var(--color-border)] pt-36 md:pt-40">
          <Container className="pb-16 md:pb-20">
            <p className={typography.caption}>Tag</p>
            <h1 className={`${typography.hero} mt-8`}>{tag.name}</h1>
            <p className="mt-8 text-lg leading-8 text-[var(--color-text-muted)]">
              {tag.count} article{tag.count === 1 ? "" : "s"} from the Versatile Interior journal.
            </p>
          </Container>
        </section>
        <section>
          <Container className={spacing.section}>
            <div className="grid gap-12">
              {posts.map((post, index) => (
                <ArticleCard key={post.slug} post={post} priority={index === 0} />
              ))}
            </div>
          </Container>
        </section>
      </main>
    </SiteLayout>
  );
}
