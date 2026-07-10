export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
          Versatile Interior
        </p>
        <div className="mt-6 h-px w-48 overflow-hidden bg-[var(--color-border)]">
          <div className="h-full w-1/2 animate-pulse bg-[var(--color-primary)]" />
        </div>
      </div>
    </main>
  );
}
