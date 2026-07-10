import { PageHero } from "@/components/heroes/PageHero";
import type { Service } from "@/data/services";

type ServiceHeroProps = {
  label?: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
};

export function ServiceHero({
  label = "Services",
  title,
  subtitle,
  image,
  imageAlt
}: ServiceHeroProps) {
  return (
    <PageHero
      eyebrow={label}
      title={title}
      intro={subtitle}
      image={{ src: image, alt: imageAlt, priority: true }}
      imageHeight="medium"
    />
  );
}

export function ServiceDetailHero({ service }: { service: Service }) {
  return (
    <ServiceHero
      label="Service"
      title={service.pluralTitle}
      subtitle={service.subtitle}
      image={service.heroImage}
      imageAlt={service.heroAlt}
    />
  );
}
