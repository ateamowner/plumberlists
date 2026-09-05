"use client";

import { usePathname } from "next/navigation";
import { quoteCta } from "@/lib/quote-cta";

const buttonClassName =
  "type-button inline-flex h-10 items-center rounded-md bg-primary px-3 text-primary-foreground hover:bg-primary/90";

export function HeaderPrimaryCta() {
  const { href, label } = quoteCta(usePathname());

  return (
    <a href={href} className={buttonClassName}>
      {label}
    </a>
  );
}
