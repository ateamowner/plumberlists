import {
  cityPath,
  lockedH1,
  servicePath,
  site,
  withTrailingSlash,
  type City,
  type Service,
} from "@/config/site";
import type { Faq } from "@/lib/content";

export function publisherLocalBusiness(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.legalName,
    alternateName: site.name,
    description: `${site.name} is a directory that publishes city pages for plumbing and routes quote requests to listed companies when an approved listing is live. ${site.name} is not a plumber and does not perform field work.`,
    url: site.url,
    email: site.email,
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: city.state,
      },
    },
    knowsAbout: "Plumbing directory",
  };
}

export function faqPageSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function siteOrigin() {
  return site.url.replace(/\/$/, "");
}

export function organizationId() {
  return `${siteOrigin()}/#organization`;
}

/** Homepage Organization — directory, not a field plumber. No invented address/phone. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId(),
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    email: site.email,
    description: `${site.name} is a lead-generation directory for plumbers. It is not a field plumber and does not perform plumbing work.`,
  };
}

/**
 * Homepage WebSite. SearchAction is omitted — there is no on-site search URL.
 * Publisher points at Organization via @id.
 */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteOrigin()}/#website`,
    name: site.name,
    url: site.url,
    publisher: {
      "@id": organizationId(),
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${withTrailingSlash(item.path)}`,
    })),
  };
}

export function servicePageBreadcrumbs(city: City, service: Service) {
  return breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: `${city.name}, ${city.stateAbbr}`, path: cityPath(city) },
    { name: service.name, path: servicePath(city, service) },
  ]);
}

export function hubBreadcrumbs(city: City) {
  return breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: `${city.name}, ${city.stateAbbr}`, path: cityPath(city) },
  ]);
}

export function servicePageHeadline(city: City, service: Service) {
  return lockedH1(service, city);
}
