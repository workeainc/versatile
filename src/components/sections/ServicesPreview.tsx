import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/site";
import { spacing } from "@/styles/spacing";

export function ServicesPreview() {
  return (
    <section id="services" className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className={spacing.section}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Services"
              title="Focused design services for places people remember."
            />
            <Button href="/services" variant="dark" className="mt-10">
              Explore services
            </Button>
          </div>
          <div className="lg:col-span-7">
            <div className="border-t border-[var(--color-border)]">
              {services.map((service, index) => (
                <a
                  className="group grid gap-5 border-b border-[var(--color-border)] py-7 transition hover:pl-3 md:grid-cols-[0.16fr_0.44fr_1fr_auto]"
                  href={service.href}
                  key={service.title}
                >
                  <span className="font-display text-3xl leading-none text-[var(--color-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-4xl leading-none">
                    {service.title}
                  </span>
                  <span className="max-w-xl text-sm leading-7 text-[var(--color-text-muted)]">
                    {service.description}
                  </span>
                  <ArrowUpRight
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    size={20}
                    strokeWidth={1.6}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
