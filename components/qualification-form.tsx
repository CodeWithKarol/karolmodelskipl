"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

type QualificationContent = {
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

export function QualificationForm({
  qualification,
}: {
  qualification: QualificationContent
}) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const total = qualification.steps.length
  const current = qualification.steps[step]
  const answered = Boolean(answers[current.key])
  const allAnswered = qualification.steps.every((s) => answers[s.key])
  const isLast = step === total - 1

  const select = (value: string) =>
    setAnswers((prev) => ({ ...prev, [current.key]: value }))

  const rejected =
    allAnswered &&
    (answers.scale === "ponizej5" ||
      answers.authority === "pracownik" ||
      answers.budget === "darmowe")
  const qualified = allAnswered && !rejected

  const progress = ((step + (answered ? 1 : 0)) / total) * 100

  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto w-full max-w-3xl">
          {!submitted ? (
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:px-4 sm:text-xs">
                {qualification.badge}
              </span>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl">
                {qualification.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                {qualification.intro}
              </p>

              <div className="mt-9 sm:mt-12">
                <div className="flex items-center justify-between text-xs font-medium text-slate-400">
                  <span>
                    Krok {step + 1} z {total}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <fieldset className="mt-8 text-left sm:mt-10">
                <legend className="mb-3.5 text-sm font-semibold leading-snug text-white sm:text-base">
                  {current.label}
                </legend>
                <div className="space-y-2.5">
                  {current.options.map((option) => {
                    const active = answers[current.key] === option.value
                    return (
                      <button
                        key={option.value}
                        type="button"
                        aria-pressed={active}
                        onClick={() => select(option.value)}
                        className={cn(
                          "flex w-full items-start justify-between gap-3 rounded-xl border px-4 py-4 text-left text-sm font-medium leading-snug transition-colors sm:py-3.5 sm:text-[15px]",
                          active
                            ? "border-blue-500/60 bg-blue-500/10 text-white"
                            : "border-white/10 bg-white/[0.02] text-slate-300 hover:border-white/20 hover:bg-white/5"
                        )}
                      >
                        <span className="min-w-0">
                          <span className="block">{option.label}</span>
                          {option.hint && (
                            <span className="mt-0.5 block text-xs font-normal leading-snug text-slate-500">
                              {option.hint}
                            </span>
                          )}
                        </span>
                        {active && (
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                        )}
                      </button>
                    )
                  })}
                </div>
              </fieldset>

              <div className="mt-8 flex items-center justify-between gap-3 sm:mt-10">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="text-slate-400 hover:bg-white/5 hover:text-white disabled:opacity-30"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Wstecz
                </Button>

                {isLast ? (
                  <Button
                    type="button"
                    size="lg"
                    onClick={() => setSubmitted(true)}
                    disabled={!allAnswered}
                    className="bg-blue-600 text-sm font-bold text-white hover:bg-blue-700 disabled:opacity-40"
                  >
                    Sprawdź dostępność
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    size="lg"
                    onClick={() => setStep((s) => Math.min(total - 1, s + 1))}
                    disabled={!answered}
                    className="bg-blue-600 text-sm font-bold text-white hover:bg-blue-700 disabled:opacity-40"
                  >
                    Dalej
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center">
              {qualified ? (
                <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 sm:p-8">
                  <p className="text-lg font-semibold text-white">
                    {qualification.qualified.title}
                  </p>
                  <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
                    {qualification.qualified.body}
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="mt-6 w-full max-w-md whitespace-normal rounded-xl bg-blue-600 px-6 py-5 text-sm font-bold leading-tight text-white shadow-lg hover:bg-blue-700"
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
              ) : (
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                  <p className="text-lg font-semibold text-white">
                    {qualification.messages.rejected.title}
                  </p>
                  <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
                    {qualification.messages.rejected.body}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-6 border-white/15 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white"
                  >
                    <a href={qualification.messages.rejected.href}>
                      {qualification.messages.rejected.button}
                    </a>
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
