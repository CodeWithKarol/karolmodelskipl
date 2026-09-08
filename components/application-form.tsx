"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ApplicationContent = {
  badge: string
  title: string
  intro: string
  steps: {
    key: string
    label: string
    options: { value: string; label: string; hint?: string }[]
  }[]
  messages: {
    early_stage: { title: string; body: string }
    no_budget: { title: string; body: string }
    research: { title: string; body: string }
    waitlist: { title: string; body: string }
  }
  qualified: {
    title: string
    body: string
    button: string
    footer: string
  }
}

export function ApplicationForm({ application }: { application: ApplicationContent }) {
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const stage = answers.stage
  const budget = answers.budget
  const timeline = answers.timeline
  const allAnswered = Boolean(stage && budget && timeline)

  let result: "stage" | "budget" | "research" | "waitlist" | "qualified" | null = null
  if (allAnswered) {
    if (stage === "poczatek") result = "stage"
    else if (budget === "ponizej20") result = "budget"
    else if (timeline === "rozeznanie") result = "research"
    else if (timeline === "3-6mies") result = "waitlist"
    else result = "qualified"
  }

  const select = (stepKey: string, value: string) =>
    setAnswers((prev) => ({ ...prev, [stepKey]: value }))

  return (
    <section id="aplikuj" className="pt-28 pb-16 sm:pt-36 sm:pb-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto w-full max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:px-4 sm:text-xs">
            {application.badge}
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl">
            {application.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {application.intro}
          </p>

          <div className="mt-9 sm:mt-12 text-left">
            {application.steps.map((step) => (
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
                Odpowiedz na wszystkie 3 pytania, aby zobaczyć dalszy krok.
              </p>
            )}

            {result === "stage" && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
                <p className="text-base font-semibold text-white">{application.messages.early_stage.title}</p>
                <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-400">{application.messages.early_stage.body}</p>
              </div>
            )}

            {result === "budget" && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
                <p className="text-base font-semibold text-white">{application.messages.no_budget.title}</p>
                <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-400">{application.messages.no_budget.body}</p>
              </div>
            )}

            {result === "research" && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
                <p className="text-base font-semibold text-white">{application.messages.research.title}</p>
                <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-400">{application.messages.research.body}</p>
              </div>
            )}

            {result === "waitlist" && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
                <p className="text-base font-semibold text-white">{application.messages.waitlist.title}</p>
                <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-400">{application.messages.waitlist.body}</p>
              </div>
            )}

            {result === "qualified" && (
              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5 text-center">
                <p className="text-base font-semibold text-white">{application.qualified.title}</p>
                <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-400">{application.qualified.body}</p>
                <Button
                  asChild
                  size="lg"
                  className="w-full max-w-md bg-blue-600 hover:bg-blue-700 text-white py-5 text-sm font-bold rounded-xl shadow-lg whitespace-normal h-auto leading-tight"
                >
                  <a href="https://calendly.com/kontakt-karolmodelski/30min" target="_blank" rel="noopener noreferrer">
                    {application.qualified.button}
                  </a>
                </Button>
                <p className="mt-3 text-[11px] font-medium text-slate-400">{application.qualified.footer}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
