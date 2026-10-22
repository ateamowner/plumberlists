import type { MetadataRoute } from "next";
import {
  cities,
  cityPath,
  servicePath,
  services,
  site,
  withTrailingSlash,
} from "@/config/site";

import { getListings } from "@/lib/listings";
import { MIN_INDEXABLE_LISTINGS } from "@/config/site";
import {
  cityPageLastmod,
  homePageLastmod,
  servicePageLastmod,
  staticPageLastmod,
} from "@/lib/lastmod";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/privacy/", "/for-pros/", "/how-we-list/"].map((path) => ({
    url: `${site.url}${withTrailingSlash(path)}`,
    lastModified:
      path === "/"
        ? homePageLastmod()
        : staticPageLastmod(`src/app${path}page.tsx`),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.4,
  }));

  const cityRoutes = cities.flatMap((city) => [
    {
      url: `${site.url}${cityPath(city)}`,
      lastModified: cityPageLastmod(
        city.slug,
        services.map((service) => service.slug)
      ),
      changeFrequency: "weekly" as const,
      priority: city.status === "live" ? 0.8 : 0.4,
    },
    ...services
      .filter(
        (service) =>
          getListings(city.slug, service.slug).length >= MIN_INDEXABLE_LISTINGS
      )
      .map((service) => ({
      url: `${site.url}${servicePath(city, service)}`,
      lastModified: servicePageLastmod(city.slug, service.slug),
      changeFrequency: "weekly" as const,
      priority: city.status === "live" && service.slug === "plumbing" ? 0.9 : 0.5,
    })),
  ]);

  return [...staticRoutes, ...cityRoutes];
}
