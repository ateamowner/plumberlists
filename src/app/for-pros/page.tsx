import type { Metadata } from "next";
import Link from "next/link";
import { Disclosure } from "@/components/disclosure";
import { liveCitySlugs, servicePath, site } from "@/config/site";

export const metadata: Metadata = {
  title: `For plumbing companies — ${site.name}`,
  description: `How contractors buy Featured — paid placement on ${site.name}. $99/month self-serve. Not exclusive. No lead-count SLA. No credit card on the homeowner form.`,
  alternates: { canonical: "/for-pros/" },
};

export default function ForProsPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="font-heading text-4xl font-semibold tracking-tight">
        For plumbing companies
      </h1>
      <Disclosure className="mt-4" />
      <p className="mt-4 text-lg leading-8">
        {site.name} sells Featured — paid placement on city × service URLs.
        Homeowners see a directory, not a fake contractor homepage. You are not
        buying a website. You are buying a labeled place on a page people
        already use to request a callback.
      </p>

      <h2 className="mt-10 font-heading text-2xl font-semibold">
        What you can buy
      </h2>
      <div className="mt-4 rounded-lg border border-border bg-card p-4">
        <p className="font-semibold">Featured — paid placement</p>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          A paid upgrade. It is visually labeled “Featured — paid placement”
          so homeowners can tell it is an ad. Featured sits above standard.
          This is not exclusive. There is no exclusive SLA and no lead-count
          guarantee.
        </p>
        <p className="mt-3 text-sm leading-6">
          Self-serve: $99/month. Checkout is on Stripe, not on this page.
        </p>
        <a
          href={site.featuredCheckoutUrl}
          className="mt-3 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-4 text-base font-medium text-primary-foreground hover:bg-primary/90"
        >
          Subscribe — $99/month
        </a>
      </div>

      <h2 className="mt-10 font-heading text-2xl font-semibold">
        How leads work
      </h2>
      <p className="mt-3 leading-7">
        The form collects name, phone, email, ZIP, service type, timing, optional
        property type and message, SMS consent, and required privacy consent.
        Hidden fields carry page URL, city, state, and service. There is no
        credit-card field on {site.name}.
      </p>
      <p className="mt-3 leading-7">
        Every quote posts to Formsubmit at {site.leadsEmail}. We persist every
        request. If a listing is live for that URL and that company is on the
        approved payer list, we can route it. If the URL is empty — as it is
        today — we still take the request and hold it. We do not invent a
        contractor to fill the gap, and we do not send a lead to anyone who is
        not on the approved list.
      </p>

      <h2 className="mt-10 font-heading text-2xl font-semibold">Pricing</h2>
      <p className="mt-3 leading-7">
        Featured — paid placement is $99/month, self-serve.{" "}
        <a href={site.featuredCheckoutUrl} className="underline underline-offset-2">
          Subscribe — $99/month
        </a>
        . Checkout is the live Stripe Payment Link for this product; we do not
        take a card number on this site. Featured is not exclusive and has no
        lead-count SLA.
      </p>
      <p className="mt-3 leading-7">
        Do not send card numbers to the homeowner form.
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
