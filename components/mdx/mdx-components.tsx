import { ChevronDown, List } from "lucide-react"
import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react"
import { extractTextContent } from "@/lib/utils/heading"
import { ArticleToc } from "@/components/article-toc"

const headingTags = { 2: "h2", 3: "h3" } as const

function getTableHeaderLabels(children: ReactNode): string[] {
  const nodes = Children.toArray(children)
  const thead = nodes.find(
    (node) => isValidElement(node) && node.type === "thead"
  )
  if (!isValidElement(thead)) return []
  const rows = Children.toArray(
    (thead.props as { children?: ReactNode }).children
  )
  const firstRow = rows.find((row) => isValidElement(row))
  if (!isValidElement(firstRow)) return []
  return Children.toArray((firstRow.props as { children?: ReactNode }).children)
    .filter((cell): cell is ReactElement => isValidElement(cell))
    .map((cell) =>
      extractTextContent((cell.props as { children?: ReactNode }).children)
    )
}

export function ResponsiveTable({ children }: { children: ReactNode }) {
  const labels = getTableHeaderLabels(children)

  if (labels.length === 0) {
    return (
      <div className="my-6 overflow-x-auto rounded-xl border border-border">
        <table>{children}</table>
      </div>
    )
  }

  if (labels.length === 1) {
    return (
      <div className="table-mobile-cards table-mobile-cards--single">
        <table>{children}</table>
      </div>
    )
  }

  const nodes = Children.toArray(children)
  const tbodyIndex = nodes.findIndex(
    (node) => isValidElement(node) && node.type === "tbody"
  )
  const tbody = tbodyIndex >= 0 ? (nodes[tbodyIndex] as ReactElement) : null

  const newChildren = nodes.map((node, index) => {
    if (index !== tbodyIndex || !tbody) return node
    const rows = Children.toArray(
      (tbody.props as { children?: ReactNode }).children
    )
    const newRows = rows.map((row) => {
      if (!isValidElement(row)) return row
      const cells = Children.toArray(
        (row.props as { children?: ReactNode }).children
      )
      const newCells = cells.map((cell, i) => {
        if (!isValidElement(cell) || i === 0) return cell
        return cloneElement(cell as ReactElement<{ children?: ReactNode }>, {
          children: (
            <>
              <span className="table-card-label">{labels[i] ?? ""}</span>
              {(cell.props as { children?: ReactNode }).children}
            </>
          ),
        })
      })
      return cloneElement(row as ReactElement<{ children?: ReactNode }>, {
        children: newCells,
      })
    })
    return cloneElement(tbody as ReactElement<{ children?: ReactNode }>, {
      children: newRows,
    })
  })

  return (
    <div className="table-mobile-cards">
      <table>{newChildren}</table>
    </div>
  )
}

export function HeadingAnchor({
  level,
  id,
  className,
  children,
}: {
  level: 2 | 3
  id: string
  className?: string
  children: ReactNode
}) {
  const Tag = headingTags[level]
  return (
    <Tag
      id={id}
      className={["group relative scroll-mt-24", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
      <a
        href={`#${id}`}
        className="absolute top-1/2 -left-4 hidden -translate-y-1/2 !text-sm font-normal text-primary no-underline opacity-0 transition-opacity group-hover:opacity-100 hover:!text-primary sm:block"
        aria-label={`Link do sekcji: ${extractTextContent(children)}`}
      >
        #
      </a>
    </Tag>
  )
}

export function TableOfContents({
  headings,
}: {
  headings: { level: number; text: string; id: string }[]
}) {
  return (
    <details className="group mb-8 rounded-xl border border-border bg-muted/30 lg:hidden">
      <summary className="flex min-h-12 cursor-pointer list-none items-center gap-2.5 px-4 py-3.5 text-xs font-semibold tracking-widest text-muted-foreground uppercase select-none [&::-webkit-details-marker]:hidden">
        <List className="h-3.5 w-3.5 shrink-0 text-primary" />
        <span className="flex-1">Spis treści</span>
        <span className="text-[11px] font-normal text-muted-foreground normal-case">
          {headings.length} {headings.length === 1 ? "sekcja" : "sekcji"}
        </span>
        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
      </summary>
      <div className="border-t border-border px-4 py-3">
        <ArticleToc headings={headings} />
      </div>
    </details>
  )
}
