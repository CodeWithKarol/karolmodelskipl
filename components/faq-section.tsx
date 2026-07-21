import { HelpCircle } from "lucide-react"
import { content } from "@/lib/content"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
  const { faq } = content

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-20 text-slate-300 md:py-32"
    >
      {/* Świetlne akcenty w tle dopasowane do reszty strony */}
      <div className="pointer-events-none absolute top-1/2 left-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[100px]"></div>
      <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-600/5 blur-[120px]"></div>

      <div className="relative z-10 container mx-auto max-w-4xl px-4">
        {/* Header - Mobile First */}
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
            <HelpCircle className="h-4 w-4" />
            <span>FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
            Najczęściej zadawane pytania
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-base sm:text-lg">
            {faq.subtitle}
          </p>
        </div>

        {/* Akordeon */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faq.items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-slate-800/60 bg-slate-900/40 px-5 sm:px-6 backdrop-blur-sm transition-colors hover:border-slate-700"
            >
              <AccordionTrigger className="py-4 sm:py-6 text-left text-sm sm:text-base font-bold text-slate-200 hover:text-white hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 sm:pb-6 text-xs sm:text-sm leading-relaxed text-slate-400">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
