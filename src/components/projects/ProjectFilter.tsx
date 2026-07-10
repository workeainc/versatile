"use client";

import type { ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/cn";
import { typography } from "@/styles/typography";

type FilterValue = "All" | ProjectCategory;

type ProjectFilterProps = {
  categories: FilterValue[];
  active: FilterValue;
  onChange: (category: FilterValue) => void;
};

export function ProjectFilter({
  categories,
  active,
  onChange
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-4 border-y border-[var(--color-border)] py-6">
      {categories.map((category) => (
        <button
          className={cn(
            typography.caption,
            "relative pb-1 text-[var(--color-text-muted)] transition hover:text-[var(--color-primary)]",
            "after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition",
            active === category
              ? "text-[var(--color-primary)] after:scale-x-100"
              : "hover:after:scale-x-100"
          )}
          key={category}
          onClick={() => onChange(category)}
          type="button"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
