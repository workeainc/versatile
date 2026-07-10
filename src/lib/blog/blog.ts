import fs from "node:fs";
import path from "node:path";

const blogDirectory = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  cover: string;
  coverAlt: string;
  category: string;
  categorySlug: string;
  tags: string[];
  tagSlugs: string[];
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  content: string;
  readingTime: string;
  headings: BlogHeading[];
};

export type BlogHeading = {
  id: string;
  text: string;
  level: 2 | 3;
};

type Frontmatter = Record<string, string>;

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getAllPosts() {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => getPostBySlug(file.replace(/\.md$/, "")))
    .filter((post): post is BlogPost => Boolean(post))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(blogDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = parseFrontmatter(source);
  const tags = splitList(data.tags);
  const title = data.title ?? slug;
  const category = data.category ?? "Interior Design";

  return {
    slug,
    title,
    date: data.date ?? new Date().toISOString(),
    author: data.author ?? "Versatile Interior Studio",
    cover: data.cover ?? "",
    coverAlt: data.coverAlt ?? title,
    category,
    categorySlug: slugify(category),
    tags,
    tagSlugs: tags.map(slugify),
    excerpt: data.excerpt ?? "",
    seoTitle: data.seoTitle ?? title,
    seoDescription: data.seoDescription ?? data.excerpt ?? "",
    content,
    readingTime: getReadingTime(content),
    headings: getHeadings(content)
  } satisfies BlogPost;
}

export function getCategories() {
  const posts = getAllPosts();
  const categories = new Map<string, { name: string; slug: string; count: number }>();

  posts.forEach((post) => {
    const current = categories.get(post.categorySlug);
    categories.set(post.categorySlug, {
      name: post.category,
      slug: post.categorySlug,
      count: (current?.count ?? 0) + 1
    });
  });

  return Array.from(categories.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export function getTags() {
  const posts = getAllPosts();
  const tags = new Map<string, { name: string; slug: string; count: number }>();

  posts.forEach((post) => {
    post.tags.forEach((tag, index) => {
      const slug = post.tagSlugs[index];
      const current = tags.get(slug);
      tags.set(slug, {
        name: tag,
        slug,
        count: (current?.count ?? 0) + 1
      });
    });
  });

  return Array.from(tags.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export function getPostsByCategory(slug: string) {
  return getAllPosts().filter((post) => post.categorySlug === slug);
}

export function getPostsByTag(slug: string) {
  return getAllPosts().filter((post) => post.tagSlugs.includes(slug));
}

export function getRelatedPosts(post: BlogPost, limit = 3) {
  return getAllPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => ({
      post: candidate,
      score:
        (candidate.categorySlug === post.categorySlug ? 3 : 0) +
        candidate.tagSlugs.filter((tag) => post.tagSlugs.includes(tag)).length
    }))
    .filter((candidate) => candidate.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post: relatedPost }) => relatedPost);
}

function parseFrontmatter(source: string) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);

  if (!match) {
    return { data: {}, content: source } as { data: Frontmatter; content: string };
  }

  const data = match[1].split(/\r?\n/).reduce<Frontmatter>((frontmatter, line) => {
    const separator = line.indexOf(":");

    if (separator === -1) {
      return frontmatter;
    }

    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();

    frontmatter[key] = value.replace(/^["']|["']$/g, "");
    return frontmatter;
  }, {});

  return { data, content: match[2].trim() };
}

function splitList(value = "") {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function getReadingTime(content: string) {
  const words = content.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

function getHeadings(content: string) {
  return content
    .split(/\r?\n/)
    .map((line) => {
      const match = line.match(/^(#{2,3})\s+(.+)$/);

      if (!match) {
        return null;
      }

      const text = match[2].trim();

      return {
        id: slugify(text),
        text,
        level: match[1].length as 2 | 3
      };
    })
    .filter((heading): heading is BlogHeading => Boolean(heading));
}
