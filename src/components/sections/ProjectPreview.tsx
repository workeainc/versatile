import { Button } from "@/components/ui/Button";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/cn";
import { typography } from "@/styles/typography";

type ProjectPreviewProps = {
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  featured?: boolean;
  imagePosition?: "left" | "right";
};

export function ProjectPreview({
  title,
  category,
  location,
  year,
  description,
  image,
  imageAlt,
  slug,
  featured,
  imagePosition = "left"
}: ProjectPreviewProps) {
  const imageClass = imagePosition === "right" ? "lg:order-2" : "";
  const textClass = imagePosition === "right" ? "lg:order-1" : "";

  return (
    <article className="group grid overflow-hidden gap-8 lg:grid-cols-12 lg:gap-10">
      <div className={cn("lg:col-span-7", imageClass)}>
      <ImageFrame
        src={image}
        alt={imageAlt}
        className="aspect-[4/5] md:aspect-[16/11] lg:min-h-[500px]"
        imageClassName="group-hover:scale-[1.025]"
        sizes="(min-width: 1024px) 58vw, 100vw"
      />
      </div>
      <div
        className={cn(
          "flex flex-col justify-between border-t border-[var(--color-border)] pt-6 lg:col-span-5 lg:min-h-[500px]",
          textClass
        )}
      >
        <div>
          {featured ? <SectionLabel>Featured project</SectionLabel> : null}
          <h3 className={cn(typography.h3, "mt-7")}>{title}</h3>
        </div>
        <div className="mt-10">
          <p className="mb-8 max-w-md text-lg leading-8 text-[var(--color-text-muted)]">
            {description}
          </p>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-y border-[var(--color-border)] py-6 text-sm">
            {[
              ["Category", category],
              ["Location", location],
              ["Year", year]
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                  {label}
                </dt>
                <dd className="mt-2">{value}</dd>
              </div>
            ))}
          </dl>
          <Button href={`/projects/${slug}`} variant="ghost" className="mt-8">
            View case study
          </Button>
        </div>
      </div>
    </article>
  );
}
