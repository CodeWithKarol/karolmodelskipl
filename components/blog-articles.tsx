"use client"

import * as React from "react"
import { Search, X } from "lucide-react"
import { BlogPostGrid } from "@/components/blog-post-grid"
import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SILO_LABELS, siloLabel } from "@/lib/blog-silos"
import type { BlogPostSummary } from "@/lib/blog"

const SILO_ORDER = Object.values(SILO_LABELS)

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l")
    .toLowerCase()
}

export function BlogArticles({ posts }: { posts: BlogPostSummary[] }) {
  const [query, setQuery] = React.useState("")
  const [silo, setSilo] = React.useState("all")
  const deferredQuery = React.useDeferredValue(query)

  const silos = React.useMemo(() => {
    const seen = new Set<string>()
    for (const post of posts) seen.add(post.silo)
    return [...seen].sort(
      (a, b) => SILO_ORDER.indexOf(a) - SILO_ORDER.indexOf(b)
    )
  }, [posts])

  const filtered = React.useMemo(() => {
    const q = normalize(deferredQuery.trim())
    return posts.filter((post) => {
      if (silo !== "all" && post.silo !== silo) return false
      if (!q) return true
      return (
        normalize(post.title).includes(q) || normalize(post.excerpt).includes(q)
      )
    })
  }, [posts, deferredQuery, silo])

  const isFiltering = query.trim().length > 0 || silo !== "all"

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex-1" role="search">
            <InputGroup>
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
              <InputGroupInput
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Szukaj artykułów…"
                aria-label="Szukaj artykułów"
              />
              {query && (
                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    aria-label="Wyczyść wyszukiwanie"
                    onClick={() => setQuery("")}
                  >
                    <X />
                  </InputGroupButton>
                </InputGroupAddon>
              )}
            </InputGroup>
          </div>

          <Select value={silo} onValueChange={setSilo}>
            <SelectTrigger
              aria-label="Filtruj według kategorii"
              className="w-full sm:w-56"
            >
              <SelectValue placeholder="Wszystkie kategorie" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">Wszystkie kategorie</SelectItem>
                {silos.map((item) => (
                  <SelectItem key={item} value={item}>
                    {siloLabel(item)}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <p aria-live="polite" className="text-sm text-muted-foreground">
          {filtered.length} z {posts.length} artykułów
          {isFiltering && (
            <Button
              type="button"
              variant="link"
              size="sm"
              onClick={() => {
                setQuery("")
                setSilo("all")
              }}
              className="ml-1 h-auto p-0"
            >
              Wyczyść filtry
            </Button>
          )}
        </p>
      </div>

      {filtered.length > 0 ? (
        <BlogPostGrid posts={filtered} showBadge />
      ) : (
        <div className="rounded-2xl border border-dashed border-border py-16 text-center">
          <p className="text-base font-medium text-foreground">
            Brak artykułów
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            {query.trim()
              ? `Nie znaleźliśmy nic dla „${query.trim()}”. Spróbuj innej frazy lub wyczyść filtry.`
              : "Brak artykułów w tej kategorii. Wybierz inną lub wyczyść filtry."}
          </p>
        </div>
      )}
    </div>
  )
}
