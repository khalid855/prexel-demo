import type { MetadataRoute } from "next";

import { services } from "@/data/services";
import { projects } from "@/data/projects";
const routes = ["", "/services", "/portfolio", "/packages", "/about", "/contact", ...services.map(s=>`/services/${s.id}`), ...projects.map(p=>`/portfolio/${p.id}`)];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://prexel-store.demo${route}`,
    lastModified: new Date("2026-07-10"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
