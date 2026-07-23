import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { calculateReadingTime } from "@/lib/utils/reading-time"

const postsDirectory = path.join(process.cwd(), "content", "blog")

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  silo: string
  readingTime: string
  content: string // Markdown content
}

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return []
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const realSlug = slug.replace(/\.md$/, "")
    const fullPath = path.join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug: realSlug,
      title: data.title || "",
      excerpt: data.excerpt || "",
      date: data.date || "",
      silo: data.silo || "Fundamenty & Strategia",
      readingTime: calculateReadingTime(content),
      content,
    }
  } catch {
    return null
  }
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
