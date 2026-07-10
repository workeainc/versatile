import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
import type { Project } from "@/data/projects";
import { spacing } from "@/styles/spacing";

export function ProjectGallery({ project }: { project: Project }) {
  const [first, second, third, fourth] = project.gallery;

  return (
    <section className="bg-[var(--color-background)]">
      <Container className={`grid gap-6 ${spacing.sectionTight}`}>
        <ImageFrame
          src={first}
          alt={`${project.title} gallery image 1`}
          className="aspect-[16/9] md:aspect-[16/7]"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <ImageFrame
            src={second}
            alt={`${project.title} gallery image 2`}
            className="aspect-[4/5]"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <ImageFrame
            src={third}
            alt={`${project.title} gallery image 3`}
            className="aspect-[4/5] md:mt-20"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <ImageFrame
          src={fourth}
          alt={`${project.title} gallery image 4`}
          className="aspect-[5/3]"
        />
      </Container>
    </section>
  );
}
