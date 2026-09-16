import type { Metadata } from "next"
import {
  BlogCategoryPage,
  buildBlogSiloMetadata,
} from "@/components/blog-category-page"
import { strategiaBlogSilo } from "@/lib/blog-silo-pages"

export async function generateMetadata(): Promise<Metadata> {
  return buildBlogSiloMetadata(strategiaBlogSilo)
}

export default function StrategiaItCategoryPage() {
  return <BlogCategoryPage config={strategiaBlogSilo} />
}
