import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const variants = {
  blue: "border-primary/20 bg-primary/5 text-primary",
  neutral: "border-border bg-muted text-muted-foreground",
}

export function SectionBadge({
  className,
  variant = "blue",
  children,
}: {
  className?: string
  variant?: keyof typeof variants
  children: React.ReactNode
}) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "h-auto gap-2 overflow-visible rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wider whitespace-normal uppercase sm:px-4 [&>svg]:size-4!",
        variants[variant],
        className
      )}
    >
      {children}
    </Badge>
  )
}
