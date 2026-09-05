import { site } from "@/config/site";

const NO_INLINE_FORM = new Set(["/privacy", "/request-sent", "/for-pros"]);

function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export function quoteCta(pathname: string | null): {
  href: string;
  label: string;
} {
  const path = normalizePath(pathname ?? "/");

  if (path === "/for-pros") {
    return {
      href: site.featuredCheckoutUrl,
      label: "Subscribe — $99/month",
    };
  }

  const hasInlineForm =
    path === "/" ||
    (/^\/[a-z0-9-]+(?:\/[a-z0-9-]+)?$/.test(path) && !NO_INLINE_FORM.has(path));

  return {
    href: hasInlineForm ? "#quote" : "/#quote",
    label: "Get a quote",
  };
}
