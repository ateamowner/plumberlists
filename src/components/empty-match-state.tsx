import { site } from "@/config/site";

export function EmptyMatchState({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "mt-4 rounded-[14px] border border-border bg-card p-4 shadow-card"
          : "mt-4 rounded-[14px] border border-border bg-card px-5 py-8 text-center shadow-card"
      }
    >
      <div
        className={
          compact
            ? "flex h-10 w-10 items-center justify-center rounded-full bg-muted text-primary"
            : "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-muted text-primary"
        }
        aria-hidden="true"
      >
        <HeldRequestIcon />
      </div>
      <h3
        className={
          compact
            ? "mt-3 font-heading text-base font-semibold tracking-tight"
            : "mt-4 font-heading text-xl font-semibold tracking-tight text-balance"
        }
      >
        {site.emptyMatch.headline}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        {site.emptyMatch.followUp}
      </p>
      <p className={compact ? "mt-3" : "mt-5"}>
        <a
          href="#quote"
          className="type-button inline-flex h-11 items-center justify-center rounded-[14px] bg-primary px-4 text-primary-foreground hover:bg-primary/90"
        >
          Request a callback
        </a>
      </p>
    </div>
  );
}

function HeldRequestIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="18"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M8.5 11.5h11M8.5 15h7.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="20.5" cy="19.5" r="4.25" fill="var(--card)" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M18.75 19.5 20 20.75 22.4 18.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
