import type { MetadataRoute } from "next";

const hreflang = (path: string, base: string) => ({
  alternates: {
    languages: {
      "en": `${base}${path}`,
      "ne": `${base}${path}`,
      "ne-NP": `${base}${path}`,
      "en-NP": `${base}${path}`,
      "x-default": `${base}${path}`,
    },
  },
});

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://gorkha.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "daily", priority: 1.0, ...hreflang("", base) },
    { url: `${base}/sports`, lastModified: now, changeFrequency: "daily", priority: 1.0, ...hreflang("/sports", base) },
    { url: `${base}/casino`, lastModified: now, changeFrequency: "daily", priority: 0.9, ...hreflang("/casino", base) },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9, ...hreflang("/blog", base) },
    { url: `${base}/promotions`, lastModified: now, changeFrequency: "weekly", priority: 0.85, ...hreflang("/promotions", base) },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7, ...hreflang("/about", base) },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7, ...hreflang("/contact", base) },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3, ...hreflang("/terms", base) },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3, ...hreflang("/privacy", base) },
  ];
}
