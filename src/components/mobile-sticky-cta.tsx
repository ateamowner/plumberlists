"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const HIDE_ON = new Set(["/for-pros", "/privacy", "/request-sent"]);

function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

/**
 * Mobile conversion bar — same homeowner pattern as hvaclists / roofinglists /
 * solarlists. Visible under 768px only. Hides on For Pros and Privacy, when
 * Send request is at least 40% in view, or when focus is inside the form.
 * Observe the submit button (not the tall #quote card) so the bar stays up
 * while the homepage submit is still below the first viewport.
 */
export function MobileStickyCta() {
  const pathname = usePathname();
  const path = normalizePath(pathname);
  const [submitInView, setSubmitInView] = useState(false);
  const [formFocused, setFormFocused] = useState(false);

  useEffect(() => {
    const form = document.getElementById("quote");
    if (!form) {
      setSubmitInView(false);
      setFormFocused(false);
      return;
    }

    const submit =
      form.querySelector<HTMLElement>('button[type="submit"]') ?? form;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setSubmitInView(entry.intersectionRatio >= 0.4);
      },
      { threshold: [0, 0.4, 1] }
    );
    observer.observe(submit);

    const onFocusIn = () => setFormFocused(true);
    const onFocusOut = (event: FocusEvent) => {
      const next = event.relatedTarget;
      if (next instanceof Node && form.contains(next)) return;
      setFormFocused(false);
    };
    form.addEventListener("focusin", onFocusIn);
    form.addEventListener("focusout", onFocusOut);

    return () => {
      observer.disconnect();
      form.removeEventListener("focusin", onFocusIn);
      form.removeEventListener("focusout", onFocusOut);
    };
  }, [pathname]);

  if (HIDE_ON.has(path) || submitInView || formFocused) return null;

  return (
    <>
      <div
        className="h-[calc(4.25rem+env(safe-area-inset-bottom,0px))] md:hidden"
        aria-hidden="true"
      />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
        <a
          href="#quote"
          className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-primary text-base font-medium text-primary-foreground hover:bg-primary/90"
        >
          Get a quote
        </a>
      </div>
    </>
  );
}
