import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { cn } from "@/lib/cn";
import { typography } from "@/styles/typography";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: {
    src: string;
    alt: string;
    priority?: boolean;
  };
  breadcrumbs?: BreadcrumbItem[];
  imageHeight?: "short" | "medium" | "tall";
  className?: string;
};

const imageHeights = {
  short: "h-[42vh] min-h-[320px] md:h-[48vh]",
  medium: "h-[50vh] min-h-[360px] md:h-[58vh]",
  tall: "h-[60vh] min-h-[420px] md:h-[72vh]"
};

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  breadcrumbs,
  imageHeight = "medium",
  className
}: PageHeroProps) {
  return (
    <section className={cn("draft-surface bg-[var(--color-background)] pt-28 md:pt-32", className)}>
      <Container className="pb-12 md:pb-16">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} className="mb-10" /> : null}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="max-w-3xl lg:col-span-7">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              {eyebrow}
            </p>
            <h1 className={typography.h1}>{title}</h1>
          </div>
          {intro ? (
            <p className="max-w-xl text-lg leading-8 text-[var(--color-text-muted)] lg:col-span-4 lg:col-start-9">
              {intro}
            </p>
          ) : null}
        </div>
      </Container>
      {image ? (
        <ImageFrame
          src={image.src}
          alt={image.alt}
          priority={image.priority}
          className={cn("w-full", imageHeights[imageHeight])}
          sizes="100vw"
        />
      ) : null}
    </section>
  );
}
