import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://face-detection-pro.vercel.app",
      lastModified: new Date(),
      priority: 1,
    },
  ];
}