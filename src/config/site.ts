/**
 * PlumberLists site config — brand, domain, inbox, cities, and services.
 * Theme tokens live here so a rebrand is one file.
 *
 * This is a lead-gen directory for plumbers, like TreeList.
 * It is not A Team Contracting doing plumbing.
 */

export const site = {
  name: "PlumberLists",
  legalName: "PlumberLists",
  domain: "plumberlists.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://plumberlists.com",
  email: "owner@ateamcontractings.com",
  leadsEmail: "owner@ateamcontractings.com",
  /** Native HTML POST to Formsubmit. No fetch/XHR, no API key. */
  formAction: "https://formsubmit.co/owner@ateamcontractings.com",
  formRedirect: "https://plumberlists.com/request-sent/",
  /**
   * Live Stripe Payment Link for Featured — paid placement ($99/month).
   * Do not recreate or change this product in Stripe from the site repo.
   */
  featuredCheckoutUrl: "https://buy.stripe.com/6oUcN62yh8PibSJ4Rpdwc0b",
  tagline: "A directory of plumbers. Not a plumber.",
  year: 2026,
  description:
    "Find plumbers in Dayton / Miami Valley. Unique city pages, paid spots labeled, quote requests held until an approved company is assigned.",
  disclosure:
    "PlumberLists is a directory, not a plumber. Paid spots are labeled. We do not invent company names, star ratings, or city-specific prices.",
  hero: {
    h1: "Need a plumber who actually calls back?",
    subline:
      "PlumberLists is a directory, not a contractor. Paid spots are labeled.",
  },
  trustStrip: [
    "No credit card",
    "Paid spots labeled",
    "We hold your request",
  ] as const,
  emptyMatch: {
    headline:
      "No public list here yet — your request still gets held for a match.",
    followUp: "Usually follow up within one business day",
  },
  theme: {
    background: "#F5F1EA",
    foreground: "#13202B",
    card: "#FFFDF9",
    primary: "#0B4F6C",
    primaryForeground: "#FFFDF9",
    muted: "#EDE6DA",
    mutedForeground: "#5C5348",
    accent: "#D4A24C",
    accentForeground: "#3D2E0A",
    border: "#D9D0C2",
    featured: "#8A4B12",
    ring: "#0B4F6C",
    radius: "14px",
    shadow: "0 12px 32px rgba(19,32,43,.10)",
  },
} as const;

export type ListingTier = "standard" | "featured" | "exclusive";

export type CityStatus = "live" | "coming_soon";

export type City = {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  status: CityStatus;
  nearbySlugs: string[];
  parentSlug?: string;
  /** Public geographic context used in copy. Not pricing. */
  setting: string;
  housing: string;
  winter: string;
  utility: string;
};

export type Service = {
  slug: string;
  name: string;
  formValue: string;
  blurb: string;
};

export const services: Service[] = [
  {
    slug: "plumbing",
    name: "Plumbing",
    formValue: "plumbing",
    blurb: "Leaks, fixtures, supply lines, and general residential plumbing.",
  },
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    formValue: "drain cleaning",
    blurb: "Slow or backed-up sinks, tubs, toilets, and main-line clogs.",
  },
  {
    slug: "water-heater",
    name: "Water Heater",
    formValue: "water heater",
    blurb: "Repair or replace a tank or tankless water heater.",
  },
  {
    slug: "emergency-plumbing",
    name: "Emergency Plumbing",
    formValue: "emergency",
    blurb: "Burst pipes, no water, sewage backup, or a leak that cannot wait.",
  },
];

export const formServiceTypes = [
  { value: "plumbing", label: "Plumbing" },
  { value: "drain cleaning", label: "Drain cleaning" },
  { value: "water heater", label: "Water heater" },
  { value: "emergency", label: "Emergency" },
  { value: "other", label: "Other" },
] as const;

export const formTimings = [
  { value: "emergency", label: "Emergency — need someone now" },
  { value: "this_week", label: "This week" },
  { value: "this_month", label: "This month" },
  { value: "planning", label: "Planning — no rush" },
] as const;

export const formPropertyTypes = [
  { value: "", label: "Prefer not to say" },
  { value: "house", label: "House" },
  { value: "duplex", label: "Duplex / townhome" },
  { value: "apartment", label: "Apartment / condo" },
  { value: "commercial", label: "Commercial" },
  { value: "hoa", label: "HOA / common area" },
  { value: "vacant", label: "Vacant lot" },
  { value: "other", label: "Other" },
] as const;

export const cities: City[] = [
  {
    slug: "dayton-oh",
    name: "Dayton",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "kettering-oh",
      "oakwood-oh",
      "beavercreek-oh",
      "huber-heights-oh",
      "riverside-oh",
      "vandalia-oh",
      "trotwood-oh",
      "englewood-oh",
      "miamisburg-oh",
      "west-carrollton-oh",
      "fairborn-oh",
    ],
    setting:
      "Dayton sits in the Miami Valley on older city lots. AES Ohio is the usual electric utility. Pre-war and postwar houses often mix galvanized, copper, and later PVC — access in basements and alleys matters more than a suburban slab.",
    housing:
      "Tight urban lots, shared side yards, and unfinished basements are common in older Dayton neighborhoods.",
    winter:
      "Winter freeze hits exposed basement and crawlspace lines, hose bibs, and poorly insulated supply runs after a polar-vortex night.",
    utility: "AES Ohio",
  },
  {
    slug: "kettering-oh",
    name: "Kettering",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "oakwood-oh",
      "centerville-oh",
      "beavercreek-oh",
      "riverside-oh",
      "miamisburg-oh",
      "west-carrollton-oh",
    ],
    setting:
      "Kettering is a southern Dayton suburb of mid-century ranches and split-levels on AES Ohio. Mature trees and older laterals sit under quiet streets. Garage and crawlspace pipes freeze when insulation is thin.",
    housing:
      "1950s–70s ranches and split-levels with one or two baths and original laterals under the slab or in a short crawlspace.",
    winter:
      "Freeze risk is highest on poorly insulated garage walls, crawlspace supply, and outdoor hose bibs after a hard Miami Valley freeze.",
    utility: "AES Ohio",
  },
  {
    slug: "beavercreek-oh",
    name: "Beavercreek",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "kettering-oh",
      "fairborn-oh",
      "riverside-oh",
      "xenia-oh",
      "centerville-oh",
    ],
    setting:
      "Beavercreek sits east of Dayton near Wright-Patterson Air Force Base. AES Ohio serves most bills. Wider subdivision lots mix with older laterals; winter freeze still finds unheated additions and hose bibs.",
    housing:
      "Later subdivisions and some older laterals near Wright-Patt, with more bathrooms and longer supply runs than a Dayton city lot.",
    winter:
      "Polar-vortex nights freeze hose bibs and unheated additions even on wider lots that look newer from the street.",
    utility: "AES Ohio",
  },
  {
    slug: "centerville-oh",
    name: "Centerville",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "kettering-oh",
      "oakwood-oh",
      "miamisburg-oh",
      "beavercreek-oh",
      "dayton-oh",
    ],
    setting:
      "Centerville and the Washington Township overlap south of Dayton have 1960s–90s colonials on AES Ohio. More bathrooms and longer runs than a Kettering ranch. Ice-season slab and crawlspace leaks show up after a freeze-thaw week.",
    housing:
      "Colonials and two-stories with more fixtures and longer copper or PEX runs than a single-bath ranch.",
    winter:
      "Ice-season leaks show up at slabs, crawlspaces, and exterior walls after a freeze-thaw week.",
    utility: "AES Ohio",
  },
  {
    slug: "huber-heights-oh",
    name: "Huber Heights",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "riverside-oh",
      "vandalia-oh",
      "trotwood-oh",
      "englewood-oh",
      "fairborn-oh",
      "springfield-oh",
    ],
    setting:
      "Huber Heights is a northern Dayton suburb of 1950s–70s brick ranches. AES Ohio is typical. Many original supply lines are aging. Unheated garage utility walls freeze first in a Miami Valley winter.",
    housing:
      "Postwar brick ranches with original supply lines and a utility wall or garage that was never meant to stay warm.",
    winter:
      "Unheated garage utility walls and hose bibs freeze first when AES Ohio customers lose heat or leave a vacant ranch cold.",
    utility: "AES Ohio",
  },
  {
    slug: "fairborn-oh",
    name: "Fairborn",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "riverside-oh",
      "beavercreek-oh",
      "huber-heights-oh",
      "xenia-oh",
    ],
    setting:
      "Fairborn sits next to Wright-Patterson Air Force Base. AES Ohio is the usual utility. Downtown older stock and military-era housing sit on mixed lots. Winter freeze finds older crawlspaces and poorly insulated utility rooms.",
    housing:
      "A mix of older downtown houses and military-adjacent housing with crawlspaces that were never well sealed.",
    winter:
      "Older crawlspaces and utility rooms freeze when a polar-vortex night follows a mild week.",
    utility: "AES Ohio",
  },
  {
    slug: "miamisburg-oh",
    name: "Miamisburg",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "west-carrollton-oh",
      "kettering-oh",
      "centerville-oh",
    ],
    setting:
      "Miamisburg sits on the Great Miami River with hillside lots and a historic downtown. AES Ohio serves most homes. Older clay laterals and tight staging on hillsides matter. Exposed crawlspaces freeze on the bluff side of a lot.",
    housing:
      "Hillside lots, downtown two-stories, and older clay laterals that are harder to reach than a Huber ranch slab.",
    winter:
      "Exposed hillside crawlspaces and river-adjacent basements freeze faster than a flat suburban lot.",
    utility: "AES Ohio",
  },
  {
    slug: "xenia-oh",
    name: "Xenia",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: ["beavercreek-oh", "fairborn-oh", "springfield-oh"],
    setting:
      "Xenia is the Greene County seat, with older housing mixed with post-storm rebuilds. AES Ohio is typical. Wind-driven cold and winter freeze hit older pipes that a newer rebuild does not have.",
    housing:
      "Older stock next to post-storm rebuilds — the plumbing story is not the same on every block.",
    winter:
      "Wind-driven cold and winter freeze hit older pipes; a rebuild next door does not tell you what is in your walls.",
    utility: "AES Ohio",
  },
  {
    slug: "vandalia-oh",
    name: "Vandalia",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "huber-heights-oh",
      "trotwood-oh",
      "englewood-oh",
      "tipp-city-oh",
    ],
    setting:
      "Vandalia sits north of Dayton on the I-70 / airport corridor. AES Ohio is the usual bill. Ranches and tri-levels are simpler geometry than a Centerville colonial. Freeze shows up in low utility rooms and unheated additions.",
    housing:
      "Ranches and tri-levels near the airport corridor, simpler geometry than a two-story colonial.",
    winter:
      "Low utility rooms and unheated additions freeze when a vacant or lightly heated house sits through a Miami Valley cold snap.",
    utility: "AES Ohio",
  },
  {
    slug: "springfield-oh",
    name: "Springfield",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "huber-heights-oh",
      "riverside-oh",
      "fairborn-oh",
      "xenia-oh",
    ],
    setting:
      "Springfield is a Clark County city northeast of Dayton with older city lots and brick two-stories. AES Ohio is common. Unfinished basements and aging laterals are typical. Winter freeze in those basements is a recurring reason people request a plumber.",
    housing:
      "Older city lots, brick two-stories, and unfinished basements with aging laterals.",
    winter:
      "Unfinished Springfield basements freeze when heat is cut back; exposed supply and waste lines are the first to fail.",
    utility: "AES Ohio",
  },
  {
    slug: "tipp-city-oh",
    name: "Tipp City",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "vandalia-oh",
      "huber-heights-oh",
      "trotwood-oh",
      "englewood-oh",
      "dayton-oh",
    ],
    setting:
      "Tipp City is a Miami County town north of Dayton: a canal-era downtown plus later subdivisions. AES Ohio is typical. Historic downtown crawlspaces and newer suburban slabs are different jobs. Winter freeze hits the older downtown stock first.",
    housing:
      "Canal-era downtown houses with crawlspaces sit next to later Miami County subdivisions on slabs.",
    winter:
      "Historic downtown crawlspaces freeze first; later subdivision slabs have a different freeze story (hose bibs and unfinished bonus rooms).",
    utility: "AES Ohio",
  },
  {
    slug: "oakwood-oh",
    name: "Oakwood",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "kettering-oh",
      "centerville-oh",
      "beavercreek-oh",
      "west-carrollton-oh",
    ],
    setting:
      "Oakwood is a small inner-ring city immediately south of Dayton, with tree-lined streets and early 20th-century two-stories. AES Ohio is typical. Tighter lots and older laterals than a later Kettering ranch. Winter freeze hits crawlspaces and hose bibs on that older stock first.",
    housing:
      "Tudor, colonial, and foursquare houses on shaded lots — unfinished basements or short crawlspaces, not a 1990s slab subdivision.",
    winter:
      "Mature shade and older crawlspaces freeze first after a Miami Valley polar-vortex night; hose bibs and poorly insulated supply runs split on the early 20th-century stock.",
    utility: "AES Ohio",
  },
  {
    slug: "west-carrollton-oh",
    name: "West Carrollton",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "miamisburg-oh",
      "kettering-oh",
      "oakwood-oh",
      "centerville-oh",
      "trotwood-oh",
    ],
    setting:
      "West Carrollton sits on the Great Miami River immediately south of Dayton and north of Miamisburg, along the I-75 / Dixie Drive corridor. AES Ohio is typical. Postwar ranches sit next to older downtown stock on flatter river-valley lots than a Miamisburg hillside. Winter freeze hits garage-wall supply and river-adjacent crawlspaces first.",
    housing:
      "1950s–70s ranches and split-levels on flatter river-valley lots than a Miamisburg hillside — unfinished basements or short crawlspaces, not an Oakwood Tudor.",
    winter:
      "River-adjacent crawlspaces and unheated garage walls freeze after a Miami Valley polar-vortex night; hose bibs and poorly insulated supply runs on postwar stock split first.",
    utility: "AES Ohio",
  },
  {
    slug: "trotwood-oh",
    name: "Trotwood",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "vandalia-oh",
      "englewood-oh",
      "huber-heights-oh",
      "tipp-city-oh",
      "west-carrollton-oh",
    ],
    setting:
      "Trotwood is a northwest Dayton inner-ring city along the Salem Avenue / SR 49 corridor. AES Ohio is typical. Postwar ranches and modest two-stories sit on flatter lots than a Miamisburg hillside, older than a later Huber Heights subdivision street. Winter freeze hits unheated garage utility walls and Salem-corridor crawlspaces first.",
    housing:
      "1950s–70s ranches and modest two-stories on the Salem Avenue / SR 49 corridor — original laterals and short crawlspaces, not a canal-era Tipp downtown or an Oakwood Tudor.",
    winter:
      "Unheated garage utility walls and postwar crawlspaces freeze after a Miami Valley polar-vortex night; hose bibs and poorly insulated supply runs on Salem-corridor stock split first.",
    utility: "AES Ohio",
  },
  {
    slug: "englewood-oh",
    name: "Englewood",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "vandalia-oh",
      "trotwood-oh",
      "dayton-oh",
      "huber-heights-oh",
      "tipp-city-oh",
    ],
    setting:
      "Englewood sits northwest of Dayton where I-70 meets the National Road (US-40). AES Ohio is typical. A small older downtown core along US-40 sits next to later subdivision streets toward the interstate — not a Salem Avenue inner-ring ranch town and not an airport-corridor tri-level suburb. Winter freeze hits National Road crawlspaces first, then unheated garage walls on later lots.",
    housing:
      "Older National Road two-stories and modest downtown stock sit next to later I-70-adjacent subdivisions — unfinished basements or short crawlspaces in the core, slabs and garage utility walls on later streets.",
    winter:
      "National Road crawlspaces freeze first after a Miami Valley polar-vortex night; later subdivision lots fail at hose bibs and unheated garage walls rather than a Trotwood Salem-corridor ranch pattern.",
    utility: "AES Ohio",
  },
  {
    slug: "riverside-oh",
    name: "Riverside",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "huber-heights-oh",
      "fairborn-oh",
      "beavercreek-oh",
      "kettering-oh",
      "springfield-oh",
    ],
    setting:
      "Riverside sits on the east and northeast edge of Dayton along the Airway Road / Harshman corridor, next to Wright-Patterson Air Force Base. AES Ohio is typical. Older east-side city lots sit next to later subdivision streets toward the base — not an I-70 / National Road town, not a Salem Avenue inner-ring ranch suburb, and not a south I-75 river-valley city. Winter freeze hits unfinished basements on the older east-side stock first, then hose bibs and unheated garage walls on later lots.",
    housing:
      "Older east-Dayton two-stories and postwar ranches on the Harshman / Airway corridor sit next to later Wright-Patt-adjacent subdivision lots — unfinished basements or short crawlspaces on the older stock, slabs and garage utility walls on later streets.",
    winter:
      "Older east-side basements and crawlspaces freeze first after a Miami Valley polar-vortex night; later subdivision lots fail at hose bibs and unheated garage walls rather than a West Carrollton river-valley or Englewood National Road pattern.",
    utility: "AES Ohio",
  },
  {
    slug: "syracuse-ny",
    name: "Syracuse",
    state: "New York",
    stateAbbr: "NY",
    status: "live",
    nearbySlugs: [],
    setting:
      "Syracuse sits in Central New York south of Lake Ontario, where lake-effect snow is the winter that matters. National Grid is the usual electric bill. Older Eastwood bungalows and Strathmore two-stories sit on city lots with unfinished basements — not a later Cicero or Clay subdivision slab. Winter freeze hits those basements and poorly insulated supply runs after a lake-effect week, then a polar-vortex night.",
    housing:
      "Eastwood bungalows and colonials and Strathmore historic two-stories typically have unfinished basements or short crawlspaces — galvanized or copper under older city lots, not a 1990s Onondaga County slab.",
    winter:
      "Lake-effect weeks from Lake Ontario keep crawlspaces and unheated basement corners cold; hose bibs and poorly insulated supply runs split after a polar-vortex night on that older Eastwood and Strathmore stock.",
    utility: "National Grid",
  },
  {
    slug: "toledo-oh",
    name: "Toledo",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [],
    setting:
      "Toledo sits on the Maumee River in northwest Ohio, with Lake Erie to the north. Toledo Edison (FirstEnergy) is the usual electric bill — not AES Ohio. The Old West End’s late-Victorian two-stories sit next to later suburban streets toward Sylvania and Perrysburg. Winter freeze hits unfinished Old West End basements first, then unheated garage walls on later lots.",
    housing:
      "Old West End Victorians and other pre-war city two-stories have unfinished basements and tight side yards; later northwest-Ohio suburban ranches and colonials sit on slabs or short crawlspaces with garage utility walls.",
    winter:
      "River-adjacent and Old West End basements freeze after a northwest-Ohio polar-vortex night; later suburban lots fail at hose bibs and unheated garage walls rather than a Victorian cellar pattern.",
    utility: "Toledo Edison",
  },
];

export const liveCitySlugs = cities
  .filter((city) => city.status === "live")
  .map((city) => city.slug);

export function getCity(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getNearbyCities(city: City): City[] {
  return city.nearbySlugs
    .map((slug) => getCity(slug))
    .filter((item): item is City => Boolean(item));
}

export function getParentCity(city: City): City | undefined {
  return city.parentSlug ? getCity(city.parentSlug) : undefined;
}

/** Match `trailingSlash: true` so sitemap locs, canonicals, and crumbs do not 301. */
export function withTrailingSlash(path: string): string {
  if (!path || path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

export function cityPath(city: City | string): string {
  const slug = typeof city === "string" ? city : city.slug;
  return withTrailingSlash(`/${slug}`);
}

/** One-line card copy from existing setting text. Do not invent a new city field. */
export function cityOneLiner(city: City): string {
  const first = city.setting.split(/(?<=\.)\s/)[0]?.trim() ?? city.setting;
  return first;
}

export function servicePath(city: City | string, service: Service | string): string {
  const citySlug = typeof city === "string" ? city : city.slug;
  const serviceSlug = typeof service === "string" ? service : service.slug;
  return withTrailingSlash(`/${citySlug}/${serviceSlug}`);
}

export function lockedH1(service: Service, city: City): string {
  return `Best ${service.name} in ${city.name} — ${site.year}`;
}

/** Title tag matches the H1 when it fits in 60 characters. */
export function pageTitle(service: Service, city: City): string {
  const locked = lockedH1(service, city);
  if (locked.length <= 60) return locked;
  const withoutYear = `Best ${service.name} in ${city.name}`;
  if (withoutYear.length <= 60) return withoutYear;
  return `${service.name} in ${city.name} — ${site.year}`;
}

export type CostGuide = {
  line: string;
  sourceName: string;
  sourceUrl: string;
};

export const costGuides: Record<string, CostGuide> = {
  plumbing: {
    line: "Professional plumbing services typically $182–$500, with service-call fees often $150–$250.",
    sourceName: "Angi 2026",
    sourceUrl: "https://www.angi.com/articles/plumber-cost.htm",
  },
  "drain-cleaning": {
    line: "Drain cleaning averages about $246 and typically falls between $147 and $352.",
    sourceName: "Angi",
    sourceUrl: "https://www.angi.com/articles/how-much-does-drain-cleaning-cost.htm",
  },
  "water-heater": {
    line: "Tank-style water heater replacement typically $881–$1,825, average about $1,347. Tankless systems run $1,400–$3,900.",
    sourceName: "Angi 2026",
    sourceUrl:
      "https://www.angi.com/articles/how-much-does-water-heater-installation-cost.htm",
  },
  "emergency-plumbing": {
    line: "Emergency plumber services typically $100–$500 per hour, with holiday calls up to $600.",
    sourceName: "Angi 2026",
    sourceUrl: "https://www.angi.com/articles/emergency-plumber-cost.htm",
  },
};

export const costGuide = costGuides.plumbing;

export const costDisclaimer =
  "These are national published ranges, not a Dayton / Miami Valley survey. PlumberLists does not invent city-specific dollar amounts.";
