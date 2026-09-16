"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { CtaButton } from "@/components/cta-button"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"
import { SectionBadge } from "@/components/section-badge"
import { siteConfig } from "@/lib/site-config"
import type { QualificationContent } from "@/lib/content/types"

type QualificationResult = "qualified" | "rejected"

function stripStepNumber(label: string) {
  return label.replace(/^\s*\d+\.\s*/, "")
}

export function QualificationForm({
  qualification,
}: {
  qualification: QualificationContent
}) {
  const [result, setResult] = useState<QualificationResult | null>(null)

  const items = qualification.steps.map((step) => ({
    name: step.key,
    required: true,
    choices: step.options.map((option) => ({ value: option.value })),
  }))

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const rejected = qualification.disqualify.some((rule) =>
      rule.values.includes(String(formData.get(rule.key) ?? ""))
    )

    setResult(rejected ? "rejected" : "qualified")
  }

  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto w-full max-w-3xl">
          {result === null ? (
            <div className="text-center">
              <SectionBadge
                variant="neutral"
                className="text-[10px] sm:text-xs"
              >
                {qualification.badge}
              </SectionBadge>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
                {qualification.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {qualification.intro}
              </p>

              <Questionnaire
                items={items}
                onSubmit={handleSubmit}
                className="mt-9 gap-6 text-left sm:mt-12"
              >
                <QuestionnaireProgress
                  className="w-full"
                  render={(props, state) => (
                    <div
                      {...props}
                      aria-valuetext={`Krok ${state.current} z ${state.total}`}
                    >
                      <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                        <span>
                          Krok {state.current} z {state.total}
                        </span>
                        <span>
                          {Math.round((state.current / state.total) * 100)}%
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary transition-[width] duration-300"
                          style={{
                            width: `${(state.current / state.total) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  )}
                />

                {qualification.steps.map((step) => (
                  <QuestionnaireItem key={step.key} name={step.key} required>
                    <QuestionnaireTitle>
                      {stripStepNumber(step.label)}
                    </QuestionnaireTitle>
                    <QuestionnaireChoices>
                      {step.options.map((option) => (
                        <QuestionnaireChoice
                          key={option.value}
                          value={option.value}
                        >
                          <span className="font-medium">{option.label}</span>
                          {option.hint ? (
                            <QuestionnaireChoiceDescription>
                              {option.hint}
                            </QuestionnaireChoiceDescription>
                          ) : null}
                        </QuestionnaireChoice>
                      ))}
                    </QuestionnaireChoices>
                    <QuestionnaireError>
                      Wybierz jedną z odpowiedzi, aby przejść dalej.
                    </QuestionnaireError>
                  </QuestionnaireItem>
                ))}

                <QuestionnaireActions className="mt-2">
                  <QuestionnairePrevious>Wstecz</QuestionnairePrevious>
                  <QuestionnaireNext>Dalej</QuestionnaireNext>
                  <QuestionnaireSubmit>Sprawdź dostępność</QuestionnaireSubmit>
                </QuestionnaireActions>
              </Questionnaire>
            </div>
          ) : (
            <div className="text-center">
              {result === "qualified" ? (
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
                  <p className="text-lg font-semibold text-foreground">
                    {qualification.qualified.title}
                  </p>
                  <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {qualification.qualified.body}
                  </p>
                  <CtaButton
                    render={
                      <a
                        href={siteConfig.calendlyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                    nativeButton={false}
                    className="mt-6 w-full max-w-md"
                  >
                    {qualification.qualified.button}
                  </CtaButton>
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
                  <Button
                    render={<a href={qualification.messages.rejected.href} />}
                    nativeButton={false}
                    variant="outline"
                    className="mt-6"
                  >
                    {qualification.messages.rejected.button}
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
