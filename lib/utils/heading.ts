import type { ReactNode, ReactElement } from "react"

export interface Heading {
  level: number
  text: string
  id: string
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9ąćęłńóśźż\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

export function extractHeadings(markdown: string): Heading[] {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm
  const headings: Heading[] = []
  const idCounts = new Map<string, number>()
  let match

  while ((match = headingRegex.exec(markdown)) !== null) {
    const text = match[2].trim()
    const baseId = slugify(text)
    const count = idCounts.get(baseId) || 0
    const id = count > 0 ? `${baseId}-${count}` : baseId
    idCounts.set(baseId, count + 1)

    headings.push({
      level: match[1].length,
      text,
      id,
    })
  }

  return headings
}

export function extractTextContent(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node)
  if (Array.isArray(node)) return node.map(extractTextContent).join("")
  if (
    node !== null &&
    typeof node === "object" &&
    "props" in node &&
    node.props !== null &&
    typeof node.props === "object"
  ) {
    return extractTextContent((node as ReactElement<{ children: ReactNode }>).props.children)
  }
  return ""
}
