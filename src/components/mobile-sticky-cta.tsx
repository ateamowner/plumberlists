"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { quoteCta } from "@/lib/quote-cta";

export function MobileStickyCta() {
  const pathname = usePathname();
  const { href, label } = quoteCta(pathname);
  const [afterHero, setAfterHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero") ?? document.getElementById("quote");
    if (!hero) {
      setAfterHero(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAfterHero(!entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(hero);
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
