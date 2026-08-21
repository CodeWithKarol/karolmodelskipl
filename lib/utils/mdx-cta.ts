import type { Root, Element } from "hast"
import type { Plugin } from "unified"

const HEADINGS = new Set(["h1", "h2", "h3", "h4", "h5", "h6"])

function textContent(node: Element): string {
  let out = ""
  for (const child of node.children) {
    if (child.type === "text") out += child.value
    else if (child.type === "element") out += textContent(child)
  }
  return out
}

function addClass(node: Element, cls: string) {
  const current = node.properties.className
  const list = Array.isArray(current)
    ? [...(current as string[])]
    : current
      ? [String(current)]
      : []
  if (!list.includes(cls)) list.push(cls)
  node.properties.className = list
}

function isUppercase(s: string) {
  const letters = s.replace(/[^\p{L}]/gu, "")
  return letters.length > 0 && letters === letters.toUpperCase()
}

function hasUppercaseLink(node: Element): boolean {
  for (const child of node.children) {
    if (child.type !== "element") continue
    if (child.tagName === "a" && isUppercase(textContent(child))) return true
    if (hasUppercaseLink(child)) return true
  }
  return false
}

function decorateCta(node: Element) {
  if (node.type !== "element") return
  const text = textContent(node).trimStart()

  if (node.tagName === "h3" || text.startsWith("💡")) {
    addClass(node, "article-cta-title")
    return
  }
  if (node.tagName !== "p") return

  if (hasUppercaseLink(node)) {
    addClass(node, "article-cta-link")
    return
  }
  if (node.children.some((c) => c.type === "element" && c.tagName === "em")) {
    addClass(node, "article-cta-meta")
  }
}

export const ctaCalloutPlugin: Plugin<[], Root> = () => {
  return (tree) => {
    const children = tree.children as Element[]
    let i = 0

    while (i < children.length) {
      const node = children[i]
      if (node.type !== "element") {
        i++
        continue
      }

      if (node.tagName === "blockquote" && textContent(node).includes("💡")) {
        addClass(node, "article-cta")
        for (const child of node.children) {
          if (child.type === "element") decorateCta(child)
        }
        i++
        continue
      }

      if (node.tagName === "h3" && textContent(node).includes("💡")) {
        const group: Element[] = [node]
        let j = i + 1
        while (j < children.length) {
          const next = children[j]
          if (
            next.type === "element" &&
            (HEADINGS.has(next.tagName) || next.tagName === "hr")
          ) {
            break
          }
          group.push(next)
          j++
        }
        for (const child of group) decorateCta(child)

        const wrapper: Element = {
          type: "element",
          tagName: "div",
          properties: { className: ["article-cta"] },
          children: group,
        }
        children.splice(i, group.length, wrapper)
      }

      i++
    }
  }
}
