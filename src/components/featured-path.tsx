import Link from "next/link";
import { site } from "@/config/site";

export function FeaturedPath({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "mt-4 rounded-[16px] border border-border bg-card p-4 shadow-sm"
          : "mt-4 rounded-[16px] border border-dashed border-border bg-muted/50 px-4 py-6"
      }
    >
      <p className="text-base leading-7">
        No live listings on this URL yet. Use the form. We take the request and
        hold it until a company on the approved list can take it.
      </p>
      <p className="mt-3 text-sm text-muted-foreground">
        Plumbing companies: Featured is a labeled paid spot, not a fake
        contractor card.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <a
          href={site.featuredCheckoutUrl}
          className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Featured — $99/month
        </a>
        <Link
          href="/for-pros/"
          className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-card px-4 text-sm font-medium hover:bg-muted"
        >
          For Pros
        </Link>
      </div>
    </div>
  );
}
