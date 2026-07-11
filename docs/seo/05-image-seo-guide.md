# 05 - Image SEO Guide

Purpose: keep real project photography consistent, fast, searchable, and useful for conversion.

## Image Pipeline

```text
Original photo
-> select best use
-> crop
-> resize
-> compress
-> WebP/AVIF
-> SEO filename
-> alt text
-> caption
-> structured data reference
```

## Folder Convention

Use:

```text
src/media/projects/{project-slug}/originals/
src/media/projects/{project-slug}/processed/
```

Example:

```text
src/media/projects/courtyard-house/originals/
src/media/projects/courtyard-house/processed/
```

## Filename Convention

Use lowercase descriptive filenames:

```text
dhaka-courtyard-house-living-room-oak-storage.webp
gulshan-residential-interior-dining-room-lighting.webp
banani-office-interior-meeting-room-acoustic-panels.webp
```

Avoid:

```text
IMG_0012.jpg
final-final-photo.png
livingroom.webp
```

## Required Image Outputs

For each project:

| Asset | Recommended use |
| --- | --- |
| Hero image | Project detail hero and Open Graph candidate. |
| Cover image | Project listing card or editorial preview. |
| Gallery images | Detail page story sections. |
| Detail shots | Materials, lighting, joinery, styling. |
| Social/OG crop | Sharing previews and social posts. |

## Alt Text Formula

Use:

```text
[Room or feature] with [notable material/design decision] in [project name], [location]
```

Example:

```text
Open-plan living room with oak storage wall in Courtyard House, Gulshan
```

Do not stuff keywords. Alt text should describe the image.

## Caption Formula

Use captions only when they add useful context:

```text
The living area uses concealed storage and filtered daylight to support family hosting without visual clutter.
```

## Performance Rules

- Use `next/image`.
- Hero images can use priority loading.
- Gallery and below-fold images should lazy load naturally.
- Avoid uploading huge uncompressed images into production paths.
- Keep visual quality high enough for a premium portfolio.

## Structured Data

When real project images are available, add them to project structured data as image arrays. Add ImageObject only when captions, dimensions, and original project ownership are clear.
