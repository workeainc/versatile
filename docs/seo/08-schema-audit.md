# 08 - Schema Audit

Purpose: keep structured data accurate. Schema should describe real visible content, not invent claims.

## Current Schema Coverage

| Schema type | Current status | Notes |
| --- | --- | --- |
| Organization | Present | Global site schema. |
| LocalBusiness | Present | Should be enriched after real phone/address/social data is confirmed. |
| WebSite | Present | Global site schema. |
| CreativeWork | Present | Project detail pages. |
| Service | Present | Service detail pages. |
| Article | Present | Blog posts. |
| BreadcrumbList | Present | Blog, service, project, and local SEO patterns. |
| FAQPage | Not yet added | Recommended for visible FAQ sections. |
| ImageObject | Not yet added | Add after real images and dimensions exist. |
| Review/AggregateRating | Not added | Do not add until genuine reviews exist and are displayed. |

## Next Schema Improvements

### FAQPage

Add to:

- Service detail pages.
- Local SEO landing pages.

Only add when FAQs are visible on the page.

### LocalBusiness Enrichment

Add after client confirms:

- telephone
- address or service area model
- openingHoursSpecification
- sameAs social links
- priceRange if desired and accurate

### ImageObject

Add after real project images are processed:

- contentUrl
- caption
- width
- height
- creator

## Validation Workflow

Before deployment:

1. Build site.
2. Test representative pages with Google Rich Results Test.
3. Test JSON-LD syntax.
4. Confirm schema claims match visible page content.

## Do Not Add

- Fake review schema.
- AggregateRating without real displayed ratings.
- Product schema for design services.
- LocalBusiness address if the address is not meant to be public.
