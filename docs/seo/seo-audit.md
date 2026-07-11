# SEO Phase 2 - Organic Growth System Audit

Audit date: 2026-07-11  
Site: https://versatileinterior.com.bd  
Scope: Next.js codebase, sitemap/robots structure, metadata patterns, content inventory, internal linking data, schema usage, images, analytics readiness, and launch SEO risks.

## Executive Summary

Versatile Interior has a strong technical SEO foundation for a small business portfolio site. The site has clean route architecture, indexable static pages, canonical metadata, robots.txt, sitemap.xml, local SEO landing pages, blog content, project detail pages, service detail pages, and structured data.

The biggest SEO risks are no longer hidden technical problems. They are authenticity and trust signals: placeholder business contact details, stock photography, incomplete Google ecosystem setup, limited real project content, and the absence of verified local authority signals such as Google Business Profile reviews and citations.

## Critical Issues

No critical code-level blocker remains after the latest fixes.

Completed during this audit:

- Added a Vercel canonical redirect from `www.versatileinterior.com.bd` to `versatileinterior.com.bd`.
- Normalized sitemap/canonical domain usage to `https://versatileinterior.com.bd`.
- Fixed stale project data that referenced `knot-residence`, which did not exist as a project page.
- Updated sitemap `lastModified` values so they are stable and content-aware instead of regenerating as the current date every time.
- Added `dynamicParams = false` to generated dynamic routes so unpublished project, service, blog, category, and tag URLs return proper 404 responses instead of soft 404 pages.

## High Priority

### 1. Replace Placeholder Business Contact Data

Evidence:

- `src/data/contact.ts` contains `+880 1700 000000`.
- `src/data/contact.ts` contains generic social URLs: `https://instagram.com`, `https://linkedin.com`, `https://behance.net`.
- The address may also need factual verification before being used in stronger LocalBusiness schema.

Why it matters:

Search engines and users compare website contact data with Google Business Profile, citations, social profiles, and map listings. Inconsistent or placeholder NAP data can weaken local trust.

Recommended action:

- Confirm official business phone number.
- Confirm official email.
- Confirm exact business address or service-area-only preference.
- Confirm real Instagram, Facebook, LinkedIn, Behance, or portfolio URLs.
- Only after verification, enrich `LocalBusiness` schema with `telephone`, `address`, `openingHoursSpecification`, and `sameAs`.

Impact: High  
Effort: Low once details are available.

### 2. Complete Google Analytics 4 and Google Tag Manager

Evidence:

- The code already supports `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
- The code already supports `NEXT_PUBLIC_GTM_ID`.
- No IDs are currently configured in source.

Why it matters:

Search Console tells us search visibility. GA4/GTM tells us visitor behavior, conversion paths, consultation form activity, phone clicks, email clicks, WhatsApp clicks, and page engagement.

Recommended action:

- Create a GA4 property.
- Create a GTM container.
- Add IDs to Vercel environment variables.
- Keep event tracking in code and route future marketing tags through GTM where practical.

Impact: High  
Effort: Medium because account setup is outside code.

### 3. Complete Google Business Profile

Evidence:

- The website has local SEO pages, but local authority signals must be built outside the codebase.

Why it matters:

For searches like "interior design Dhaka", "interior designer near me", "restaurant interior design Dhaka", and "office interior design Dhaka", Google Business Profile is often more important than another on-site tweak.

Recommended action:

- Create or complete the Google Business Profile.
- Add exact categories, services, service areas, opening hours, website, phone, logo, cover image, and real project photos.
- Start collecting genuine client reviews.
- Reply to every review.

Impact: Very High  
Effort: Medium.

### 4. Replace Stock Images With Real Project Photography

Evidence:

- Many project, service, local SEO, studio, and blog images still use `images.unsplash.com`.

Why it matters:

Stock images can make a premium studio look less credible. Real project images improve trust, conversion, image SEO, local relevance, and social sharing quality.

Recommended action:

- For each real project, add original photos under `src/media/projects/{project-slug}/`.
- Generate optimized WebP/AVIF derivatives.
- Use descriptive filenames, alt text, captions, dimensions, priority loading for hero images, and structured data image references.

Impact: High  
Effort: Medium to High depending on photo availability.

## Medium Priority

### 5. Expand Thin Project SEO Descriptions

Evidence:

- Some project SEO descriptions are strong.
- `Launch Gallery` has a very short description: "A temporary event and exhibition design project."

Why it matters:

Project detail pages should win trust. Thin descriptions reduce click appeal and structured data richness.

Recommended action:

- Rewrite each project SEO title and description around category, location, result, and design differentiator.
- Add real project story details when client-approved.

Impact: Medium  
Effort: Low.

### 6. Improve Service Metadata Specificity

Evidence:

- Some service descriptions are broad, for example "Commercial workplace and office interior design services by Versatile Interior."

Why it matters:

Service pages are commercial-intent pages. Their metadata should include location and service intent where natural.

Recommended action:

- Tune service metadata for searches such as:
  - Residential interior design Dhaka
  - Office interior design Dhaka
  - Restaurant interior design Dhaka
  - Showroom interior design Bangladesh

Impact: Medium  
Effort: Low.

### 7. Add FAQ Schema Where FAQ Content Already Exists

Evidence:

- Service pages and local SEO pages include visible FAQ sections.
- Structured data currently covers Organization, LocalBusiness, WebSite, Service, Article, CreativeWork, and BreadcrumbList.

Why it matters:

FAQ schema can help search engines understand page content when the FAQ is visible and factual.

Recommended action:

- Add `FAQPage` schema to service pages and local SEO pages where FAQs are displayed.
- Avoid FAQ schema on pages where questions are thin or promotional.

Impact: Medium  
Effort: Medium.

### 8. Validate Heading Hierarchy Per Page

Evidence:

- Page components generally use one main hero heading and supporting section headings.
- A full rendered HTML crawl should still verify one `h1` per route and no skipped heading patterns after hydration.

Why it matters:

Clean headings improve accessibility and help search engines understand the page structure.

Recommended action:

- Run a rendered crawl with Playwright or Screaming Frog after deployment.
- Flag pages with missing/duplicate H1s.

Impact: Medium  
Effort: Medium.

### 9. Add a Keyword Map Before More Articles

Evidence:

- Current blog topics are sensible, but still based on assumed demand.

Why it matters:

Publishing without a keyword map can create scattered content. Each important query should have one clear target page.

Recommended action:

Create `/docs/seo/keyword-map.md` with:

| Keyword | Intent | Target Page | Priority |
| --- | --- | --- | --- |
| interior design company in Dhaka | Commercial | Homepage or Dhaka local page | High |
| residential interior design Dhaka | Service | Residential service page | High |
| office interior design Dhaka | Service | Office local page | High |
| restaurant interior design Dhaka | Service | Restaurant local page | High |
| showroom interior design Bangladesh | Service | Showroom local page | Medium |
| interior design cost Bangladesh | Informational | Blog article | Medium |

Impact: Medium to High  
Effort: Medium.

## Low Priority

### 10. Add ImageObject Schema After Real Images Exist

Evidence:

- Current images are mostly remote stock images.

Why it matters:

ImageObject schema is more valuable when images are original, descriptive, and tied to real projects.

Recommended action:

- Wait until real project photos are added.
- Add image dimensions, captions, and license/creator fields where appropriate.

Impact: Low now, higher later.

### 11. Review Open Graph Images After Brand Photography Is Added

Evidence:

- Global and blog Open Graph image routes exist.

Why it matters:

Social previews should show real brand/project visuals when available.

Recommended action:

- Replace generic OG visuals with project-specific imagery for top pages.

Impact: Low to Medium  
Effort: Medium.

### 12. Monitor Core Web Vitals After Real Traffic

Evidence:

- Build is static for most routes and uses `next/image`.
- Real field data is not available yet.

Why it matters:

Lab tests are useful, but field data from real users is more reliable.

Recommended action:

- Monitor Search Console Core Web Vitals after launch.
- Use PageSpeed Insights once real image assets are in place.

Impact: Medium later  
Effort: Low recurring.

## Technical Checks Completed

- `robots.txt` exists and points to the canonical sitemap.
- `sitemap.xml` includes 40 canonical URLs.
- `www` now redirects permanently to non-www.
- Canonical URL fallbacks use `https://versatileinterior.com.bd`.
- Project/service/blog dynamic routes generate metadata.
- Blog, project, service, and local SEO pages have structured data patterns.
- Service project references now point only to existing project slugs.
- Sitemap timestamps are stable and no longer generated as "now" for every URL.
- Unknown dynamic route slugs are explicitly blocked from being generated on demand.

## Next Milestone

Milestone 2 should be keyword mapping, not another UI pass.

Recommended next file:

`/docs/seo/keyword-map.md`

After that:

1. `/docs/seo/content-gap-analysis.md`
2. `/docs/seo/internal-linking-plan.md`
3. Real image processing and project content migration.
4. GA4/GTM/Google Business Profile completion.

## Data Needed From Client

- Official business phone number.
- Official email address.
- Exact address or service-area-only preference.
- Google Business Profile access/status.
- Real social profile URLs.
- Real project names, locations, dates, areas, services, descriptions, and photos.
- Client permission level for published project names and photography.
