import { ArticleCard } from "@/components/blog/ArticleCard";
import { BlogTaxonomy } from "@/components/blog/BlogTaxonomy";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAllPosts, getCategories, getTags } from "@/lib/blog/blog";
import { createMetadata } from "@/lib/seo/metadata";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Interior design guides, material advice, renovation planning, and practical insights for homes and commercial spaces in Bangladesh.",
  path: "/blog"
});

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories();
  const tags = getTags();

  return (
    <SiteLayout>
      <main>
        <section className="border-b border-[var(--color-border)] bg-[var(--color-background)] pt-36 md:pt-40">
          <Container className="pb-16 md:pb-20">
            <p className={typography.caption}>Journal</p>
            <h1 className={`${typography.hero} mt-8 max-w-5xl`}>
              Interior design notes for better decisions.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)] md:text-xl md:leading-9">
              Practical guides on cost, materials, planning, hospitality, and the details that make interiors work in Bangladesh.
            </p>
          </Container>
        </section>

        <section className="bg-[var(--color-background)]">
          <Container className={spacing.section}>
            <div className="grid gap-14 lg:grid-cols-12">
              <div className="grid gap-12 lg:col-span-8">
                <SectionHeading
                  eyebrow="Latest"
                  title="Guides for clients planning homes, restaurants, showrooms, and workplaces."
                />
                <div className="grid gap-12">
                  {posts.map((post, index) => (
                    <ArticleCard key={post.slug} post={post} priority={index === 0} />
                  ))}
                </div>
              </div>
              <div className="lg:col-span-3 lg:col-start-10">
                <BlogTaxonomy categories={categories} tags={tags} />
              </div>
            </div>
          </Container>
        </section>
      </main>
    </SiteLayout>
  );
}
