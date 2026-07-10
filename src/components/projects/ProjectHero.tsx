import { PageHero } from "@/components/heroes/PageHero";
import { projects } from "@/data/projects";

export function ProjectHero() {
  const featured = projects[0];

  return (
    <PageHero
      eyebrow="Portfolio"
      title="Selected Projects"
      intro="A portfolio of residential, commercial, hospitality, retail, and event interiors shaped with purpose and restraint."
      image={{
        src: featured.heroImage,
        alt: `${featured.title} hero interior`,
        priority: true
      }}
      imageHeight="medium"
    />
  );
}
