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
  const directory = `${site.name} is a directory of local plumbers, not one shop. Call a listed company directly, or send the short form and we will follow up, usually within one business day. Featured (paid placement) spots are labeled.`;

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
    lead: `How to choose a ${service.name.toLowerCase()} company in ${city.name}, the same checks apply whether you found a listing here or a truck on the street.`,
    items: [
      {
        title: "License",
        body: `Ask for the plumbing license the company uses to work in ${city.state}. Write down the number. ${site.name} does not invent license IDs on this page.`,
      },
      {
        title: "Local jobs",
        body: `Ask for recent addresses in ${city.name} or nearby towns, not a generic photo set. ${city.housing} Access changes the job.`,
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
      answer: `No. ${site.name} is a directory. We do not pull permits, open walls, or send a truck. We are not a plumber. Featured (paid placement) spots, when present, are paid and labeled.`,
    },
    {
      question: `Why are some listings marked Featured?`,
      answer: `Those are paid placements. Featured (paid placement) is a labeled upgrade so homeowners can tell it is an ad. Standard listings, when we have them, are not marked as paid upgrades. We do not invent companies to fill empty slots.`,
    },
    {
      question: `What does ${service.name.toLowerCase()} cost in ${city.name}?`,
      answer: `${site.name} does not publish a ${city.name}-specific price. The only dollar range we cite is the national published range: ${guide.line} (${guide.sourceName}). Your job may be outside that range. Use the form and ask the company for a written number.`,
    },
    {
      question: `What happens after I submit the form on this ${city.name} page?`,
      answer: `Your request goes to ${site.leadsEmail}. We review it, usually within one business day, and follow up about next steps. When a local company takes the job, that company calls you directly, not a ${site.name} plumber. You can also call any company listed on this page yourself.`,
    },
    {
      question:
        nearbyNames.length > 0
          ? `Do you cover ${nearbyNames[0]} and other towns near ${city.name}?`
          : `Which towns near ${city.name} have their own ${site.name} pages?`,
      answer:
        nearbyNames.length > 0
          ? `Yes, we keep a separate URL for nearby cities so you can open a real page instead of a comma list. From ${city.name} that includes ${joinAnd(nearbyNames)}. Each of those pages has its own quote form.`
          : `We publish one URL per city. If you do not see your town, send the form with your ZIP and we will hold the request.`,
    },
  ];
}

/** Dayton-only FAQ, answered from the City of Dayton's own registration pages (2026-10-26). */
const DAYTON_REGISTRATION_FAQ: Faq = {
  question: 'Does Dayton require plumbers to be registered?',
  answer: "Yes. The City of Dayton's Division of Building Inspection runs a registration program for plumbing, mechanical (HVAC) and electrical contractors. The City's 2026 Plumbing Contractor Registration Application asks for a certificate of liability insurance naming the City of Dayton, a surety bond for the calendar year, and a copy of the contractor's current State of Ohio plumbing contractor license, and it is renewed every year. The City publishes the active list as Registered Plumbing Contractors (PDF) at daytonohio.gov/691/Registered-Contractors-Lists. Every Dayton company on PlumberLists was checked against that list; ask any plumber for their City registration number before work starts. Sources: https://daytonohio.gov/190/Building-Inspection and https://www.daytonohio.gov/DocumentCenter/View/16908/Plumbing-Contractor-Registration-Form-PDF",
};

export function hubFaqs(city: City): Faq[] {
  const base = baseHubFaqs(city);
  return city.slug === "dayton-oh" ? [...base, DAYTON_REGISTRATION_FAQ] : base;
}

function baseHubFaqs(city: City): Faq[] {
  return [
    {
      question: `What is the ${city.name} ${site.name} hub?`,
      answer: `This is the city index, not a contractor homepage. From here you can open ${city.name} pages for plumbing, drain cleaning, water heater, and emergency plumbing.`,
    },
    {
      question: `Does ${site.name} do plumbing in ${city.name}?`,
      answer: `No. ${site.name} is a directory, not a plumber. We publish directory pages and hold quote requests. A local company calls you when one is assigned.`,
    },
    {
      question: `Are featured listings ads?`,
      answer: `Featured (paid placement) spots are paid and labeled on the service pages. We do not invent company names to fill a page.`,
    },
    {
      question: `Where is the quote form?`,
      answer: `On this hub and on every ${city.name} service page. Same fields. We need a name, phone, email, ZIP, service type, timing, and your agreement to the privacy policy.`,
    },
    {
      question: `How do contractors get on this ${city.name} page?`,
      answer: `See the For Pros page. Companies can buy Featured (paid placement) ($99/month, self-serve). That is a labeled ad. There is no lead-count SLA. There is no credit-card form on this site.`,
    },
  ];
}

/** Homepage FAQs, visible copy and JSON-LD must match verbatim. */
export function homeFaqs(): Faq[] {
  return [
    {
      question: `Is ${site.name} a plumbing company?`,
      answer: `No. ${site.name} is a directory. We do not send a truck, pull permits, or invent company names. Featured (paid placement) spots are paid and labeled.`,
    },
    {
      question: "Why are some listings marked Featured?",
      answer:
        "Featured (paid placement) is a labeled paid upgrade so homeowners can tell it is an ad. It is not exclusive and has no lead-count guarantee.",
    },
    {
      question: "What happens after I submit the form?",
      answer: `We store the request at ${site.leadsEmail} and review it. We only pass a request to a local company we have checked, and we never invent a contractor to fill a page.`,
    },
    {
      question: "Do you invent star ratings or city-specific prices?",
      answer:
        "No. We do not invent company names, star ratings, or city-specific prices. Cost guides cite national published ranges only.",
    },
    {
      question: "Which cities do you cover?",
      answer:
        "Dayton / Miami Valley first, each city has its own URL so internal links do not 404. Open a city page from the homepage list for that market’s form.",
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
