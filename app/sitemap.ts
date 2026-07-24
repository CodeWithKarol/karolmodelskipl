import { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const postEntries = posts.map((post) => ({
    url: `https://www.karolmodelski.pl/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: "https://www.karolmodelski.pl",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.karolmodelski.pl/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://www.karolmodelski.pl/projektowanie-mvp",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.karolmodelski.pl/aplikacje-internetowe-dla-firm",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.karolmodelski.pl/naprawa-i-modernizacja-aplikacji",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.karolmodelski.pl/doradztwo-techniczne-dla-firm",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://www.karolmodelski.pl/blog/bezinwazyjna-modernizacja-systemow",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://www.karolmodelski.pl/blog/szybka-wersja-startowa",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://www.karolmodelski.pl/blog/aplikacje-dla-firm",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://www.karolmodelski.pl/blog/strategia-it",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...postEntries,
  ]
}
