import { Button } from "@/components/ui/Button";
import { typography } from "@/styles/typography";

export function ArticleCta() {
  return (
    <aside className="border-y border-[var(--color-border)] py-10">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
        Planning a project
      </p>
      <h2 className={`${typography.h2} mt-5`}>Talk to the studio before decisions become expensive.</h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">
        Share the space type, location, timeline, and budget range. We will help clarify the right next step.
      </p>
      <Button className="mt-8" href="/request-consultation" variant="dark">
        Request consultation
      </Button>
    </aside>
  );
}
