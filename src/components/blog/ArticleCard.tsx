import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog/blog";
import { typography } from "@/styles/typography";

export function ArticleCard({ post, priority = false }: { post: BlogPost; priority?: boolean }) {
  return (
    <article className="group grid gap-6 border-b border-[var(--color-border)] pb-10 md:grid-cols-[0.8fr_1fr] md:gap-8">
      <Link className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface)]" href={`/blog/${post.slug}`}>
        <Image
          alt={post.coverAlt}
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
          fill
          priority={priority}
          sizes="(min-width: 768px) 38vw, 100vw"
          src={post.cover}
        />
      </Link>
      <div className="flex flex-col justify-between gap-8">
        <div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            <Link className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]" href={`/blog/category/${post.categorySlug}`}>
              {post.category}
            </Link>
            <span>/</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>/</span>
            <span>{post.readingTime}</span>
          </div>
          <Link href={`/blog/${post.slug}`}>
            <h2 className={`${typography.h2} mt-5 transition group-hover:text-[var(--color-primary)]`}>
              {post.title}
            </h2>
          </Link>
          <p className="mt-5 text-base leading-8 text-[var(--color-text-muted)]">
            {post.excerpt}
          </p>
        </div>
        <Link className={`${typography.caption} inline-flex items-center gap-3`} href={`/blog/${post.slug}`}>
          Read article
          <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={18} strokeWidth={1.7} />
        </Link>
      </div>
    </article>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(date));
}
