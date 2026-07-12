# 12 - SEO Project Template

Purpose: every real project should become a search asset, not only a portfolio gallery. This template keeps future project pages consistent, useful, and grounded in real experience.

Use this when the client provides a new project folder under:

```text
src/media/projects/{project-slug}/
```

## Project Identity

| Field | Notes |
| --- | --- |
| Project name | Public-facing name. |
| Slug | Lowercase URL slug, for example `gulshan-family-apartment`. |
| Category | Residential, Commercial, Restaurant, Showroom, Events. |
| Location | Area/city, for example Gulshan, Dhaka. |
| Area | Sq ft or approximate size. |
| Completion date | Month/year or full date if approved. |
| Duration | Design and execution duration. |
| Client type | Private residence, restaurant group, retail brand, office, etc. |
| Publication permission | Full name, anonymous, partial details, or private. |

## Strategic SEO Target

| Field | Notes |
| --- | --- |
| Primary keyword | Example: `residential interior design Gulshan`. |
| Secondary keywords | Example: `apartment interior design Dhaka`, `custom storage design Bangladesh`. |
| Search intent | Usually commercial/consideration. |
| Target funnel stage | Consideration or decision. |
| Related service page | Example: `/services/residential`. |
| Related local page | Example: `/interior-design-gulshan`. |
| Related articles | Cost, material, lighting, renovation, or planning articles. |

## Story Structure

| Section | Required content |
| --- | --- |
| Client goal | What the client wanted, in plain language. |
| Site condition | Existing constraints, light, layout, services, structure, budget, timeline. |
| Design challenge | The main problem the design had to solve. |
| Concept | The guiding design idea. |
| Planning decisions | Layout, circulation, storage, zoning, privacy, service movement. |
| Material strategy | Wood, stone, paint, metal, fabric, flooring, maintenance decisions. |
| Lighting strategy | Ambient, task, accent, decorative, daylight control. |
| Furniture and joinery | Built-ins, loose furniture, custom pieces, storage. |
| Execution process | Drawings, coordination, site supervision, contractor/vendor details. |
| Result | What improved for the client. |
| Lessons learned | Real insight from the project. |

## EEAT Prompts

Use first-hand details wherever possible:

- During this project, one constraint we had to solve was...
- On site, we noticed...
- The client initially wanted...
- We recommended this because...
- A material decision that mattered was...
- The biggest execution risk was...
- After handover, the space supports...

Do not invent project experience. If a detail is unknown, ask the client.

## Image Plan

| Image type | Purpose | Required metadata |
| --- | --- | --- |
| Hero | First impression and social sharing | Filename, alt, width, height, caption. |
| Living/main space | Project narrative | Filename, alt, caption. |
| Detail shot | Materials/joinery/lighting proof | Filename, alt, caption. |
| Before image | Transformation proof | Filename, alt, caption. |
| After image | Result proof | Filename, alt, caption. |
| Process/construction | Experience and trust | Filename, alt, caption. |
| Plan/drawing | Authority and technical depth | Filename, alt, caption. |

## Image Filename Formula

```text
{location}-{project-slug}-{room-or-feature}-{material-or-detail}.webp
```

Examples:

```text
gulshan-courtyard-house-living-room-oak-storage.webp
banani-quiet-office-meeting-room-acoustic-panels.webp
dhanmondi-ember-restaurant-banquette-lighting.webp
```

## Alt Text Formula

```text
{Room or feature} with {specific design detail} in {Project Name}, {Location}
```

Example:

```text
Living room with custom oak storage and filtered daylight in Courtyard House, Gulshan
```

## Project FAQ

Add 3-5 project-specific questions:

| Question type | Example |
| --- | --- |
| Cost/scope | What affected the budget for this project? |
| Timeline | How long did the project take? |
| Materials | Why were these materials selected? |
| Planning | What was the biggest layout challenge? |
| Client fit | Is this approach suitable for similar homes/offices/restaurants? |

## Internal Links

Every project should link to:

- Its parent service page.
- Its location page if available.
- At least one related article.
- At least two related projects.
- `/request-consultation`.

## Recommended Schema

Use:

- `CreativeWork`
- `BreadcrumbList`
- `ImageObject` after real images are processed
- `FAQPage` if project FAQ is visible

Do not use:

- Review schema unless the review is real and visible.
- AggregateRating unless there are genuine public ratings.

## Metadata Template

| Field | Template |
| --- | --- |
| SEO title | `{Project Name} {Category} Interior Design in {Location}` |
| SEO description | `{Category} interior project in {Location} by Versatile Interior, shaped around {main challenge}, {design decision}, and {result}.` |
| OG title | `{Project Name} - Versatile Interior` |
| OG description | Short project result with location and category. |
| Canonical | `/projects/{slug}` |

## Ready-To-Publish Checklist

- Project facts are client-approved.
- All images are optimized.
- Images have filenames, alt text, and captions.
- Metadata is unique.
- Project story includes real constraints and decisions.
- Related services and local pages are linked.
- Related projects are linked.
- Schema matches visible content.
- No private client details are exposed without permission.
