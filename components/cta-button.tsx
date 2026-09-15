import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CtaButton({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      className={cn(
        "h-auto min-h-11 gap-2 rounded-xl px-6 py-3 text-center text-sm leading-tight font-semibold whitespace-normal shadow-lg transition-all",
        className
      )}
      {...props}
    />
  )
}
