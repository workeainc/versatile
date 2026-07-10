import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { testimonials } from "@/data/site";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export function TestimonialPreview() {
  const testimonial = testimonials[0];

  return (
    <section className="bg-[var(--color-surface)]">
      <Container className={spacing.sectionTight}>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel>Client voice</SectionLabel>
          </div>
          <blockquote className="lg:col-span-8 lg:col-start-5">
            <span className="font-display text-8xl leading-none text-[var(--color-accent)]">
              &quot;
            </span>
            <p className={`${typography.h2} -mt-7`}>{testimonial.quote}</p>
            <footer className="mt-9 border-t border-[var(--color-border)] pt-6">
              <p className="font-semibold">{testimonial.name}</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                {testimonial.role}
              </p>
            </footer>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
