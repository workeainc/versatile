import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Project } from "@/data/projects";
import { spacing } from "@/styles/spacing";

export function ProjectMaterials({ project }: { project: Project }) {
  return (
    <section className="bg-[var(--color-background)]">
      <Container className={spacing.sectionTight}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel>Materials</SectionLabel>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:col-span-8 lg:col-start-5">
            {project.materials.map((material) => (
              <div
                className="border-t border-[var(--color-border)] py-6 font-display text-4xl"
                key={material}
              >
                {material}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
