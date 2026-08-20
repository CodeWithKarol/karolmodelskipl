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
  items: GuaranteeItem[]
}

interface GuaranteeSectionProps {
  guarantee?: GuaranteeData
}

const icons = [ShieldCheck, Shield, FileCode, Headphones]

export function GuaranteeSection({ guarantee: customGuarantee }: GuaranteeSectionProps = {}) {
  const { guarantee: defaultGuarantee } = content
  const guarantee = customGuarantee || defaultGuarantee

  return (
    <section
      id="gwarancje"
      className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-12 sm:py-20 text-slate-300 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        {/* Header - Mobile First */}
        <Reveal as="header" className="mb-8 sm:mb-16 text-center">
          <div className="mb-3 sm:mb-4">
            <SectionBadge variant="emerald">
            <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>{guarantee.badge}</span>
          </SectionBadge>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3 sm:mb-6 leading-snug sm:leading-tight max-w-3xl mx-auto">
            {guarantee.title}
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-xs sm:text-base md:text-lg">
            {guarantee.subtitle}
          </p>
        </Reveal>

        {/* Grid - Mobile: 1 col, Desktop: 2 col with stagger */}
        <div className="grid gap-3 sm:gap-10 md:grid-cols-2 max-w-4xl mx-auto">
          {guarantee.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal
                key={i}
                delay={i * 0.05}
                className={guarantee.items.length === 3 && i === 2 ? "md:col-span-2" : ""}
              >
                <div
                  className={`group relative flex flex-col h-full bg-slate-900/30 ring-1 ring-white/5 p-5 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:ring-white/10 hover:shadow-[0_20px_60px_-20px_rgba(16,185,129,0.25)] ${
                    i % 2 === 1 && guarantee.items.length === 4 ? "md:translate-y-8" : ""
                  }`}
                >
                  <div className="mb-4 sm:mb-6 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <h3 className="text-sm sm:text-xl font-bold text-white mb-1.5 sm:mb-3 group-hover:text-emerald-400 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
