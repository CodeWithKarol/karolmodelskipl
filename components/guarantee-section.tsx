import { ShieldCheck, Shield, FileCode, Headphones } from "lucide-react"
import { content } from "@/lib/content"
import { SectionBadge } from "@/components/section-badge"
import { Reveal } from "@/components/reveal"

interface GuaranteeItem {
  title: string
  desc: string
}

interface GuaranteeData {
  badge: string
  title: string
  subtitle: string
  steps?: string[]
  items: GuaranteeItem[]
}

interface GuaranteeSectionProps {
  guarantee?: GuaranteeData
  id?: string
  variant?: "blue" | "red" | "emerald"
}

const icons = [ShieldCheck, Shield, FileCode, Headphones]

const iconColors = {
  blue: "text-blue-400",
  red: "text-red-400",
  emerald: "text-emerald-400",
}

export function GuaranteeSection({
  guarantee: customGuarantee,
  id = "gwarancje",
  variant = "emerald",
}: GuaranteeSectionProps = {}) {
  const { guarantee: defaultGuarantee } = content
  const guarantee: GuaranteeData = customGuarantee || defaultGuarantee

  return (
    <section
      id={id}
      className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-12 sm:py-20 text-slate-300 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        {/* Header - Mobile First */}
        <Reveal as="header" className="mb-8 sm:mb-16 text-center">
          <div className="mb-3 sm:mb-4">
            <SectionBadge variant={variant}>
            <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>{guarantee.badge}</span>
          </SectionBadge>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-6 leading-snug sm:leading-tight max-w-3xl mx-auto">
            {guarantee.title}
          </h2>
          {guarantee.subtitle && (
            <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-xs sm:text-base md:text-lg">
              {guarantee.subtitle}
            </p>
          )}
        </Reveal>

        {guarantee.steps && guarantee.steps.length > 0 && (
          <div className="mx-auto mb-10 grid max-w-3xl gap-4 sm:mb-14 sm:grid-cols-3 sm:gap-6">
            {guarantee.steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-3 border-t border-slate-800 pt-4 sm:flex-col sm:gap-2"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/10 text-xs font-bold text-blue-400">
                  {i + 1}
                </span>
                <p className="text-sm leading-snug text-slate-300">{step}</p>
              </div>
            ))}
          </div>
        )}

        {/* Lista - Mobile: kolumna (icon nad treścią), Desktop: icon obok treści */}
        <div className="mx-auto max-w-3xl">
          {guarantee.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex flex-col gap-2.5 border-t border-slate-800 py-6 sm:flex-row sm:items-start sm:gap-5 sm:py-8">
                  <Icon className={`h-5 w-5 shrink-0 sm:mt-1 ${iconColors[variant]}`} />
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-white leading-snug sm:text-xl">{item.title}</h3>
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-slate-400 sm:text-[15px]">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
