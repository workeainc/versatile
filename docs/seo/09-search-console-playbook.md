# 09 - Search Console Playbook

Purpose: use real search data to guide future SEO work instead of guessing.

## Weekly Checks For First 3 Months

- Sitemap status.
- Indexing issues.
- Pages discovered but not indexed.
- Queries with impressions.
- Pages with impressions but no clicks.
- Core Web Vitals warnings.

## Monthly Analysis

Export or review:

- Top queries by impressions.
- Top queries by clicks.
- Queries ranking positions 8-20.
- Pages with high impressions and low CTR.
- Pages with declining clicks.
- New indexed pages.

## Decision Rules

| Signal | Action |
| --- | --- |
| High impressions, low CTR | Improve title and meta description. |
| Ranking positions 8-20 | Add content depth, internal links, project proof. |
| Indexed but no impressions | Check intent, internal links, and keyword target. |
| Crawled/discovered but not indexed | Improve content uniqueness and internal links. |
| Core Web Vitals warning | Audit images, scripts, layout shift, and mobile performance. |

## Sitemap Handling

Canonical sitemap:

```text
https://versatileinterior.com.bd/sitemap.xml
```

Do not submit the `www` sitemap. `www` redirects to the canonical non-www domain.

## Report Template

Monthly Search Console Summary:

- Total clicks:
- Total impressions:
- Average CTR:
- Average position:
- Top 5 queries:
- Top 5 landing pages:
- Biggest opportunity:
- Issue to fix this month:
- Content to publish next:
