"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics/events";
import { typography } from "@/styles/typography";

const fieldClassName =
  "border border-[var(--color-border)] bg-transparent px-4 py-4 transition focus:border-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]";

export function QuickContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div aria-live="polite" className="border-t border-[var(--color-border)] pt-8" role="status">
        <h3 className="font-display text-4xl">Message noted.</h3>
        <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
          Thank you. We will review your note and respond with the right next step for your project.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-5"
      onSubmit={(event) => {
        event.preventDefault();
        trackEvent("submit_contact_form", { form: "quick_contact" });
        setSent(true);
      }}
    >
      <label className="grid gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          Name
        </span>
        <input
          autoComplete="name"
          className={fieldClassName}
          name="name"
          placeholder="Your name..."
          required
        />
      </label>
      <label className="grid gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          Email
        </span>
        <input
          autoComplete="email"
          className={fieldClassName}
          name="email"
          placeholder="name@example.com..."
          required
          spellCheck={false}
          type="email"
        />
      </label>
      <label className="grid gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          Message
        </span>
        <textarea
          autoComplete="off"
          className={`${fieldClassName} min-h-36`}
          name="message"
          placeholder="Tell us about your project..."
          required
        />
      </label>
      <button
        className={`${typography.caption} inline-flex min-h-12 items-center justify-center border border-[var(--color-primary)] bg-[var(--color-primary)] px-5 py-3 text-white transition hover:border-[var(--color-primary-hover)] hover:bg-[var(--color-primary-hover)]`}
        type="submit"
      >
        Send message
      </button>
    </form>
  );
}
