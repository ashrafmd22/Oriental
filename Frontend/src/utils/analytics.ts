type EventPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, payload: EventPayload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const eventPayload = {
    event: eventName,
    ...payload,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventPayload);

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }
}

export function trackPageView(path: string, title: string) {
  if (typeof window === "undefined") {
    return;
  }

  const pagePath = path || window.location.pathname;

  trackEvent("page_view", {
    page_path: pagePath,
    page_title: title,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_title: title,
    });
  }
}
