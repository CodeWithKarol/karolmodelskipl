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
        {/* Nagłówek Sekcji */}
        <div className="mx-auto mb-12 text-center md:mb-20">
          <div className="mb-6 inline-flex items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 p-3 shadow-lg">
            <HelpCircle className="h-6 w-6 text-blue-400" />
          </div>
          <h2 className="mb-4 text-[2rem] leading-[1.15] font-extrabold tracking-tight text-balance text-white sm:text-4xl md:mb-6 md:text-5xl lg:text-5xl">
            Najczęściej Zadawane <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Pytania (FAQ)
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-[15px] leading-relaxed font-light text-balance text-slate-400 sm:text-lg md:text-xl">
            {faq.subtitle}
          </p>
        </div>

        {/* Akordeon */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faq.items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-slate-800/60 bg-slate-900/40 px-6 backdrop-blur-sm transition-colors hover:border-slate-700 data-[state=open]:border-blue-500/30 data-[state=open]:bg-slate-900/60 data-[state=open]:shadow-[0_0_30px_-10px_rgba(59,130,246,0.1)]"
            >
              <AccordionTrigger className="py-5 text-left text-[15px] font-semibold text-slate-200 transition-colors hover:text-white hover:no-underline sm:py-6 sm:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-[14px] leading-relaxed font-light text-slate-400 sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
