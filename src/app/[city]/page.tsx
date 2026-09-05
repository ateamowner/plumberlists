import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Disclosure } from "@/components/disclosure";
import { FaqList } from "@/components/faq-list";
import { NearbyCityLinks } from "@/components/internal-links";
import { JsonLd } from "@/components/json-ld";
import { QuoteFormLoader } from "@/components/quote-form-loader";
import { TrustStrip } from "@/components/trust-strip";
import {
  cities,
  cityPath,
  getCity,
  getService,
  servicePath,
  services,
  site,
} from "@/config/site";
import { hubFaqs } from "@/lib/content";
import {
  faqPageSchema,
  hubBreadcrumbs,
  publisherLocalBusiness,
} from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) return {};

  const title = `Plumbing in ${city.name}, ${city.stateAbbr}`;
  const description = `${site.name} directory hub for ${city.name}. Open plumbing, drain cleaning, water heater, and emergency pages. Not a plumber.`;
  return {
    title,
    description,
    alternates: { canonical: cityPath(city) },
  };
}

export default async function CityHubPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) notFound();

  const plumbing = getService("plumbing");
  const questions = hubFaqs(city);

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <JsonLd
        data={[
          publisherLocalBusiness(city),
          faqPageSchema(questions),
          hubBreadcrumbs(city),
        ]}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: cityPath(city), label: `${city.name}, ${city.stateAbbr}` },
        ]}
      />

      <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:grid-rows-[auto_1fr]">
        <header id="hero" className="lg:col-start-1">
          <p className="text-sm font-medium text-primary">{city.state}</p>
          <h1 className="type-h1 mt-2 font-heading font-semibold tracking-tight">
            Plumbing in {city.name}, {city.stateAbbr}
          </h1>
          <p className="mt-3 rounded-md border border-border bg-muted/60 px-3 py-2 text-sm">
            {site.name} is a directory, not a plumber. Paid spots are labeled.
          </p>
          <p className="mt-4 text-base leading-7">
            This is the {city.name} index on {site.name} — a directory, not a
            contractor website. Open a service page for listings (when we have
            them) and a quote form. Featured spots are paid and labeled. Until
            a listing is live, we still take the request and hold it.
          </p>
          <p className="mt-3 text-base leading-7">{city.setting}</p>
          <p className="mt-3 text-base leading-7">
            {city.housing} {city.winter}
          </p>
          <Disclosure className="mt-4" />
        </header>

        <aside className="lg:col-start-2 lg:row-span-2 lg:self-start lg:sticky lg:top-24">
          {plumbing ? <QuoteFormLoader city={city} service={plumbing} /> : null}
        </aside>

        <div className="lg:col-start-1">
          <TrustStrip />
          <h2 className="mt-8 font-heading text-xl font-semibold">
            Services in {city.name}
          </h2>
          <ul className="mt-3 grid gap-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={servicePath(city, service)}
                  className="block rounded-lg border border-border bg-card px-4 py-3 hover:border-primary"
                >
                  <span className="font-medium">
                    Best {service.name} in {city.name} — {site.year}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {service.blurb}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <FaqList faqs={questions} />
          <NearbyCityLinks city={city} />
        </div>
      </div>
    </article>
  );
}
