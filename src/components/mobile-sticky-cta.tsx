"use client";

import { usePathname } from "next/navigation";
import { quoteCta } from "@/lib/quote-cta";

export function MobileStickyCta() {
  const { href, label } = quoteCta(usePathname());

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 p-3 backdrop-blur-sm md:hidden">
      <a
        href={href}
        className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-primary text-base font-medium text-primary-foreground hover:bg-primary/90"
      >
        {label}
      </a>
    </div>
  );
}
