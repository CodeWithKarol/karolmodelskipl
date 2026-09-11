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

export function FaqSection({ faq: customFaq, className }: FaqSectionProps = {}) {
  const faq = (customFaq ?? content.faq) as FaqData
  const title = faq.title ?? "Najczęściej zadawane pytania"

  return (
    <section
      id="faq"
      className={cn(
        "relative overflow-hidden border-t border-border bg-background py-16 sm:py-20 text-muted-foreground md:py-32",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>

      <div className="relative z-10 container mx-auto px-4 max-w-3xl">
        {/* Header - Mobile First */}
        <Reveal as="header" className="mb-12 text-center">
          <div className="mb-6">
            <SectionBadge>
            <HelpCircle className="h-4 w-4" />
            <span>FAQ</span>
          </SectionBadge>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            {title}
          </h2>
          {faq.subtitle && (
            <p className="text-muted-foreground font-light leading-relaxed text-base sm:text-lg">
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
                <AccordionTrigger className="py-4 sm:py-6 text-left text-sm sm:text-base font-bold text-foreground hover:text-foreground hover:no-underline transition-colors">
                  <span className="group-hover/faq:text-foreground group-hover/faq:translate-x-0.5 transition-transform duration-300">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent
                  className="max-w-prose pb-5 sm:pb-6 text-xs sm:text-sm leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-primary [&_a]:transition-colors [&_a:hover]:text-primary [&_a:hover]:underline"
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
