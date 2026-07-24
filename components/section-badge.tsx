import { cn } from "@/lib/utils"

const variants = {
  blue: "border-blue-500/20 bg-blue-500/5 text-blue-400",
  red: "border-red-500/20 bg-red-500/10 text-red-400",
  emerald: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
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
    <span
      className={cn(
        "inline-flex items-center gap-2 border font-bold uppercase tracking-wider",
        rounded === "full" && "rounded-full px-3.5 sm:px-4 py-1.5 text-xs",
        rounded === "md" && "rounded-md px-2 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-sm font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
