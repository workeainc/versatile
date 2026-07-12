# 14 - R2 Media Workflow

Purpose: make project image/video handling simple for the client and SEO-safe for the website.

## Storage Architecture

| Layer | Tool | Purpose |
| --- | --- | --- |
| Website code | GitHub + Vercel | Next.js application and metadata. |
| Original media intake | `media-workspace/` | Local drop folder, ignored by Git. |
| Public optimized media | Cloudflare R2 | Images/videos served to visitors. |
| Temporary media URL | `r2.dev` | Active now for testing and early usage. |
| Future media URL | `media.versatileinterior.com.bd` | Preferred production URL after Cloudflare DNS/zone setup. |

## Current R2 Details

| Field | Value |
| --- | --- |
| Bucket | `versatile-interior-media` |
| Region/location | APAC |
| Public URL | `https://pub-a04264e3824f4e5abf5c1deed24d01b2.r2.dev` |
| Health check | `/system/health.txt` |

## Client Workflow

For every project, create:

```text
media-workspace/projects/{project-slug}/originals/
media-workspace/projects/{project-slug}/notes/
```

Then add:

- Original photos.
- Original short videos.
- Floor plans or drawings if available.
- A text file with project details.

Do not rename or compress originals before adding them.

## Processing Workflow

When media is ready, Codex will:

1. Review all originals.
2. Select hero, cover, gallery, detail, before/after, and process images.
3. Crop and resize for website use.
4. Convert to WebP/AVIF where appropriate.
5. Compress for performance.
6. Rename with SEO filenames.
7. Upload optimized files to R2.
8. Write alt text, captions, and image metadata.
9. Update `src/data/projects.ts`.
10. Update project schema and Open Graph image references.

## R2 Path Convention

Use:

```text
projects/{project-slug}/hero/{seo-file-name}.webp
projects/{project-slug}/cover/{seo-file-name}.webp
projects/{project-slug}/gallery/{seo-file-name}.webp
projects/{project-slug}/details/{seo-file-name}.webp
projects/{project-slug}/video/{seo-file-name}.mp4
```

Example:

```text
projects/courtyard-house/hero/gulshan-courtyard-house-living-room-oak-storage.webp
```

## Public URL Formula

Current:

```text
https://pub-a04264e3824f4e5abf5c1deed24d01b2.r2.dev/projects/courtyard-house/hero/gulshan-courtyard-house-living-room-oak-storage.webp
```

Future:

```text
https://media.versatileinterior.com.bd/projects/courtyard-house/hero/gulshan-courtyard-house-living-room-oak-storage.webp
```

## SEO Metadata For Each Image

| Field | Required |
| --- | --- |
| SEO filename | Yes |
| Alt text | Yes |
| Caption | Recommended |
| Width | Yes |
| Height | Yes |
| Project slug | Yes |
| Room/feature | Yes |
| Location | Recommended |
| Usage | Hero, cover, gallery, detail, before, after, process |

## Video Rules

Use R2 for:

- Short background clips.
- Short project detail clips.
- Lightweight before/after clips.

Use YouTube, Bunny Stream, or Cloudflare Stream for:

- Long walkthroughs.
- High-traffic video campaigns.
- Videos needing adaptive streaming.

## Upload Command Example

```powershell
pnpm dlx wrangler r2 object put versatile-interior-media/projects/courtyard-house/hero/gulshan-courtyard-house-living-room-oak-storage.webp --file media-workspace/projects/courtyard-house/processed/gulshan-courtyard-house-living-room-oak-storage.webp --content-type image/webp --cache-control "public, max-age=31536000, immutable" --remote
```

## Important Production Note

The current `r2.dev` URL works and has been verified, but Cloudflare recommends custom domains for production. The future target is:

```text
media.versatileinterior.com.bd
```

That requires adding `versatileinterior.com.bd` to the same Cloudflare account as the R2 bucket or configuring an approved partial/CNAME setup.
