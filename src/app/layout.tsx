import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/config/site";
import "./globals.css";

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — plumber directory`,
    template: `%s`,
  },
  description: site.description,
  applicationName: site.name,
};

const themeVars = Object.entries({
  "--background": site.theme.background,
  "--foreground": site.theme.foreground,
  "--card": site.theme.card,
  "--card-foreground": site.theme.foreground,
  "--primary": site.theme.primary,
  "--primary-foreground": site.theme.primaryForeground,
  "--secondary": site.theme.muted,
  "--secondary-foreground": site.theme.foreground,
  "--muted": site.theme.muted,
  "--muted-foreground": site.theme.mutedForeground,
  "--accent": site.theme.accent,
  "--accent-foreground": site.theme.accentForeground,
  "--border": site.theme.border,
  "--input": site.theme.border,
  "--ring": site.theme.ring,
  "--destructive": "#8b1e1e",
})
  .map(([key, value]) => `${key}: ${value}`)
  .join("; ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        {/*
          Webmaster verification placeholders — do not invent codes.
          Bing Webmaster Tools (msvalidate.01): Anthony must add
          plumberlists.com in Bing Webmaster Tools, then replace this
          comment with <meta name="msvalidate.01" content="PASTE_CODE" />.
          Google site verification: HTML file is already at
          /googled3ae2edf58b5b2f8.html. Add
          <meta name="google-site-verification" content="PASTE_CODE" />
          only after Anthony pastes a real Search Console code.
        */}
      </head>
      <body className="flex min-h-full flex-col bg-background pb-20 text-foreground md:pb-0">
        <style>{`:root { ${themeVars}; }`}</style>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileStickyCta />
      </body>
    </html>
  );
}
