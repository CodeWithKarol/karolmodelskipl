export function TrustLogos({
  label,
  logos,
}: {
  label: string
  logos: string[]
}) {
  return (
    <p className="mt-3 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[10px] font-medium text-muted-foreground">
      <span>{label}</span>
      {logos.map((logo, i) => (
        <span key={logo} className="flex items-center gap-x-1.5">
          {i > 0 && <span className="text-muted-foreground">•</span>}
          <span className="font-semibold text-muted-foreground">{logo}</span>
        </span>
      ))}
    </p>
  )
}
