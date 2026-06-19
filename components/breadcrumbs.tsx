"use client"

import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React from "react"

export function Breadcrumbs() {
  const pathname = usePathname()
  const paths = pathname.split("/").filter((path) => path)

  return (
    <Breadcrumb>
      <BreadcrumbList className="text-slate-400">
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="hover:text-blue-400">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {paths.map((path, index) => {
          const href = "/" + paths.slice(0, index + 1).join("/")
          const isLast = index === paths.length - 1
          const label = path
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase())

          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="text-blue-400">{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href} className="hover:text-blue-400">{label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
