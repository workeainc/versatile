import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { typography } from "@/styles/typography";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pt-28 text-[var(--color-text)] md:pt-32">
      <Container className="grid min-h-[70vh] gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-8">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            404
          </p>
          <h1 className={typography.h1}>This space has not been designed yet.</h1>
        </div>
        <div className="lg:col-span-4">
          <p className="mb-8 text-lg leading-8 text-[var(--color-text-muted)]">
            The page you are looking for may have moved, or the project has not been published.
          </p>
          <Button href="/" variant="dark">
            Back to home
          </Button>
        </div>
      </Container>
    </main>
  );
}
