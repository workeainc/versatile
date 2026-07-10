import { PageHero } from "@/components/heroes/PageHero";
import { studioHero } from "@/data/studio";

export function StudioHero() {
  return (
    <PageHero
      eyebrow="Studio"
      title={studioHero.title}
      intro={studioHero.intro}
      image={{ src: studioHero.image, alt: studioHero.imageAlt, priority: true }}
      imageHeight="medium"
    />
  );
}
