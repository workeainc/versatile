export function AuthorCard() {
  return (
    <aside className="border border-[var(--color-border)] p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
        Written by
      </p>
      <h2 className="mt-4 font-display text-3xl leading-tight">Versatile Interior Studio</h2>
      <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
        A Dhaka-based interior design studio writing about practical, buildable interiors for homes, workplaces, restaurants, showrooms, and events.
      </p>
    </aside>
  );
}
