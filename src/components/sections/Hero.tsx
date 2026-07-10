import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { hero } from "@/data/site";
import { typography } from "@/styles/typography";

export function Hero() {
  return (
    <section className="min-h-screen overflow-hidden bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="grid min-h-screen lg:grid-cols-[0.46fr_0.54fr]">
        <Container className="flex min-h-[58vh] flex-col justify-end pb-8 pt-28 md:pb-12 lg:min-h-screen lg:w-full lg:max-w-none lg:px-10 xl:px-14">
          <div className="max-w-3xl">
            <SectionLabel className="mb-7">
              Interior design / architecture / built experiences
            </SectionLabel>
            <h1 className={typography.hero}>Calm, precise interiors for real life.</h1>
            <p className="mt-8 max-w-md text-lg leading-8 text-[var(--color-text-muted)]">
              Dhaka-based interiors shaped around light, storage, climate, site realities, and the people who use them every day.
            </p>
            <Button href="#projects" variant="dark" className="mt-8">
              Explore projects
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-between border-t border-[var(--color-border)] pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
              Scroll
            </p>
            <p className="hidden text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)] md:block">
              Dhaka / Bangladesh
            </p>
          </div>
        </Container>
        <ImageFrame
          src={hero.image}
          alt={hero.imageAlt}
          priority
          className="h-[42vh] min-h-[320px] lg:h-screen"
          sizes="(min-width: 1024px) 54vw, 100vw"
        />
        </div>
    </section>
  );
}
