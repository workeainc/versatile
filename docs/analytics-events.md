# Analytics Event Plan

Use consistent snake_case names across Google Analytics 4, Microsoft Clarity notes, and any future server-side tracking.

| Event | Trigger | Parameters |
| --- | --- | --- |
| `consultation_started` | User opens `/request-consultation` or starts the wizard | `source_path`, `project_type` when available |
| `consultation_step_completed` | User advances a consultation wizard step | `step_number`, `step_name` |
| `consultation_submitted` | Consultation form submits successfully | `project_type`, `timeline`, `budget_range` |
| `quick_contact_submitted` | Contact page quick message submits successfully | `source_path` |
| `phone_click` | User clicks a `tel:` link | `source_path`, `link_text` |
| `email_click` | User clicks a `mailto:` link | `source_path`, `link_text` |
| `project_view` | User opens a project detail page | `project_slug`, `project_category`, `project_location` |
| `service_view` | User opens a service detail page | `service_slug`, `service_type` |
| `local_landing_view` | User opens a local SEO landing page | `landing_slug`, `location`, `service_type` |
| `blog_view` | User opens a blog article | `post_slug`, `category`, `reading_time` |
| `blog_read_50` | User scrolls beyond 50% of a blog article | `post_slug`, `category` |
| `blog_read_90` | User scrolls beyond 90% of a blog article | `post_slug`, `category` |
| `blog_category_view` | User opens a blog category archive | `category_slug` |
| `blog_tag_view` | User opens a blog tag archive | `tag_slug` |
| `cta_click` | User clicks a primary CTA | `source_path`, `cta_label`, `destination_path` |

## Naming Rules

- Use lowercase snake_case.
- Use stable slugs instead of display names where possible.
- Do not send personally identifiable form values to analytics.
- Keep event names action-oriented and reusable.
- Add a new event only if it helps understand qualified lead generation or content performance.

## Recommended Tools

- Google Analytics 4 for acquisition, events, and conversion reporting.
- Google Search Console for indexing, query visibility, and Core Web Vitals.
- Microsoft Clarity for heatmaps, recordings, click maps, and scroll behavior.
