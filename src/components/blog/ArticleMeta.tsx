import type { BlogPost } from "@/lib/blog/blog";

export function ArticleMeta({ post }: { post: BlogPost }) {
  const items = [
    ["Author", post.author],
    ["Published", new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(post.date))],
    ["Reading time", post.readingTime]
  ];

  return (
    <dl className="grid gap-5 border-y border-[var(--color-border)] py-6">
      {items.map(([label, value]) => (
        <div className="grid gap-1" key={label}>
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            {label}
          </dt>
          <dd className="text-sm leading-6">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
