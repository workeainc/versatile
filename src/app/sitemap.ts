import type { MetadataRoute } from "next";
import { localSeoPages } from "@/data/localSeo";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { getAllPosts, getCategories, getTags } from "@/lib/blog/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://versatileinterior.com.bd";
const launchDate = new Date("2026-07-11");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/services", "/studio", "/process", "/blog", "/contact", "/request-consultation"];
  const projectRoutes = projects.map((project) => ({
    route: `/projects/${project.slug}`,
    lastModified: new Date(project.completionDate)
  }));
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const blogRoutes = getAllPosts().map((post) => ({
    route: `/blog/${post.slug}`,
    lastModified: new Date(post.date)
  }));
  const categoryRoutes = getCategories().map((category) => `/blog/category/${category.slug}`);
  const tagRoutes = getTags().map((tag) => `/blog/tag/${tag.slug}`);
  const localSeoRoutes = localSeoPages.map((page) => `/${page.slug}`);

  const routeEntries = [
    ...staticRoutes.map((route) => ({ route, lastModified: launchDate })),
    ...projectRoutes,
    ...serviceRoutes.map((route) => ({ route, lastModified: launchDate })),
    ...blogRoutes,
    ...categoryRoutes.map((route) => ({ route, lastModified: launchDate })),
    ...tagRoutes.map((route) => ({ route, lastModified: launchDate })),
    ...localSeoRoutes.map((route) => ({ route, lastModified: launchDate }))
  ];

  return routeEntries.map(({ route, lastModified }) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/projects") || route === "/blog" || localSeoRoutes.includes(route) ? 0.9 : route.startsWith("/blog/") ? 0.8 : 0.75
  }));
}
