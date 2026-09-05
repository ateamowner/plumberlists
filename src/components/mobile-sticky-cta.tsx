"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { quoteCta } from "@/lib/quote-cta";

export function MobileStickyCta() {
  const pathname = usePathname();
  const { href, label } = quoteCta(pathname);
  const [afterHero, setAfterHero] = useState(false);

  useEffect(() => {
    const targets = ["hero", "quote"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (targets.length === 0) {
      setAfterHero(true);
      return;
    }

    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        setAfterHero(visible.size === 0);
      },
      { threshold: 0, rootMargin: "0px 0px -64px 0px" }
    );

    for (const target of targets) observer.observe(target);
    return () => observer.disconnect();
  }, [pathname]);

  if (!afterHero) return null;

  return (
    <>
      <div className="h-16 md:hidden" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 p-3 backdrop-blur-sm md:hidden">
        <a
          href={href}
          className="type-button inline-flex h-11 w-full items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {label}
        </a>
      </div>
    </>
  );
}
