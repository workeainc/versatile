import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectPreview } from "@/components/sections/ProjectPreview";
import { featuredProjects } from "@/data/site";
import { spacing } from "@/styles/spacing";

export function FeaturedProjects() {
  return (
    <section id="projects" className="border-t border-[var(--color-border)] bg-[var(--color-background)]">
      <Container className={spacing.section}>
        <SectionHeading
          eyebrow="Selected projects"
          title="Recent spaces with a quiet, lasting presence."
        />
        <div className="mt-16 grid gap-20 lg:gap-28">
          {featuredProjects.slice(0, 2).map((project, index) => (
            <ProjectPreview
              key={project.title}
              {...project}
              featured={index === 0}
              imagePosition={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
        <div className="mt-14 flex justify-end">
          <Button href="/projects" variant="ghost">
            See all projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
