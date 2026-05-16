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
    // Quick-win payment pages — Phase 1 (2,400 + 1,900 searches/mo)
    { url: `${base}/esewa-betting`, lastModified: now, changeFrequency: "weekly", priority: 0.95, ...hreflang("/esewa-betting", base) },
    { url: `${base}/khalti-betting`, lastModified: now, changeFrequency: "weekly", priority: 0.95, ...hreflang("/khalti-betting", base) },
    // Sports sub-pages — Phase 2
    { url: `${base}/sports/cricket`, lastModified: now, changeFrequency: "daily", priority: 0.9, ...hreflang("/sports/cricket", base) },
    { url: `${base}/sports/ipl-2026`, lastModified: now, changeFrequency: "daily", priority: 1.0, ...hreflang("/sports/ipl-2026", base) },
    { url: `${base}/sports/football`, lastModified: now, changeFrequency: "daily", priority: 0.9, ...hreflang("/sports/football", base) },
    // Casino sub-pages — Phase 2
    { url: `${base}/casino/teen-patti`, lastModified: now, changeFrequency: "weekly", priority: 0.9, ...hreflang("/casino/teen-patti", base) },
    { url: `${base}/casino/aviator`, lastModified: now, changeFrequency: "weekly", priority: 0.9, ...hreflang("/casino/aviator", base) },
    { url: `${base}/casino/andar-bahar`, lastModified: now, changeFrequency: "weekly", priority: 0.85, ...hreflang("/casino/andar-bahar", base) },
    { url: `${base}/casino/roulette`, lastModified: now, changeFrequency: "weekly", priority: 0.8, ...hreflang("/casino/roulette", base) },
    { url: `${base}/casino/blackjack`, lastModified: now, changeFrequency: "weekly", priority: 0.8, ...hreflang("/casino/blackjack", base) },
    { url: `${base}/casino/dragon-tiger`, lastModified: now, changeFrequency: "weekly", priority: 0.8, ...hreflang("/casino/dragon-tiger", base) },
  ];
}
