import type { Metadata } from "next";
import Link from "next/link";
import { Disclosure } from "@/components/disclosure";
import { ForProsBand } from "@/components/for-pros-band";
import { QuoteFormLoader } from "@/components/quote-form-loader";
import { TrustStrip } from "@/components/trust-strip";
import {
  cities,
  cityOneLiner,
  cityPath,
  liveCitySlugs,
  servicePath,
  services,
  site,
} from "@/config/site";

export const metadata: Metadata = {
  title: `${site.name} — plumber directory`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const live = cities.filter((city) => liveCitySlugs.includes(city.slug));

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <section id="hero" className="grid gap-8 md:grid-cols-[minmax(0,1fr)_22rem]">
        <div>
          <p className="type-label font-medium text-primary">{site.tagline}</p>
          <h1 className="type-h1 mt-2 font-heading font-semibold tracking-tight md:text-balance">
            Find a plumber by city. Request a quote. Skip the fake shop page.
          </h1>
          <p className="mt-4 max-w-2xl">
            {site.name} is a lead-generation directory for plumbers in the
            Dayton / Miami Valley. We are not a plumber. We do not own a van,
            and we do not invent company names, star ratings, or city-specific
            prices. Each city has its own URL. Featured spots are paid and
            labeled.
          </p>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Homeowners use the form. Until a listing goes live on a URL, we
            still take the request and hold it. Companies buy Featured on the{" "}
            <Link href="/for-pros/" className="underline underline-offset-2">
              For pros
            </Link>{" "}
            page — that path stays below, not in this form.
          </p>
          <Disclosure className="mt-4" />
        </div>
        <QuoteFormLoader />
      </section>

      <div className="mt-10">
        <TrustStrip />
      </div>

      <section id="cities" className="mt-14">
        <h2 className="font-heading text-2xl font-semibold">Live cities</h2>
        <p className="mt-2 max-w-2xl text-base text-muted-foreground">
          Dayton / Miami Valley first. Every city below is a real page so
          internal links do not 404.
        </p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {live.map((city) => (
            <li
              key={city.slug}
              className="flex flex-col rounded-lg border border-border bg-card p-5"
            >
              <h3 className="font-heading text-xl font-semibold">
                <Link href={cityPath(city)} className="hover:underline">
                  {city.name}, {city.stateAbbr}
                </Link>
              </h3>
              <p className="mt-2 flex-1 truncate text-muted-foreground">
                {cityOneLiner(city)}
              </p>
              <p className="mt-4">
                <Link
                  href={servicePath(city, "plumbing")}
                  className="font-medium underline underline-offset-2"
                >
                  Best Plumbing in {city.name} — {site.year}
                </Link>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <ForProsBand />
      </section>

      <section className="mt-14">
        <h2 className="font-heading text-2xl font-semibold">
          What is on a city page
        </h2>
        <ol className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            "A locked H1: Best {Service} in {City} — 2026",
            "A disclosure that this is a directory, paid spots are labeled, and we are not a plumber",
            "How to choose: license, local jobs, written scope, reviews with addresses, who shows up, warranty, emergency vs planned",
            "National cost ranges cited to Angi — not a local survey",
            "Five FAQs that match the on-page questions in schema",
            "Listings from a data file, or an empty state with the quote form",
          ].map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border bg-card px-4 py-3 text-sm leading-6"
            >
              {item}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="font-heading text-2xl font-semibold">Services we index</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.slug}>
              <span className="font-medium">{service.name}.</span>{" "}
              <span className="text-muted-foreground">{service.blurb}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
