import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog/blog";
import { Container } from "@/components/ui/Container";
import { typography } from "@/styles/typography";

export function ArticleHero({ post }: { post: BlogPost }) {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-background)] pt-36 md:pt-40">
      <Container className="grid gap-12 pb-16 md:pb-20 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            <Link className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]" href={`/blog/category/${post.categorySlug}`}>
              {post.category}
            </Link>
            <span>/</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>/</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className={`${typography.hero} mt-8 max-w-5xl`}>{post.title}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)] md:text-xl md:leading-9">
            {post.excerpt}
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface)] lg:col-span-5">
          <Image alt={post.coverAlt} className="object-cover" fill priority sizes="(min-width: 1024px) 40vw, 100vw" src={post.cover} />
        </div>
      </Container>
    </section>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(date));
}
