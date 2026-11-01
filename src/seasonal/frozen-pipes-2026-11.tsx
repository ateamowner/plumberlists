import type { City } from "@/config/site";
import type { Faq } from "@/lib/content";

/**
 * Frozen and burst pipe winter block, drafted 2026-11-01 by SEO & AEO Desk
 * (seo-tracking/refresh/2026-11-01/03-plumberlists-frozen-pipes.md).
 * National figures only. Every line keeps the source link from the draft.
 */

const src = {
  burstCost: {
    label: "Angi, Burst pipe repair cost",
    href: "https://www.angi.com/articles/burst-pipe-repair-cost.htm",
  },
  signs: {
    label: "Angi, Signs of frozen pipes",
    href: "https://www.angi.com/articles/signs-frozen-pipes.htm",
  },
  burst: {
    label: "Angi, What to do when frozen pipes burst",
    href: "https://www.angi.com/articles/frozen-pipes-burst.htm",
  },
  redCross: {
    label: "American Red Cross, Frozen pipes",
    href: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/winter-storm/frozen-pipes.html",
  },
} as const;

function Cite({ label, href }: { label: string; href: string }) {
  return (
    <cite className="not-italic">
      Source:{" "}
      <a
        href={href}
        className="underline underline-offset-2"
        rel="noopener noreferrer"
        target="_blank"
      >
        {label}
      </a>
      .
    </cite>
  );
}

export function CostLines() {
  return (
    <>
      <p className="mt-3 text-base leading-7">
        Burst pipe repair: national average about $500; most homeowners spend
        $200–$3,000, and complex jobs (underground pipe, major water damage) can
        reach $5,000. <Cite {...src.burstCost} />
      </p>
      <p className="mt-3 text-base leading-7">
        Thawing a frozen pipe: typically a flat fee of about $100. Emergency
        call fee: $100–$300 on top of the base rate.{" "}
        <Cite {...src.burstCost} />
      </p>
    </>
  );
}

export function Section({ city }: { city: City }) {
  return (
    <section id="frozen-pipes" className="mt-10">
      <h2 className="font-heading text-xl font-semibold sm:text-2xl">
        {`Frozen or burst pipe in ${city.name}: what to do first`}
      </h2>
      <p className="mt-3 text-base leading-7">
        <strong>Short answer:</strong> If a pipe has burst, shut off your main
        water valve right away, then call a plumber. If a faucet only trickles
        in a cold snap, suspect a frozen pipe. Thawing it before it splits
        usually costs far less than repairing a burst.
      </p>

      <h3 className="mt-6 font-heading text-lg font-semibold">
        If a pipe already burst
      </h3>
      <ol className="mt-2 list-decimal space-y-1 pl-5 text-base leading-7">
        <li>
          Shut off the main water valve to the house. <Cite {...src.signs} />
        </li>
        <li>
          Call a plumber. If water reached outlets, the panel or appliances,
          keep clear of it.
        </li>
        <li>
          Photograph the damage before cleanup. Angi notes you may need these
          for a homeowners insurance claim. <Cite {...src.burst} />
        </li>
        <li>
          Check your own policy for what it covers. PlumberLists does not say
          whether a claim will be paid.
        </li>
      </ol>

      <h3 className="mt-6 font-heading text-lg font-semibold">
        If you think a pipe is frozen
      </h3>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-base leading-7">
        <li>
          The American Red Cross says to suspect a frozen pipe if a faucet gives
          only a trickle. Likely spots are pipes against exterior walls and
          where the water service enters through the foundation. Keep the
          faucet open while the pipe thaws. <Cite {...src.redCross} />
        </li>
        <li>
          Use gentle heat (the Red Cross lists a hair dryer, a space heater kept
          away from anything flammable, or towels soaked in hot water), never a
          blowtorch or other open flame. If you can’t find or reach the frozen
          section, call a plumber. (Same source.)
        </li>
      </ul>

      <h3 className="mt-6 font-heading text-lg font-semibold">
        Before the next cold snap (Red Cross guidance)
      </h3>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-base leading-7">
        <li>Keep the thermostat at the same temperature day and night during very cold weather.</li>
        <li>If you travel, leave the heat on, set no lower than 55°F.</li>
        <li>Open kitchen and bathroom cabinet doors so warmer air reaches the pipes.</li>
        <li>When it’s very cold, let cold water drip from faucets served by exposed pipes.</li>
        <li>
          Remove and drain outdoor hoses, close the inside valve that feeds each
          outdoor hose bib, and leave the outside bib open so leftover water can
          drain.
        </li>
        <li>Insulate pipes in attics, basements, crawl spaces and garages.</li>
      </ul>
      <p className="mt-3 text-base leading-7">
        <Cite {...src.redCross} />
      </p>

      {city.slug === "dayton-oh" ? (
        <p className="mt-3 text-base leading-7">
          In older Dayton houses, the usual trouble spots are the ones this page
          already names: exposed basement and crawlspace lines, hose bibs, and
          poorly insulated supply runs.
        </p>
      ) : null}
    </section>
  );
}

export function faqs(city: City, base: Faq[]): Faq[] {
  const added: Faq[] = [
    {
      question: `How much does it cost to fix a burst pipe in ${city.name}?`,
      answer: `PlumberLists does not publish a ${city.name}-specific price. Angi’s national figures put burst pipe repair at about $500 on average, with most homeowners spending $200–$3,000, plus a possible $100–$300 emergency call fee. Water damage cleanup is a separate cost. Get a written quote.`,
    },
    {
      question: "What should I do first if a pipe freezes or bursts?",
      answer:
        "If it burst, shut off the main water valve and call a plumber. If a faucet only trickles in very cold weather, suspect a frozen pipe: keep the faucet open, warm the pipe gently, never with an open flame, and call a plumber if you can’t reach it (American Red Cross).",
    },
  ];
  // Place the two new questions right after the existing cost question.
  const i = base.findIndex(
    (faq) => faq.question.startsWith("What does ") && faq.question.includes(" cost in ")
  );
  if (i < 0) return [...base, ...added];
  return [...base.slice(0, i + 1), ...added, ...base.slice(i + 1)];
}
