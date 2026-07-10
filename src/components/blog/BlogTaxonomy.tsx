import Link from "next/link";

type TaxonomyItem = {
  name: string;
  slug: string;
  count: number;
};

export function BlogTaxonomy({
  categories,
  tags
}: {
  categories: TaxonomyItem[];
  tags: TaxonomyItem[];
}) {
  return (
    <aside className="grid gap-10">
      <TaxonomyGroup basePath="/blog/category" items={categories} title="Categories" />
      <TaxonomyGroup basePath="/blog/tag" items={tags} title="Tags" />
    </aside>
  );
}

function TaxonomyGroup({
  title,
  items,
  basePath
}: {
  title: string;
  items: TaxonomyItem[];
  basePath: string;
}) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
        {title}
      </h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <Link className="flex justify-between border-b border-[var(--color-border)] pb-3 text-sm hover:text-[var(--color-primary)]" href={`${basePath}/${item.slug}`} key={item.slug}>
            <span>{item.name}</span>
            <span className="text-[var(--color-text-muted)]">{item.count}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
