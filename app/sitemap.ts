import type { MetadataRoute } from "next";

const routes = ["", "/services", "/portfolio", "/packages", "/contact", "/login", "/dashboard", "/admin"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://prexel-store.demo${route}`,
    lastModified: new Date("2026-07-10"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
