import { typography } from "@/styles/typography";

type LoadMoreProps = {
  hiddenCount: number;
  onClick: () => void;
};

export function LoadMore({ hiddenCount, onClick }: LoadMoreProps) {
  if (hiddenCount <= 0) {
    return null;
  }

  return (
    <div className="flex justify-center border-t border-[var(--color-border)] pt-12">
      <button
        className={`${typography.caption} inline-flex min-h-12 items-center border border-[var(--color-border)] px-5 py-3 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]`}
        onClick={onClick}
        type="button"
      >
        Load more projects ({hiddenCount})
      </button>
    </div>
  );
}
