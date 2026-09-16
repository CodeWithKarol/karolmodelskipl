import type { Metadata } from "next"
import {
  BlogCategoryPage,
  buildBlogSiloMetadata,
} from "@/components/blog-category-page"
import { szybkaWersjaBlogSilo } from "@/lib/blog-silo-pages"

export async function generateMetadata(): Promise<Metadata> {
  return buildBlogSiloMetadata(szybkaWersjaBlogSilo)
}

export default function SzybkaWersjaStartowaCategoryPage() {
  return <BlogCategoryPage config={szybkaWersjaBlogSilo} />
}
