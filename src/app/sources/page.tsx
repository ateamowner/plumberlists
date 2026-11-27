import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/config/site";
import { shareMeta } from "@/lib/share-meta";

const PATH = "/sources/";
const title = `Sources, ${site.name}`;
const description =
  "Named sources PlumberLists cites for national cost ranges and the federal water heater tax credit. We do not invent city-specific prices.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: PATH },
  ...shareMeta(title, description, PATH),
};

const sources = [
  {
    name: "Angi, Water heater repair cost 2026",
    href: "https://www.angi.com/articles/how-much-does-it-cost-repair-water-heater.htm",
    usedFor:
      "National water heater repair average and range, common part prices, and the professional tank-flush figure on water-heater pages.",
  },
  {
    name: "IRS, Energy Efficient Home Improvement Credit",
    href: "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit",
    usedFor:
      "The federal water heater tax credit amounts and the rule that it can be claimed only for improvements made through December 31, 2025.",
  },
  {
    name: "Angi 2026 water heater installation guide",
    href: "https://www.angi.com/articles/how-much-does-water-heater-installation-cost.htm",
    usedFor:
      "National tank-style and tankless replacement ranges already cited in the water-heater cost guide.",
  },
];

export default function SourcesPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: PATH, label: "Sources" },
        ]}
      />
      <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight">
        Sources
      </h1>
      <p className="mt-4 text-base leading-7">
        {site.name} cites national published ranges and official guidance. We
        do not invent city-specific prices, star ratings, or license numbers.
        If a page is wrong, use the quote form on this site with the page
        link.
      </p>
      <ul className="mt-8 space-y-4">
        {sources.map((source) => (
          <li
            key={source.href + source.name}
            className="rounded-md border border-border bg-card p-5"
          >
            <a
              href={source.href}
              className="font-medium underline underline-offset-2"
              rel="noopener noreferrer"
              target="_blank"
            >
              {source.name}
            </a>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {source.usedFor}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-sm leading-6">
        <Link href="/how-we-list/" className="underline underline-offset-2">
          How we list companies
        </Link>
      </p>
    </article>
  );
}
