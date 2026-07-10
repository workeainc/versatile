import { ProjectCaseHero } from "@/components/heroes/ProjectCaseHero";
import type { Project } from "@/data/projects";

export function ProjectDetailHero({ project }: { project: Project }) {
  return <ProjectCaseHero project={project} />;
}
