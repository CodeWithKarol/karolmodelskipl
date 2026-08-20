"use client"

import { motion, useReducedMotion } from "framer-motion"
import * as React from "react"

interface RevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: "div" | "section" | "header" | "footer" | "li" | "article" | "blockquote" | "figure"
}

export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion()

  const commonProps = {
    className,
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }

  switch (as) {
    case "section":
      return <motion.section {...commonProps}>{children}</motion.section>
    case "header":
      return <motion.header {...commonProps}>{children}</motion.header>
    case "footer":
      return <motion.footer {...commonProps}>{children}</motion.footer>
    case "li":
      return <motion.li {...commonProps}>{children}</motion.li>
    case "article":
      return <motion.article {...commonProps}>{children}</motion.article>
    case "blockquote":
      return <motion.blockquote {...commonProps}>{children}</motion.blockquote>
    case "figure":
      return <motion.figure {...commonProps}>{children}</motion.figure>
    default:
      return <motion.div {...commonProps}>{children}</motion.div>
  }
}
