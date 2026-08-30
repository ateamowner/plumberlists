import {
  costDisclaimer,
  costGuides,
  getNearbyCities,
  lockedH1,
  site,
  type City,
  type Service,
} from "@/config/site";
import { uniqueLocalCopy } from "@/lib/local-copy";

export type Faq = { question: string; answer: string };

export function introParagraphs(city: City, service: Service): string[] {
  const directory = `${site.name} is a directory of plumbers — not one shop and not a contractor website. Featured — paid placement spots on this page are paid and labeled. If the listings block is empty, use the form anyway. We take the request and hold it until a company on the approved list can take it.`;

  return [
    `This page is ${site.name}'s ${city.name}, ${city.stateAbbr} listing for ${service.name.toLowerCase()}. ${directory}`,
    uniqueLocalCopy(city, service),
    `${city.setting} ${city.winter}`,
  ];
}

export function howToChoose(
  city: City,
  service: Service
): {
  lead: string;
  items: { title: string; body: string }[];
} {
  return {
    lead: `How to choose a ${service.name.toLowerCase()} company in ${city.name} — the same checks apply whether you found a listing here or a truck on the street.`,
    items: [
      {
        title: "License",
        body: `Ask for the plumbing license the company uses to work in ${city.state}. Write down the number. ${site.name} does not invent license IDs on this page.`,
      },
      {
        title: "Local jobs",
        body: `Ask for recent addresses in ${city.name} or nearby Miami Valley towns — not a generic photo set. ${city.housing} Access changes the job.`,
      },
      {
        title: "Written scope",
        body: `Get the work in writing: what is opened, what is replaced, who hauls old fixtures, and how they protect floors. A callback is not a scope.`,
      },
      {
        title: "Reviews with addresses",
        body: `Prefer reviews that mention a street or neighborhood in ${city.name}. Star averages with no job location are easy to fake. ${site.name} does not publish star ratings or review counts.`,
      },
      {
        title: "Who shows up",
        body: `Ask who is on site: employees or subcontractors, how many people, and who decides if the plan changes mid-job.`,
      },
      {
        title: "Warranty",
        body: `Ask what is warranted (leak, fixture, water heater, drain work) and for how long. “We stand behind our work” is not a warranty.`,
      },
      {
        title: "Emergency vs planned",
        body: `${service.slug === "emergency-plumbing" ? "If a pipe is open, sewage is up, or the house has no water, say that first." : "If this is not an emergency, say so."} Freeze-related burst lines and planned ${service.name.toLowerCase()} are different queues. Do not let a salesperson treat a Saturday faucet like a rescue.`,
      },
    ],
  };
}

export function costGuideCopy(
  city: City,
  service: Service
): {
  heading: string;
  paragraphs: string[];
  citation: { label: string; href: string };
} {
  const guide = costGuides[service.slug] ?? costGuides.plumbing;
  return {
    heading: `Cost guide (national range, not a ${city.name} survey)`,
    paragraphs: [
      guide.line,
      costDisclaimer,
      `${city.housing} ${city.winter} Access, pipe material, and whether this is emergency work change the number. A written scope from a company that will actually stand in your ${city.name} house is the only local price that matters.`,
    ],
    citation: { label: guide.sourceName, href: guide.sourceUrl },
  };
}

export function faqs(city: City, service: Service): Faq[] {
  const nearby = getNearbyCities(city);
  const nearbyNames = nearby.map((item) => item.name);
  const guide = costGuides[service.slug] ?? costGuides.plumbing;

  return [
    {
      question: `Is ${site.name} a ${service.name.toLowerCase()} company in ${city.name}?`,
      answer: `No. ${site.name} is a directory and lead-routing site. We do not pull permits, open walls, or send a truck. We are not a plumber. Featured — paid placement spots, when present, are paid and labeled.`,
    },
    {
      question: `Why are some listings marked Featured?`,
      answer: `Those are paid placements. Featured — paid placement is a labeled upgrade so homeowners can tell it is an ad. Standard listings, when we have them, are not marked as paid upgrades. We do not invent companies to fill empty slots.`,
    },
    {
      question: `What does ${service.name.toLowerCase()} cost in ${city.name}?`,
      answer: `${site.name} does not publish a ${city.name}-specific price. The only dollar range we cite is the national published range: ${guide.line} (${guide.sourceName}). Your job may be outside that range. Use the form and ask the company for a written number.`,
    },
    {
      question: `What happens after I submit the form on this ${city.name} page?`,
      answer: `We store the request at the operator inbox (${site.leadsEmail}) and hold it. If a listing is live for this URL and that company is on the approved payer list, we can route it. There is no payer list in this repo yet, so the request stays with the operator. You should get a phone call from a local company when one is assigned — not from a ${site.name} plumber. We still take the request if the listings block is empty.`,
    },
    {
      question:
        nearbyNames.length > 0
          ? `Do you cover ${nearbyNames[0]} and other towns near ${city.name}?`
          : `Which towns near ${city.name} have their own ${site.name} pages?`,
      answer:
        nearbyNames.length > 0
          ? `Yes — we keep a separate URL for nearby cities so you can open a real page instead of a comma list. From ${city.name} that includes ${joinAnd(nearbyNames)}. Each of those pages has its own quote form.`
          : `We publish one URL per city. If you do not see your town, send the form with your ZIP and we will hold the request.`,
    },
  ];
}

export function hubFaqs(city: City): Faq[] {
  return [
    {
      question: `What is the ${city.name} ${site.name} hub?`,
      answer: `This is the city index — not a contractor homepage. From here you can open ${city.name} pages for plumbing, drain cleaning, water heater, and emergency plumbing.`,
    },
    {
      question: `Does ${site.name} do plumbing in ${city.name}?`,
      answer: `No. ${site.name} is a directory, not a plumber. We publish directory pages and hold quote requests. A local company calls you when one is assigned.`,
    },
    {
      question: `Are featured listings ads?`,
      answer: `Featured — paid placement spots are paid and labeled on the service pages. We do not invent company names to fill a page.`,
    },
    {
      question: `Where is the quote form?`,
      answer: `On this hub and on every ${city.name} service page. Same fields. We need a name, phone, email, ZIP, service type, timing, and your agreement to the privacy policy.`,
    },
    {
      question: `How do contractors get on this ${city.name} page?`,
      answer: `See the For Pros page. Companies can buy Featured — paid placement ($99/month, self-serve). That is a labeled ad. There is no lead-count SLA. There is no credit-card form on this site.`,
    },
  ];
}

export function metaDescription(city: City, service: Service): string {
  return `${lockedH1(service, city)}. Compare listed companies, read a national cost range, and request a callback. ${site.name} is a directory, not a plumber.`;
}

function joinAnd(names: string[]): string {
  if (names.length === 0) return "";
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}
