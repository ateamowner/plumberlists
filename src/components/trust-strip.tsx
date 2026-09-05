const CHIPS = [
  "No credit card",
  "Paid spots labeled",
  "Local city pages",
] as const;

export function TrustStrip() {
  return (
    <section
      aria-label="Trust"
      className="max-w-full overflow-x-hidden border-y border-border bg-card py-3"
    >
      <ul className="flex max-w-full flex-wrap items-center justify-center gap-2">
        {CHIPS.map((chip) => (
          <li
            key={chip}
            className="rounded-full border border-border bg-background px-3 py-1 type-label font-medium"
          >
            {chip}
          </li>
        ))}
      </ul>
    </section>
  );
}
