import type { BlogPost } from "@/lib/blog/blog";
import { ArticleCard } from "@/components/blog/ArticleCard";

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) {
    return null;
  }

  return (
    <section className="border-t border-[var(--color-border)] pt-14">
      <h2 className="font-display text-4xl leading-tight">Related reading</h2>
      <div className="mt-10 grid gap-10">
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
