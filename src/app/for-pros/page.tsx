import type { Metadata } from "next";
import Link from "next/link";
import { Disclosure } from "@/components/disclosure";
import { liveCitySlugs, servicePath, site } from "@/config/site";
import { shareMeta } from "@/lib/share-meta";

const title = `For Plumbing Companies: Featured Listings on ${site.name}`;
const description =
  `How contractors buy Featured (paid placement) on ${site.name}: $99/month, self-serve on Stripe. Featured puts your business in the top spot on every page you're listed on. No lead guarantee.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/for-pros/" },
  ...shareMeta(title, description, "/for-pros/"),
};

export default function ForProsPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="font-heading text-4xl font-semibold tracking-tight">
        For plumbing companies
      </h1>
      <Disclosure className="mt-4" />
      <p className="mt-4 text-lg leading-8">
        {site.name} sells Featured (paid placement) on city × service URLs.
        Homeowners see a directory, not a fake contractor homepage. You are not
        buying a website. You are buying a labeled place on a page people
        already use to request a callback.
      </p>

      <h2 className="mt-10 font-heading text-2xl font-semibold">
        What you can buy
      </h2>
      <div className="mt-4 rounded-lg border border-border bg-card p-4">
        <p className="font-semibold">Featured (paid placement)</p>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          $99/month Featured puts your business in the top spot on every page
          you&apos;re listed on: each city and service page on {site.name}
          that lists your company. It is labeled “Featured (paid placement)” so
          homeowners can tell it is an ad. If another company on the same page
          is also Featured, Featured listings share the top of that page, above
          every standard listing.
        </p>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          Featured does not change where any page ranks in Google and does not
          add you to pages you are not listed on. Leads are not guaranteed: we
          do not promise any number of calls, quote requests, or jobs.
        </p>
        <p className="mt-3 text-sm leading-6">
          Self-serve: $99/month. Checkout is handled securely by Stripe; this
          site never sees or stores your card number.
        </p>
        <a
          href={site.featuredCheckoutUrl}
          className="mt-3 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-4 text-base font-medium text-primary-foreground hover:bg-primary/90"
        >
          Subscribe, $99/month
        </a>
      </div>

      <h2 className="mt-10 font-heading text-2xl font-semibold">
        How leads work
      </h2>
      <p className="mt-3 leading-7">
        The form requires phone, email, ZIP, service type, and timing first.
        Optional name, property type, and message sit behind More details. SMS
        and privacy consent stay required and visible. Hidden fields carry page
        URL, city, state, service, gclid, and utm tags. The homeowner form
        never asks for a card number.
      </p>
      <p className="mt-3 leading-7">
        Every quote request posts to Formsubmit at {site.leadsEmail}, and we
        review each one. Companies listed on the page a homeowner used are the
        first we contact about that job. We never invent a contractor to fill a
        page, and we never send a lead to a company we have not checked.
      </p>

      <h2 className="mt-10 font-heading text-2xl font-semibold">Pricing</h2>
      <p className="mt-3 leading-7">
        Featured (paid placement) is $99/month, self-serve.{" "}
        <a href={site.featuredCheckoutUrl} className="underline underline-offset-2">
          Subscribe, $99/month
        </a>
        . Checkout is handled securely by Stripe; this site never sees or
        stores your card number. Featured puts your business in the top spot
        on every page you&apos;re listed on. Leads are not guaranteed.
      </p>
      <p className="mt-3 leading-7">
        Billing questions:{" "}
        <a href={`mailto:${site.email}`} className="underline underline-offset-2">
          {site.email}
        </a>
        .
      </p>

      <h2 className="mt-10 font-heading text-2xl font-semibold">Live URLs</h2>
      <ul className="mt-3 space-y-2">
        {liveCitySlugs.map((slug) => (
          <li key={slug}>
            <Link
              href={servicePath(slug, "plumbing")}
              className="underline underline-offset-2"
            >
              {servicePath(slug, "plumbing")}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
