"use client"

import { motion, useReducedMotion } from "framer-motion"
import * as React from "react"

interface RevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: "div" | "header" | "blockquote"
}

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion()

  const commonProps = {
    className,
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }

  if (as === "header") {
    return <motion.header {...commonProps}>{children}</motion.header>
  }

  if (as === "blockquote") {
    return <motion.blockquote {...commonProps}>{children}</motion.blockquote>
  }

  return <motion.div {...commonProps}>{children}</motion.div>
}
