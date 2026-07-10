import Link from "next/link";
import type { BlogPost } from "@/lib/blog/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://versatileinterior.com";

export function ShareLinks({ post }: { post: BlogPost }) {
  const url = `${siteUrl}/blog/${post.slug}`;

  return (
    <div className="border-t border-[var(--color-border)] pt-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
        Share
      </p>
      <div className="mt-4 flex flex-wrap gap-4">
        <Link className="text-sm font-semibold hover:text-[var(--color-primary)]" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}>
          Facebook
        </Link>
        <Link className="text-sm font-semibold hover:text-[var(--color-primary)]" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}>
          LinkedIn
        </Link>
      </div>
    </div>
  );
}
