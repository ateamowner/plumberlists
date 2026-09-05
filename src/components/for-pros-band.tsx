import Link from "next/link";

export function ForProsBand() {
  return (
    <section
      aria-labelledby="for-pros-band-heading"
      className="rounded-[16px] border border-border bg-card p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
    >
      <h2
        id="for-pros-band-heading"
        className="font-heading text-2xl font-semibold"
      >
        For plumbing companies
      </h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Featured is a labeled paid spot on a city page. Checkout is on the For
        pros page. The homeowner form never takes a card.
      </p>
      <p className="mt-5">
        <Link
          href="/for-pros/"
          className="type-button inline-flex h-[48px] items-center justify-center rounded-[10px] bg-primary px-4 text-primary-foreground hover:bg-primary/90"
        >
          Featured — $99/month
        </Link>
      </p>
    </section>
  );
}
