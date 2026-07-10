import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { getCategories, getPostsByCategory } from "@/lib/blog/blog";
import { createMetadata } from "@/lib/seo/metadata";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getCategories().map((category) => ({
    slug: category.slug
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategories().find((item) => item.slug === slug);

  if (!category) {
    return {};
  }

  return createMetadata({
    title: `${category.name} Articles`,
    description: `Interior design articles in ${category.name} by Versatile Interior.`,
    path: `/blog/category/${category.slug}`
  });
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategories().find((item) => item.slug === slug);
  const posts = getPostsByCategory(slug);

  if (!category || !posts.length) {
    notFound();
  }

  return (
    <SiteLayout>
      <main>
        <ArchiveHero eyebrow="Category" title={category.name} count={category.count} />
        <ArchivePosts posts={posts} />
      </main>
    </SiteLayout>
  );
}

function ArchiveHero({ eyebrow, title, count }: { eyebrow: string; title: string; count: number }) {
  return (
    <section className="border-b border-[var(--color-border)] pt-36 md:pt-40">
      <Container className="pb-16 md:pb-20">
        <p className={typography.caption}>{eyebrow}</p>
        <h1 className={`${typography.hero} mt-8`}>{title}</h1>
        <p className="mt-8 text-lg leading-8 text-[var(--color-text-muted)]">
          {count} article{count === 1 ? "" : "s"} from the Versatile Interior journal.
        </p>
      </Container>
    </section>
  );
}

function ArchivePosts({ posts }: { posts: ReturnType<typeof getPostsByCategory> }) {
  return (
    <section>
      <Container className={spacing.section}>
        <div className="grid gap-12">
          {posts.map((post, index) => (
            <ArticleCard key={post.slug} post={post} priority={index === 0} />
          ))}
        </div>
      </Container>
    </section>
  );
}
