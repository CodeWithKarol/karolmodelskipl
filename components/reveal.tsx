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
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </MotionTag>
  )
}
