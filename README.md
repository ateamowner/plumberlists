# PlumberLists

A lead-generation directory for plumbers in the Dayton / Miami Valley. One niche, one unique page per city. PlumberLists is **not a plumber** and is **not A Team Contracting doing plumbing**. We do not invent company names, phones, licenses, star ratings, or city-specific prices.

The published site is a **static export** on GitHub Pages. There is no Node server and `next start` is not used in production.

Working brand name: **PlumberLists**. Rename it in one file: `src/config/site.ts` (name, domain, email, theme tokens, cities, and services).

Pattern: [ateamowner/treelist](https://github.com/ateamowner/treelist) (static Next export, city routes, FAQ JSON-LD, Formsubmit, Actions Pages). Pages workflow matches [ateamowner/solarlists](https://github.com/ateamowner/solarlists) (`build` + `upload-pages-artifact` + `deploy-pages`, `pages:write`, `id-token:write`).

## Run locally

```bash
npm install
npm run dev
```

Dev app: [http://127.0.0.1:43127](http://127.0.0.1:43127)

Static preview (no Next server):

```bash
npm run build
npm start
```

`npm start` serves the `out/` folder with `serve`. The live site does not run `next start`.

## GitHub Pages

Source repo: [https://github.com/ateamowner/plumberlists](https://github.com/ateamowner/plumberlists)

- Custom domain: https://plumberlists.com (`CNAME` committed as `plumberlists.com` at repo root and `public/CNAME`)
- `public/.nojekyll` is copied into `out/`
- Deploy: `.github/workflows/pages.yml` builds on `main`, uploads `out/`, and deploys with GitHub Pages

Pages source was set to GitHub Actions and the custom domain to plumberlists.com on 2026-08-28.

## Porkbun DNS (do not apply in this repo; do not change treelist.ai)

Keep Porkbun nameservers. Add these records for GitHub Pages ([official docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)):

**Apex `plumberlists.com` — add all four A records**

| Type | Host | Answer |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

**www**

| Type | Host | Answer |
| --- | --- | --- |
| CNAME | `www` | `ateamowner.github.io` |

Do not point `www` at `ateamowner.github.io/plumberlists`. The CNAME target is the GitHub Pages host only.

Remove any Porkbun default parking / URL-forward records on `@` and `www` first.

Do **not** change `treelist.ai` DNS.

## City pages

Live cities (all Miami Valley / Dayton area):

- [/dayton-oh/plumbing](/dayton-oh/plumbing) — Best Plumbing in Dayton — 2026
- [/kettering-oh/plumbing](/kettering-oh/plumbing) — Best Plumbing in Kettering — 2026
- [/beavercreek-oh/plumbing](/beavercreek-oh/plumbing) — Best Plumbing in Beavercreek — 2026
- [/centerville-oh/plumbing](/centerville-oh/plumbing) — Best Plumbing in Centerville — 2026
- [/huber-heights-oh/plumbing](/huber-heights-oh/plumbing) — Best Plumbing in Huber Heights — 2026
- [/fairborn-oh/plumbing](/fairborn-oh/plumbing) — Best Plumbing in Fairborn — 2026
- [/miamisburg-oh/plumbing](/miamisburg-oh/plumbing) — Best Plumbing in Miamisburg — 2026
- [/xenia-oh/plumbing](/xenia-oh/plumbing) — Best Plumbing in Xenia — 2026
- [/vandalia-oh/plumbing](/vandalia-oh/plumbing) — Best Plumbing in Vandalia — 2026
- [/springfield-oh/plumbing](/springfield-oh/plumbing) — Best Plumbing in Springfield — 2026
- [/tipp-city-oh/plumbing](/tipp-city-oh/plumbing) — Best Plumbing in Tipp City — 2026

City hubs: `/dayton-oh`, `/kettering-oh`, `/beavercreek-oh`, `/centerville-oh`, `/huber-heights-oh`, `/fairborn-oh`, `/miamisburg-oh`, `/xenia-oh`, `/vandalia-oh`, `/springfield-oh`, `/tipp-city-oh`.

Related services (unique H1, intro, form, links back): `drain-cleaning`, `water-heater`, `emergency-plumbing`.

Also: `/`, `/privacy`, `/for-pros`, `/request-sent`, and a 404.

## Add a city

1. Open `src/config/site.ts`.
2. Append a `City` to the `cities` array:
   - `slug` (URL segment, like `troy-oh`)
   - `name`, `state`, `stateAbbr`
   - `status`: `"live"` or `"coming_soon"`
   - `nearbySlugs` (other city slugs — those pages must exist)
   - `setting`, `housing`, `winter`, `utility` (public geographic context only — no invented prices)
3. Add unique copy in `src/lib/local-copy.ts` for every city × service pair.
4. If the new city is a neighbor of an existing city, add its slug to that city’s `nearbySlugs`.
5. Rebuild. Next.js prerenders every city × service pair from this list.

Services are in the same file (`services`). The quote form `service_type` values are locked to: `plumbing`, `drain cleaning`, `water heater`, `emergency`, `other`.

## Add a listing

Do not invent real contractors. When you have a real company **and** they are on Anthony’s approved payer list, edit `data/listings.json` (starts as `[]`).

Each object:

| Field | Notes |
| --- | --- |
| `city_slug` | Must match a city slug |
| `service_slug` | Must match a service slug |
| `name` | Real business name only |
| `areas_served` | Array of place names |
| `phone` | Real phone, or `""` |
| `license_id` | Real license, or `""` |
| `blurb` | Short, factual |
| `tier` | `standard` \| `featured` \| `exclusive` |
| `profile_url` | Optional URL, or `""` |

`featured` and `exclusive` render a **paid placement** label. See `data/listings.example.json` for shape only — do not ship the example as a live listing. Rebuild after editing so static pages pick up the file.

Never send a lead to a contractor who is not on the approved payer list. There is no payer list in this repo, so the inbox is `owner@ateamcontractings.com` only.

## Quote form and `LEADS_EMAIL`

The quote form is a **native HTML POST** (no `fetch` / XHR). Action: `https://formsubmit.co/owner@ateamcontractings.com`. Formsubmit emails **LEADS_EMAIL=`owner@ateamcontractings.com`**. Hidden fields: `_next=https://plumberlists.com/request-sent/`, `_subject=PlumberLists quote request`, plus a `_honey` honeypot. Mailto fallback is the same address.

Never invent a Web3Forms (or other) key. Never use `treelist@agentmail.to`.

Fields: name, phone, email, ZIP, service, timing, optional property type, optional message, SMS consent, required privacy. Hidden city/service.

The browser leaves the city page and lands on `/request-sent/`.

There is no credit-card field. Success copy on `/request-sent/`: “Request sent. We received it and will hold it.”

## Cost guide

National published ranges only (not a Dayton survey):

- Plumbing typically $182–$500; service-call fees often $150–$250 ([Angi 2026](https://www.angi.com/articles/plumber-cost.htm))
- Drain cleaning averages about $246, typically $147–$352 ([Angi](https://www.angi.com/articles/how-much-does-drain-cleaning-cost.htm))
- Tank-style water heater replacement typically $881–$1,825, average about $1,347 ([Angi 2026](https://www.angi.com/articles/how-much-does-water-heater-installation-cost.htm))
- Emergency plumber typically $100–$500 per hour, holiday calls up to $600 ([Angi 2026](https://www.angi.com/articles/emergency-plumber-cost.htm))

## SEO

- `sitemap.xml` and `robots.txt` are generated from the city/service config.
- Every city and city × service page includes JSON-LD: `LocalBusiness` for PlumberLists the publisher (not a vendor), `FAQPage` matching the visible FAQs, and `BreadcrumbList`.
- Locked H1 on city × service pages: `Best {Service} in {City} — 2026`.
