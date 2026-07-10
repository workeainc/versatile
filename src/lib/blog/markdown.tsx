import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/lib/blog/blog";

type MarkdownContentProps = {
  content: string;
};

export function MarkdownContent({ content }: MarkdownContentProps) {
  const blocks = parseBlocks(content);

  return (
    <div className="grid gap-7">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          const Tag = `h${block.level}` as "h2" | "h3";
          const className =
            block.level === 2
              ? "scroll-mt-32 font-display text-4xl leading-tight"
              : "scroll-mt-32 font-display text-3xl leading-tight";

          return (
            <Tag className={className} id={slugify(block.text)} key={`${block.text}-${index}`}>
              {renderInline(block.text)}
            </Tag>
          );
        }

        if (block.type === "list") {
          return (
            <ul className="grid list-disc gap-3 pl-6 text-base leading-8 text-[var(--color-text-muted)] md:text-lg md:leading-9" key={index}>
              {block.items.map((item) => (
                <li key={item}>{renderInline(item)}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote className="border-l-2 border-[var(--color-primary)] py-2 pl-6 font-display text-3xl leading-tight text-[var(--color-text)]" key={index}>
              {renderInline(block.text)}
            </blockquote>
          );
        }

        if (block.type === "image") {
          return (
            <figure className="grid gap-3" key={index}>
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-surface)]">
                <Image alt={block.alt} className="object-cover" fill sizes="(min-width: 1024px) 760px, 100vw" src={block.src} />
              </div>
              {block.alt ? (
                <figcaption className="text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  {block.alt}
                </figcaption>
              ) : null}
            </figure>
          );
        }

        return (
          <p className="text-base leading-8 text-[var(--color-text-muted)] md:text-lg md:leading-9" key={index}>
            {renderInline(block.text)}
          </p>
        );
      })}
    </div>
  );
}

type Block =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "image"; alt: string; src: string };

function parseBlocks(content: string) {
  const lines = content.split(/\r?\n/);
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: "paragraph", text: paragraph.join(" ") });
      paragraph = [];
    }
  };

  const flushList = () => {
    if (list.length) {
      blocks.push({ type: "list", items: list });
      list = [];
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      return;
    }

    const heading = trimmed.match(/^(#{2,3})\s+(.+)$/);
    const image = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);

    if (heading) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: heading[1].length as 2 | 3, text: heading[2] });
      return;
    }

    if (image) {
      flushParagraph();
      flushList();
      blocks.push({ type: "image", alt: image[1], src: image[2] });
      return;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      list.push(trimmed.slice(2));
      return;
    }

    if (trimmed.startsWith("> ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "quote", text: trimmed.slice(2) });
      return;
    }

    flushList();
    paragraph.push(trimmed);
  });

  flushParagraph();
  flushList();

  return blocks;
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong className="font-semibold text-[var(--color-text)]" key={index}>{part.slice(2, -2)}</strong>;
    }

    const link = part.match(/^\[(.*?)\]\((.*?)\)$/);

    if (link) {
      const [, label, href] = link;
      const className = "font-semibold text-[var(--color-primary)] underline-offset-4 hover:underline";

      if (href.startsWith("/")) {
        return <Link className={className} href={href} key={index}>{label}</Link>;
      }

      return <a className={className} href={href} key={index}>{label}</a>;
    }

    return part;
  });
}
