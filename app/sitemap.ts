import type { MetadataRoute } from "next";
import { blogPosts } from "./blogg/data";

/**
 * Sitemap for helkrypt.no
 *
 * Inkluderer alle statiske sider + alle blogg-artikler dynamisk.
 * Blogg-artikler får lastModified fra updatedAt eller publishedAt.
 *
 * Genereres automatisk til: https://www.helkrypt.no/sitemap.xml
 * Registrér sitemap i Google Search Console og Bing Webmaster Tools etter deploy.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.helkrypt.no";

  // Statiske sider
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blogg`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/personvern`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Blogg-artikler — dynamisk fra data.ts
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blogg/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: post.featured ? 0.8 : 0.7,
  }));

  return [...staticPages, ...blogPages];
}
