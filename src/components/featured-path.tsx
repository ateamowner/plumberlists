import Link from "next/link";

export function FeaturedPath({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "mt-4 rounded-[16px] border border-border bg-card p-4 shadow-[0_8px_24px_rgba(19,32,43,0.08)]"
          : "mt-4 rounded-[16px] border border-dashed border-border bg-muted/50 px-4 py-6"
      }
    >
      <p>
        <span className="rounded-full bg-accent px-2 py-0.5 type-label font-semibold text-accent-foreground">
          Featured — paid placement
        </span>
      </p>
      <p className="mt-3">
        No live listings on this URL yet. Use the form.
      </p>
      <p className="mt-3">
        <Link
          href="/for-pros/"
          className="font-medium underline underline-offset-2"
        >
          For pros
        </Link>
      </p>
    </div>
  );
}
