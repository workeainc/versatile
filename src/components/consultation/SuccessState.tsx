import { Button } from "@/components/ui/Button";
import { typography } from "@/styles/typography";

export function SuccessState() {
  return (
    <div aria-live="polite" className="border-t border-[var(--color-border)] pt-10" role="status">
      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
        Thank you
      </p>
      <h2 className={typography.h2}>We&apos;ll review your project within 2 business days.</h2>
      <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--color-text-muted)]">
        Your brief has been recorded for the next studio review. We will confirm scope, timeline, and the right first meeting format before moving forward.
      </p>
      <Button href="/" variant="dark" className="mt-9">
        Back to home
      </Button>
    </div>
  );
}
