import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CostGuide } from "@/components/cost-guide";
import { FaqList } from "@/components/faq-list";
import { FeaturedPath } from "@/components/featured-path";
import { HowToChoose } from "@/components/how-to-choose";
import { NearbyCityLinks, RelatedServiceLinks } from "@/components/internal-links";
import { JsonLd } from "@/components/json-ld";
import { ListingsBlock } from "@/components/listings-block";
import { QuoteFormLoader } from "@/components/quote-form-loader";
import {
  cities,
  cityPath,
  getCity,
  getService,
  lockedH1,
  pageTitle,
  servicePath,
  services,
  site,
} from "@/config/site";
import {
  costGuideCopy,
  faqs,
  howToChoose,
  introParagraphs,
  metaDescription,
} from "@/lib/content";
import { getListings } from "@/lib/listings";
import {
  faqPageSchema,
  publisherLocalBusiness,
  servicePageBreadcrumbs,
} from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.flatMap((city) =>
    services.map((service) => ({
      city: city.slug,
      service: service.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCity(citySlug);
  const service = getService(serviceSlug);
  if (!city || !service) return {};

  const title = pageTitle(service, city);
  const description = metaDescription(city, service);
  return {
    title,
    description,
    alternates: { canonical: servicePath(city, service) },
    openGraph: {
      title,
      description,
      url: servicePath(city, service),
      siteName: site.name,
      type: "website",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCity(citySlug);
  const service = getService(serviceSlug);
  if (!city || !service) notFound();

  const heading = lockedH1(service, city);
  const intro = introParagraphs(city, service);
  const choose = howToChoose(city, service);
  const cost = costGuideCopy(city, service);
  const questions = faqs(city, service);
  const listings = getListings(city.slug, service.slug);

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <JsonLd
        data={[
          publisherLocalBusiness(city),
          faqPageSchema(questions),
          servicePageBreadcrumbs(city, service),
        ]}
      />

      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: cityPath(city), label: `${city.name}, ${city.stateAbbr}` },
          { href: servicePath(city, service), label: service.name },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-[minmax(0,1fr)_22rem] md:grid-rows-[auto_1fr]">
        <header id="hero" className="md:col-start-1">
          <h1 className="type-h1 font-heading font-semibold tracking-tight md:text-balance">
            {heading}
          </h1>
          <p className="mt-3">
            {site.name} is a directory, not a plumber. Paid spots are labeled.
          </p>
        </header>

        <aside className="md:col-start-2 md:row-span-2 md:self-start md:sticky md:top-24">
          <QuoteFormLoader city={city} service={service} />
          {listings.length === 0 ? <FeaturedPath /> : null}
        </aside>

        <div className="md:col-start-1">
          {intro.map((paragraph) => (
            <p key={paragraph} className="mt-4">
              {paragraph}
            </p>
          ))}
          <HowToChoose content={choose} />
          <CostGuide content={cost} />
          <FaqList faqs={questions} />
          <ListingsBlock listings={listings} />
          <RelatedServiceLinks city={city} current={service} />
          <NearbyCityLinks city={city} serviceSlug={service.slug} />
        </div>
      </div>
    </article>
  );
}
