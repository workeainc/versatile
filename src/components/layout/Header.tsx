"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/site";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { typography } from "@/styles/typography";
import logoWordmark from "@/media/logo-wordmark-transparent.png";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(255,255,255,0.92)] text-[var(--color-text)] backdrop-blur-md transition duration-500"
    >
      <Container className="flex min-h-24 items-center justify-between">
        <Link className="flex h-20 items-center" href="/" aria-label="Versatile Interior home">
          <Image
            src={logoWordmark}
            alt="Versatile Interior"
            className="h-16 w-auto object-contain"
            priority
            sizes="220px"
          />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              className={cn(
                typography.caption,
                "relative opacity-80 transition hover:text-[var(--color-primary)] hover:opacity-100",
                "after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[var(--color-primary)] after:transition",
                pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`))
                  ? "text-[var(--color-primary)] opacity-100 after:scale-x-100"
                  : "hover:after:scale-x-100"
              )}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className={cn(
              typography.caption,
              "border border-[var(--color-primary)] px-4 py-3 text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-white"
            )}
            href="/request-consultation"
          >
            Request Consultation
          </Link>
        </nav>
        <button
          className="grid size-11 place-items-center border border-[var(--color-border)] text-[var(--color-primary)] transition hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white lg:hidden"
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
        </button>
      </Container>
      <div
        className={cn(
          "border-t border-[var(--color-border)] bg-white lg:hidden",
          menuOpen ? "block" : "hidden"
        )}
        id="mobile-navigation"
      >
        <Container className="grid gap-1 py-5">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));

            return (
              <Link
                className={cn(
                  typography.caption,
                  "border-b border-[var(--color-border)] py-4 transition hover:text-[var(--color-primary)]",
                  active ? "text-[var(--color-primary)]" : "text-[var(--color-text)]"
                )}
                href={item.href}
                key={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            className={cn(
              typography.caption,
              "mt-4 inline-flex min-h-12 items-center justify-center border border-[var(--color-primary)] bg-[var(--color-primary)] px-4 py-3 text-white transition hover:border-[var(--color-primary-hover)] hover:bg-[var(--color-primary-hover)]"
            )}
            href="/request-consultation"
            onClick={() => setMenuOpen(false)}
          >
            Request Consultation
          </Link>
        </Container>
      </div>
    </header>
  );
}
