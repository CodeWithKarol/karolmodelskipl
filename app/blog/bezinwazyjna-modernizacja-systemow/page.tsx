import type { Metadata } from "next"
import {
  BlogCategoryPage,
  buildBlogSiloMetadata,
} from "@/components/blog-category-page"
import { modernizacjaBlogSilo } from "@/lib/blog-silo-pages"

export async function generateMetadata(): Promise<Metadata> {
  return buildBlogSiloMetadata(modernizacjaBlogSilo)
}

export default function ModernizacjaCategoryPage() {
  return <BlogCategoryPage config={modernizacjaBlogSilo} />
}
