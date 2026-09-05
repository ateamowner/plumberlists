"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export function MobileStickyCta() {
  const pathname = usePathname();
  const path = normalizePath(pathname ?? "/");
  const hiddenRoute = path === "/for-pros" || path === "/privacy";
  const [quoteMostlyVisible, setQuoteMostlyVisible] = useState(false);
  const [formFocused, setFormFocused] = useState(false);

  useEffect(() => {
    if (hiddenRoute) return;

    const form = document.getElementById("quote");
    if (!form) {
      setQuoteMostlyVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setQuoteMostlyVisible(entry.intersectionRatio >= 0.4);
      },
      { threshold: [0, 0.4, 1] }
    );
    observer.observe(form);

    function onFocusIn(event: FocusEvent) {
      if (form.contains(event.target as Node)) setFormFocused(true);
    }
    function onFocusOut(event: FocusEvent) {
      if (!form.contains(event.relatedTarget as Node)) setFormFocused(false);
    }

    form.addEventListener("focusin", onFocusIn);
    form.addEventListener("focusout", onFocusOut);

    return () => {
      observer.disconnect();
      form.removeEventListener("focusin", onFocusIn);
      form.removeEventListener("focusout", onFocusOut);
    };
  }, [pathname, hiddenRoute]);

  if (hiddenRoute || quoteMostlyVisible || formFocused) return null;

  const href = documentHasQuote(path) ? "#quote" : "/#quote";

  return (
    <>
      <div className="h-16 md:hidden" aria-hidden="true" />
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card px-4 pt-3 md:hidden"
        style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
      >
        <a
          href={href}
          className="type-button inline-flex h-[48px] w-full items-center justify-center rounded-[10px] bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Get a quote
        </a>
      </div>
    </>
  );
}

function documentHasQuote(path: string): boolean {
  return (
    path === "/" ||
    (/^\/[a-z0-9-]+(?:\/[a-z0-9-]+)?$/.test(path) &&
      path !== "/privacy" &&
      path !== "/for-pros" &&
      path !== "/request-sent")
  );
}
