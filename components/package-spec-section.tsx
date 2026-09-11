import { Package, BadgeCheck, Lock, FileCode2, CircleCheck } from "lucide-react"
import { SectionBadge } from "@/components/section-badge"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

interface PackageSpecContent {
  badge: string
  title: string
  intro: string
  core: {
    tag?: string
    value?: string
    title: string
    desc?: string
    tiers?: { label: string; text: string }[]
  }
  bonuses: {
    tag: string
    title: string
    value?: string
    desc?: string
    tiers?: { label: string; text: string }[]
  }[]
  summary_label?: string
  summary_value?: string
  price_label?: string
  price_amount?: string
  payment?: string
  bullets?: string[]
}

function TierGrid({ tiers }: { tiers: { label: string; text: string }[] }) {
  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-3 sm:gap-5">
      {tiers.map((tier) => (
        <div key={tier.label} className="border-t border-slate-800 pt-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 sm:text-xs">
            {tier.label}
          </span>
          <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-[15px]">
            {tier.text}
          </p>
        </div>
      ))}
    </div>
  )
}

export function PackageSpecSection({
  spec,
  className,
}: {
  spec: PackageSpecContent
  className?: string
}) {
  const bonusIcons = [BadgeCheck, Lock, FileCode2]

  return (
    <section
      className={cn(
        "relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-12 text-slate-300 sm:py-20 md:py-24",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        <Reveal as="header" className="mb-12 sm:mb-16 text-center">
          <div className="mb-4 flex justify-center">
            <SectionBadge>{spec.badge}</SectionBadge>
          </div>
          <h2 className="mx-auto max-w-3xl text-2xl font-bold tracking-tight text-balance text-white leading-tight sm:text-3xl md:text-4xl">
            {spec.title}
          </h2>
          {spec.intro && (
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base md:text-lg">
              {spec.intro}
            </p>
          )}
        </Reveal>

        <div className="space-y-0">
          {/* Rdzeń */}
          <Reveal>
            <div className="border-t border-slate-800 py-7 sm:py-9">
              {(spec.core.value || spec.core.tag) && (
                <div className="mb-4 flex flex-col items-start gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3">
                  <span className="flex items-center gap-2">
                    <Package className="h-5 w-5 shrink-0 text-blue-400" />
                    {spec.core.tag && (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 sm:text-xs">
                        {spec.core.tag}
                      </span>
                    )}
                  </span>
                  {spec.core.value && (
                    <span className="text-[11px] font-medium text-slate-500 sm:text-xs">
                      {spec.core.value}
                    </span>
                  )}
                </div>
              )}
              <h3 className="text-lg font-bold text-white leading-snug sm:text-xl">{spec.core.title}</h3>
              {spec.core.desc && (
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-slate-400 sm:text-[15px]">
                  {spec.core.desc}
                </p>
              )}

              {spec.core.tiers && spec.core.tiers.length > 0 && (
                <TierGrid tiers={spec.core.tiers} />
              )}
            </div>
          </Reveal>

          {/* Bonusy */}
          {spec.bonuses.map((bonus, i) => {
            const BonusIcon = bonusIcons[i % bonusIcons.length]
            return (
              <Reveal key={bonus.tag} delay={0.05 * i}>
                <div className="border-t border-slate-800 py-7 sm:py-9">
                  <div className="mb-3 flex flex-col items-start gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3">
                    <span className="flex items-center gap-2">
                      <BonusIcon className="h-5 w-5 shrink-0 text-blue-400" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 sm:text-xs">
                        {bonus.tag}
                      </span>
                    </span>
                    {bonus.value && (
                      <span className="text-[11px] font-medium text-slate-500 sm:text-xs">{bonus.value}</span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug sm:text-xl">{bonus.title}</h3>
                  {bonus.desc && (
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-slate-400 sm:text-[15px]">
                      {bonus.desc}
                    </p>
                  )}
                  {bonus.tiers && bonus.tiers.length > 0 && (
                    <TierGrid tiers={bonus.tiers} />
                  )}
                </div>
              </Reveal>
            )
          })}

          {/* Podsumowanie wartości i cena (opcjonalne) */}
          {spec.price_amount && (
            <Reveal>
              <div className="border-t border-slate-800 pt-10 text-center sm:pt-14">
                {spec.summary_label && spec.summary_value && (
                  <>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 sm:text-xs">
                      {spec.summary_label}
                    </p>
                    <p className="mx-auto mt-2 max-w-2xl text-sm font-semibold text-slate-200 sm:text-base md:text-lg">
                      {spec.summary_value}
                    </p>
                  </>
                )}

                <div className="mx-auto mt-10 max-w-xl border-t border-slate-800 pt-9 sm:mt-12">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 sm:text-xs">
                    {spec.price_label}
                  </p>
                  <p
                    className={cn(
                      "mt-2 font-extrabold tracking-tight text-white",
                      (spec.price_amount ?? "").length <= 18
                        ? "text-3xl sm:text-4xl"
                        : "text-xl leading-snug sm:text-2xl sm:leading-snug"
                    )}
                  >
                    {spec.price_amount}
                  </p>
                  {spec.payment && (
                    <p className="mx-auto mt-3 max-w-lg text-xs leading-relaxed text-slate-400 sm:text-sm">
                      {spec.payment}
                    </p>
                  )}

                  {spec.bullets && spec.bullets.length > 0 && (
                    <ul className="mx-auto mt-6 max-w-md space-y-2.5 text-left">
                      {spec.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-xs text-slate-300 sm:text-sm">
                          <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
