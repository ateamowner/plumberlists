import Link from "next/link";
import { Disclosure } from "@/components/disclosure";
import { site } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group min-w-0">
          <p className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {site.name}
          </p>
          <p className="text-xs text-muted-foreground sm:text-sm">
            Plumber directory — not a plumber
          </p>
        </Link>
        <nav
          aria-label="Primary"
          className="flex shrink-0 items-center gap-3 text-sm font-medium sm:gap-5"
        >
          <Link href="/#cities" className="hover:underline">
            Cities
          </Link>
          <Link href="/for-pros/" className="hidden hover:underline sm:inline">
            For pros
          </Link>
          <a
            href="#quote"
            className="inline-flex h-10 items-center rounded-md bg-primary px-3 text-primary-foreground hover:bg-primary/90"
          >
            Get a quote
          </a>
        </nav>
      </div>
      <div className="border-t border-border bg-muted/50 px-4 py-2 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Disclosure />
        </div>
      </div>
    </header>
  );
}
