"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

type ModernizacjaQualificationContent = {
  badge: string
  title: string
  intro: string
  steps: {
    key: string
    label: string
    options: { value: string; label: string; hint?: string }[]
  }[]
  messages: {
    rejected: { title: string; body: string; button: string; href: string }
  }
  qualified: {
    title: string
    body: string
    button: string
    footer: string
  }
}

export function ModernizacjaQualificationForm({
  qualification,
}: {
  qualification: ModernizacjaQualificationContent
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const requiredKeys = qualification.steps.map((step) => step.key)
  const allAnswered = requiredKeys.every((key) => answers[key])

  let result: "rejected" | "qualified" | null = null
  if (allAnswered) {
    const rejected =
      answers.scale === "ponizej5k" ||
      answers.authority === "pracownik" ||
      answers.budget === "przyszly" ||
      answers.budget === "darmowa"
    result = rejected ? "rejected" : "qualified"
  }

  const select = (key: string, value: string) =>
    setAnswers((prev) => ({ ...prev, [key]: value }))

  return (
    <section id="kwalifikacja" className="pt-28 pb-16 sm:pt-36 sm:pb-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto w-full max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:px-4 sm:text-xs">
            {qualification.badge}
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl">
            {qualification.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {qualification.intro}
          </p>

          <div className="mt-9 text-left sm:mt-12">
            {qualification.steps.map((step) => (
              <fieldset key={step.key} className="mb-8 last:mb-0">
                <legend className="mb-3.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {step.label}
                </legend>
                <div className="space-y-2.5">
                  {step.options.map((option) => {
                    const active = answers[step.key] === option.value
                    return (
                      <button
                        key={option.value}
                        type="button"
                        aria-pressed={active}
                        onClick={() => select(step.key, option.value)}
                        className={cn(
                          "block w-full rounded-xl border px-4 py-4 text-left text-sm font-medium leading-snug transition-colors sm:py-3.5 sm:text-[15px]",
                          active
                            ? "border-blue-500/60 bg-blue-500/10 text-white"
                            : "border-white/10 bg-white/[0.02] text-slate-300 hover:border-white/20 hover:bg-white/5"
                        )}
                      >
                        <span className="block">{option.label}</span>
                        {option.hint && (
                          <span className="mt-0.5 block text-xs font-normal leading-snug text-slate-500">
                            {option.hint}
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
              </fieldset>
            ))}

            {!allAnswered && (
              <p className="text-center text-xs text-slate-500">
                Odpowiedz na wszystkie {requiredKeys.length} pytań, aby zobaczyć
                dalszy krok.
              </p>
            )}

            {result === "rejected" && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
                <p className="text-base font-semibold text-white">
                  {qualification.messages.rejected.title}
                </p>
                <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
                  {qualification.messages.rejected.body}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-5 border-white/15 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white"
                >
                  <a href={qualification.messages.rejected.href}>
                    {qualification.messages.rejected.button}
                  </a>
                </Button>
              </div>
            )}

            {result === "qualified" && (
              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5 text-center">
                <p className="text-base font-semibold text-white">
                  {qualification.qualified.title}
                </p>
                <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
                  {qualification.qualified.body}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-5 w-full max-w-md whitespace-normal rounded-xl bg-blue-600 px-6 py-5 text-sm font-bold leading-tight text-white shadow-lg hover:bg-blue-700"
                >
                  <a
                    href={siteConfig.calendlyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {qualification.qualified.button}
                  </a>
                </Button>
                <p className="mt-3 text-[11px] font-medium text-slate-400">
                  {qualification.qualified.footer}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
