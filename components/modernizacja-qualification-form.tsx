"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { SectionBadge } from "@/components/section-badge"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

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
    (answers.scale === "ponizej5k" ||
      answers.authority === "pracownik" ||
      answers.budget === "przyszly" ||
      answers.budget === "darmowa")
  const qualified = allAnswered && !rejected

  const progress = ((step + (answered ? 1 : 0)) / total) * 100

  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto w-full max-w-3xl">
          {!submitted ? (
            <div className="text-center">
              <SectionBadge variant="neutral" className="text-[10px] sm:text-xs">
                {qualification.badge}
              </SectionBadge>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-balance text-foreground sm:text-4xl">
                {qualification.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {qualification.intro}
              </p>

              <div className="mt-9 sm:mt-12">
                <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                  <span>
                    Krok {step + 1} z {total}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="mt-2 h-1.5" />
              </div>

              <fieldset className="mt-8 text-left sm:mt-10">
                <legend className="mb-3.5 text-sm font-semibold leading-snug text-foreground sm:text-base">
                  {current.label}
                </legend>
                <RadioGroup
                  value={answers[current.key] ?? ""}
                  onValueChange={(value) => select(value)}
                  className="grid w-full gap-2.5"
                >
                  {current.options.map((option) => {
                    const id = `${current.key}-${option.value}`
                    const active = answers[current.key] === option.value
                    return (
                      <Label
                        key={option.value}
                        htmlFor={id}
                        className={cn(
                          "flex w-full cursor-pointer items-start justify-between gap-3 rounded-xl border px-4 py-4 text-left text-sm font-medium leading-snug transition-colors sm:py-3.5 sm:text-[15px]",
                          active
                            ? "border-primary/60 bg-primary/10 text-foreground"
                            : "border-border bg-card text-muted-foreground hover:border-input hover:bg-muted"
                        )}
                      >
                        <span className="min-w-0">
                          <span className="block">{option.label}</span>
                          {option.hint && (
                            <span className="mt-0.5 block text-xs font-normal leading-snug text-muted-foreground">
                              {option.hint}
                            </span>
                          )}
                        </span>
                        {active && (
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        )}
                        <RadioGroupItem
                          id={id}
                          value={option.value}
                          className="sr-only"
                        />
                      </Label>
                    )
                  })}
                </RadioGroup>
              </fieldset>

              <div className="mt-8 flex items-center justify-between gap-3 sm:mt-10">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="text-muted-foreground hover:bg-accent hover:text-accent-foreground disabled:opacity-30"
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
                    className="text-sm font-bold disabled:opacity-40"
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
                    className="text-sm font-bold disabled:opacity-40"
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
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
                  <p className="text-lg font-semibold text-foreground">
                    {qualification.qualified.title}
                  </p>
                  <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {qualification.qualified.body}
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="mt-6 w-full max-w-md whitespace-normal rounded-xl px-6 py-5 text-sm font-bold leading-tight shadow-lg"
                  >
                    <a
                      href={siteConfig.calendlyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {qualification.qualified.button}
                    </a>
                  </Button>
                  <p className="mt-3 text-[11px] font-medium text-muted-foreground">
                    {qualification.qualified.footer}
                  </p>
                </div>
              ) : (
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                  <p className="text-lg font-semibold text-foreground">
                    {qualification.messages.rejected.title}
                  </p>
                  <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {qualification.messages.rejected.body}
                  </p>
                  <Button asChild variant="outline" className="mt-6">
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
