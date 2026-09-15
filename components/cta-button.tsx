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
        "h-auto min-h-11 gap-2 whitespace-normal rounded-xl px-6 py-3 text-center text-sm font-semibold leading-tight shadow-lg transition-all",
        className
      )}
      {...props}
    />
  )
}
