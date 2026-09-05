import Link from "next/link";

export function FeaturedPath() {
  return (
    <div className="mt-4">
      <p>
        No live listings on this URL yet. Use the form — we take the request and
        hold it. We do not invent companies.
      </p>
      <p className="mt-3">
        <Link
          href="/for-pros/"
          className="type-button inline-flex h-[48px] items-center justify-center rounded-[10px] border border-border bg-card px-4 hover:bg-muted"
        >
          Get Featured — $99/month
        </Link>
      </p>
    </div>
  );
}
