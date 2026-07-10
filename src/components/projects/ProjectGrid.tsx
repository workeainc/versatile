"use client";

import { useMemo, useState } from "react";
import { LoadMore } from "@/components/projects/LoadMore";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import type { Project, ProjectCategory } from "@/data/projects";
import { projectCategories } from "@/data/projects";

type FilterValue = "All" | ProjectCategory;

type ProjectGridProps = {
  projects: Project[];
};

const initialCount = 4;

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState<FilterValue>("All");
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hiddenCount = Math.max(filteredProjects.length - visibleCount, 0);

  return (
    <div>
      <ProjectFilter
        active={activeCategory}
        categories={projectCategories}
        onChange={(category) => {
          setActiveCategory(category);
          setVisibleCount(initialCount);
        }}
      />
      <div className="mt-16 grid gap-16 lg:gap-24">
        {visibleProjects.map((project, index) => (
          <ProjectCard index={index} key={project.slug} project={project} />
        ))}
      </div>
      <div className="mt-16">
        <LoadMore
          hiddenCount={hiddenCount}
          onClick={() => setVisibleCount((count) => count + 2)}
        />
      </div>
    </div>
  );
}
