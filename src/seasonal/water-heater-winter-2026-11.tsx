import type { City } from "@/config/site";
import type { Faq } from "@/lib/content";

/**
 * Winter water heater block (repair costs + ended federal credit), drafted
 * 2026-11-15 by SEO & AEO Desk
 * (seo-tracking/refresh/2026-11-15/02-plumberlists-water-heater-winter.md).
 * National figures only. Every line keeps the source link from the draft.
 */

const src = {
  angi: {
    label: "Angi, Water heater repair cost 2026",
    href: "https://www.angi.com/articles/how-much-does-it-cost-repair-water-heater.htm",
  },
  irs: {
    label: "IRS, Energy Efficient Home Improvement Credit",
    href: "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit",
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
        Water heater repair: national average about $616; most homeowners pay
        $228–$1,017. Minor fixes can start around $90 and major repairs can
        reach $1,800. <Cite {...src.angi} />
      </p>
      <p className="mt-3 text-base leading-7">
        Common parts (part only, before labor): anode rod $25–$75, heating
        element $15–$60, gas valve $70–$200, thermostat $20–$400.{" "}
        <Cite {...src.angi} />
      </p>
      <p className="mt-3 text-base leading-7">
        Professional tank flush: about $200 (sediment is the usual cause of
        rumbling or popping noises). <Cite {...src.angi} />
      </p>
    </>
  );
}

export function Section() {
  return (
    <div id="water-heater-winter" className="mt-6">
      <h3 className="font-heading text-lg font-semibold">
        Federal water heater tax credit: ended after 2025
      </h3>
      <p className="mt-2 text-base leading-7">
        The IRS Energy Efficient Home Improvement Credit covered qualifying
        water heaters (up to $600 per item for natural gas, propane or oil
        water heaters, and up to $2,000 per year for qualified heat pumps and
        water heaters in that category). The IRS says it can be claimed only
        &quot;for improvements made through December 31, 2025.&quot; A water
        heater installed in late 2026 does not qualify. If a quote shows a
        federal tax credit line for a 2026 install, ask the company to explain
        it in writing. <Cite {...src.irs} />
      </p>
      <p className="mt-3 text-base leading-7">
        PlumberLists is not a tax advisor. Ask a tax professional how any
        credit applies to you.
      </p>

      <h3 className="mt-6 font-heading text-lg font-semibold">
        Repair or replace? Winter checklist
      </h3>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-base leading-7">
        <li>
          <strong>Repair is usually worth asking about</strong> when the
          problem is one part: a heating element or thermostat on an electric
          unit, or the thermocouple or gas valve on a gas unit (Angi lists
          these as the common repairs).
        </li>
        <li>
          <strong>Ask for a replacement quote too</strong> when the tank
          itself is leaking, or when the repair quote is approaching the
          national replacement range above.
        </li>
        <li>
          <strong>Get both on one written quote:</strong> repair price,
          replacement price, haul-away of the old tank, and any venting or
          drain-pan work as separate lines.
        </li>
        <li>
          <strong>Gas smell near the heater:</strong> leave the house and call
          the gas utility&apos;s emergency line from outside before you call a
          plumber.
        </li>
      </ul>
    </div>
  );
}

function isCostQuestion(faq: Faq): boolean {
  return faq.question.startsWith("What does ") && faq.question.includes(" cost in ");
}

export function faqs(city: City, base: Faq[]): Faq[] {
  const cost: Faq = {
    question: `What does water heater cost in ${city.name}?`,
    answer: `PlumberLists does not publish a ${city.name}-specific price. National published figures from Angi (2026): water heater repair averages about $616 (most pay $228–$1,017); tank-style replacement typically runs $881–$1,825 (average about $1,347) and tankless $1,400–$3,900. Get a written quote from a company that has seen your unit.`,
  };
  const credit: Faq = {
    question: "Is there still a federal tax credit for a new water heater?",
    answer:
      "No, not for a 2026 install. The IRS Energy Efficient Home Improvement Credit only covers improvements made through December 31, 2025.",
  };
  const out: Faq[] = [];
  let placed = false;
  for (const faq of base) {
    if (!placed && isCostQuestion(faq)) {
      out.push(cost, credit);
      placed = true;
    } else {
      out.push(faq);
    }
  }
  if (!placed) out.push(cost, credit);
  return out;
}
