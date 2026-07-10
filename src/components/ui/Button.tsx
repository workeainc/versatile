import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { typography } from "@/styles/typography";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "light" | "dark" | "ghost";
  className?: string;
};

const variants = {
  light:
    "border-[var(--color-primary)] bg-transparent !text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:!text-white",
  dark:
    "border-[var(--color-primary)] bg-[var(--color-primary)] !text-white hover:border-[var(--color-primary-hover)] hover:bg-[var(--color-primary-hover)] hover:!text-white",
  ghost:
    "border-[var(--color-border)] bg-transparent text-current hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
};

export function Button({
  href,
  children,
  variant = "dark",
  className
}: ButtonProps) {
  const classNames = cn(
    "group inline-flex min-h-12 items-center gap-3 border px-5 py-3 transition duration-300",
    typography.caption,
    variants[variant],
    className
  );
  const content = (
    <>
      {children}
      <ArrowUpRight
        className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        size={17}
        strokeWidth={1.7}
      />
    </>
  );

  if (!href) {
    return (
      <button className={classNames} type="button">
        {content}
      </button>
    );
  }

  if (href.startsWith("/")) {
    return (
      <Link className={classNames} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <a className={classNames} href={href}>
      {content}
    </a>
  );
}
