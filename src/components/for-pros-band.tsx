import Link from "next/link";
import { site } from "@/config/site";

export function ForProsBand() {
  return (
    <section
      aria-labelledby="for-pros-band-heading"
      className="rounded-[16px] border border-border bg-card p-6 shadow-md"
    >
      <p className="text-sm font-medium text-primary">For plumbing companies</p>
      <h2
        id="for-pros-band-heading"
        className="mt-1 font-heading text-2xl font-semibold"
      >
        Featured is a labeled paid spot
      </h2>
      <p className="mt-2 max-w-2xl text-base leading-7 text-muted-foreground">
        Homeowners use the quote form. Companies buy Featured — paid placement
        on a city page. This is not a fake shop site and it is not exclusive.
        Checkout is Stripe. The homeowner form never takes a card.
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <a
          href={site.featuredCheckoutUrl}
          className="type-button inline-flex h-11 items-center justify-center rounded-lg bg-primary px-4 text-primary-foreground hover:bg-primary/90"
        >
          Featured — $99/month
        </a>
        <Link
          href="/for-pros/"
          className="type-button inline-flex h-11 items-center justify-center rounded-lg border border-border px-4 hover:bg-muted"
        >
          For pros
        </Link>
      </div>
    </section>
  );
}
