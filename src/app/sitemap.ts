import type { MetadataRoute } from "next";
import { localSeoPages } from "@/data/localSeo";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { getAllPosts, getCategories, getTags } from "@/lib/blog/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://versatileinterior.com.bd";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/services", "/studio", "/process", "/blog", "/contact", "/request-consultation"];
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const blogRoutes = getAllPosts().map((post) => `/blog/${post.slug}`);
  const categoryRoutes = getCategories().map((category) => `/blog/category/${category.slug}`);
  const tagRoutes = getTags().map((tag) => `/blog/tag/${tag.slug}`);
  const localSeoRoutes = localSeoPages.map((page) => `/${page.slug}`);

  return [...staticRoutes, ...projectRoutes, ...serviceRoutes, ...blogRoutes, ...categoryRoutes, ...tagRoutes, ...localSeoRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/projects") || route === "/blog" || localSeoRoutes.includes(route) ? 0.9 : route.startsWith("/blog/") ? 0.8 : 0.75
  }));
}
