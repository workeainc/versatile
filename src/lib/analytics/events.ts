"use client";

export type AnalyticsEventName =
  | "page_view"
  | "view_project"
  | "view_service"
  | "click_whatsapp"
  | "click_phone"
  | "click_email"
  | "submit_contact_form"
  | "start_consultation"
  | "complete_consultation"
  | "consultation_step"
  | "blog_read";

export type AnalyticsEventPayload = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    uetq?: Array<Record<string, unknown>>;
  }
}

const metaEventMap: Partial<Record<AnalyticsEventName, string>> = {
  submit_contact_form: "Lead",
  start_consultation: "InitiateCheckout",
  complete_consultation: "Lead",
  click_phone: "Contact",
  click_email: "Contact",
  click_whatsapp: "Contact"
};

export function trackEvent(name: AnalyticsEventName, payload: AnalyticsEventPayload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const eventPayload = cleanPayload(payload);
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: name, ...eventPayload });

  window.gtag?.("event", name, eventPayload);

  const metaEvent = metaEventMap[name];
  if (metaEvent) {
    window.fbq?.("track", metaEvent, eventPayload);
  }

  if (window.uetq && ["submit_contact_form", "complete_consultation", "click_phone", "click_whatsapp"].includes(name)) {
    window.uetq.push({ ea: name, ec: "lead", el: eventPayload.label ?? name });
  }
}

function cleanPayload(payload: AnalyticsEventPayload) {
  return Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined && value !== null)
  );
}
