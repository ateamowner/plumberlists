"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export type CityCardItem = {
  slug: string;
  name: string;
  stateAbbr: string;
  href: string;
};

export function CityCardGrid({ cities }: { cities: CityCardItem[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return cities;
    return cities.filter((city) => city.name.toLowerCase().includes(needle));
  }, [cities, query]);

  return (
    <div className="mt-6">
      <label htmlFor="city-search" className="type-label mb-1.5 block font-medium">
        Search cities
      </label>
      <input
        id="city-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Filter by city name"
        autoComplete="off"
        className="h-11 w-full max-w-md rounded-[14px] border border-input bg-card px-3 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm"
      />

      {filtered.length === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">
          No cities match “{query.trim()}”.
        </p>
      ) : (
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((city) => (
            <li key={city.slug}>
              <Link
                href={city.href}
                className="group flex min-h-[8.5rem] flex-col rounded-[14px] border border-border bg-card p-5 shadow-card transition-transform hover:-translate-y-[2px] active:-translate-y-[2px]"
              >
                <h3 className="font-heading text-xl font-semibold tracking-tight">
                  {city.name}, {city.stateAbbr}
                </h3>
                <p className="mt-3">
                  <span className="rounded-full border border-border bg-background px-3 py-1 type-label font-medium">
                    Plumbing
                  </span>
                </p>
                <span className="mt-auto pt-4 text-sm font-medium text-primary">
                  View city
                  <span aria-hidden="true" className="ml-1">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
