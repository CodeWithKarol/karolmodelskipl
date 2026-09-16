import type { Metadata } from "next"
import {
  BlogCategoryPage,
  buildBlogSiloMetadata,
} from "@/components/blog-category-page"
import { aplikacjeBlogSilo } from "@/lib/blog-silo-pages"

export async function generateMetadata(): Promise<Metadata> {
  return buildBlogSiloMetadata(aplikacjeBlogSilo)
}

export default function AplikacjeDlaFirmCategoryPage() {
  return <BlogCategoryPage config={aplikacjeBlogSilo} />
}
