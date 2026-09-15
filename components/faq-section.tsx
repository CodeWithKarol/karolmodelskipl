import { HelpCircle } from "lucide-react"
import { content } from "@/lib/content"
import { SectionBadge } from "@/components/section-badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

export interface FaqItem {
  question: string
  answer: string
}

interface FaqData {
  title?: string
  subtitle?: string
  items: FaqItem[]
}

interface FaqSectionProps {
  faq?: FaqData
  className?: string
}

export function FaqSection({
  faq: customFaq,
  className,
}: FaqSectionProps = {}) {
  const faq = (customFaq ?? content.faq) as FaqData
  const title = faq.title ?? "Najczęściej zadawane pytania"

  return (
    <section
      id="faq"
      className={cn(
        "relative overflow-hidden border-t border-border bg-background py-16 text-muted-foreground sm:py-20 md:py-32",
        className
      )}
    >
      <div className="relative z-10 container mx-auto max-w-3xl px-4">
        {/* Header - Mobile First */}
        <Reveal as="header" className="mb-12 text-center">
          <div className="mb-6">
            <SectionBadge>
              <HelpCircle className="h-4 w-4" />
              <span>FAQ</span>
            </SectionBadge>
          </div>
          <h2 className="mb-6 text-2xl leading-tight font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            {title}
          </h2>
          {faq.subtitle && (
            <p className="text-base leading-relaxed font-normal text-muted-foreground sm:text-lg">
              {faq.subtitle}
            </p>
          )}
        </Reveal>

        {/* Akordeon - borderless, hairline dividers */}
        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {faq.items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group/faq border-border transition-colors data-[state=open]:border-primary/40"
              >
                <AccordionTrigger className="py-4 text-left text-sm font-semibold text-foreground transition-colors hover:text-foreground hover:no-underline sm:py-6 sm:text-base">
                  <span className="transition-transform duration-300 group-hover/faq:translate-x-0.5 group-hover/faq:text-foreground">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent
                  className="max-w-prose pb-5 text-xs leading-relaxed text-muted-foreground sm:pb-6 sm:text-sm [&_a]:font-medium [&_a]:text-primary [&_a]:transition-colors [&_a:hover]:text-primary [&_a:hover]:underline"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
