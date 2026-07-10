import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { getAllPosts } from "@/lib/blog/blog";
import { Container } from "@/components/ui/Container";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function RelatedArticles({ project }: { project: Project }) {
  const posts = getAllPosts()
    .filter((post) => {
      const text = `${post.category} ${post.tags.join(" ")}`.toLowerCase();
      const projectCategory = project.category.toLowerCase();
      const residentialSupport =
        project.category === "Residential" &&
        (text.includes("bangladesh homes") || text.includes("material"));

      return (
        residentialSupport ||
        text.includes(projectCategory) ||
        project.services.some((service) => text.includes(service.toLowerCase().split(" ")[0]))
      );
    })
    .slice(0, 3);

  if (!posts.length) {
    return null;
  }

  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className={spacing.sectionTight}>
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
              Related reading
            </p>
            <h2 className={typography.h2}>Helpful context for similar projects.</h2>
          </div>
          <Link className={`${typography.caption} inline-flex items-center gap-3`} href="/blog">
            View journal <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <Link className="group flex min-h-64 flex-col justify-between border border-[var(--color-border)] bg-white p-6 transition hover:border-[var(--color-primary)]" href={`/blog/${post.slug}`} key={post.slug}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                  {post.category}
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight">{post.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
                  {post.excerpt}
                </p>
              </div>
              <span className={`${typography.caption} mt-8 inline-flex items-center gap-3`}>
                Read article
                <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={18} strokeWidth={1.7} />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
