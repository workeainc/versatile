import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { typography } from "@/styles/typography";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text)]">
      <Container className="py-14 md:py-20">
        <Divider className="mb-10" />
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
              Contact
            </p>
            <h2 className={typography.h2}>Let&apos;s create your next landmark.</h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Button href="mailto:hello@versatileinterior.com" variant="dark">
              Start a project
            </Button>
            <p className="mt-8 text-sm leading-7 text-[var(--color-text-muted)]">
              Dhaka, Bangladesh
              <br />
              hello@versatileinterior.com
              <br />
              +880 1700 000000
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
