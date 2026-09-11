import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const variants = {
  blue: "border-primary/20 bg-primary/5 text-primary",
  neutral: "border-border bg-muted text-muted-foreground",
  red: "border-destructive/20 bg-destructive/10 text-destructive",
  emerald: "border-success/20 bg-success/10 text-success",
}

export function SectionBadge({
  className,
  variant = "blue",
  rounded = "full",
  children,
}: {
  className?: string
  variant?: keyof typeof variants
  rounded?: "full" | "md"
  children: React.ReactNode
}) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "gap-2 border font-bold tracking-wider whitespace-normal overflow-visible uppercase [&>svg]:size-4!",
        rounded === "full" && "h-auto rounded-full px-3.5 py-1.5 text-xs sm:px-4",
        rounded === "md" &&
          "h-auto rounded-md px-2 py-0.5 text-[11px] font-medium sm:px-3 sm:py-1 sm:text-sm",
        variants[variant],
        className
      )}
    >
      {children}
    </Badge>
  )
}
