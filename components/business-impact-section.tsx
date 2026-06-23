import { Zap, Headphones, BarChart3 } from "lucide-react"

export function BusinessImpactSection() {
  const impacts = [
    {
      title: "Automatyzacja procesów",
      description:
        "Eliminacja powtarzalnych zadań dzięki dedykowanym narzędziom, co pozwala zespołowi skupić się na strategii.",
      icon: Zap,
    },
    {
      title: "Obsługa klientów",
      description:
        "Platformy wspierające komunikację i obsługę, przekładające się na wyższą retencję i zadowolenie klientów.",
      icon: Headphones,
    },
    {
      title: "Analityka sprzedaży",
      description:
        "Wgląd w kluczowe dane w czasie rzeczywistym, pozwalający podejmować decyzje oparte na faktach, a nie intuicji.",
      icon: BarChart3,
    },
  ]

  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-slate-300 sm:py-24">
      {/* Świetlne akcenty w tle dopasowane do Hero */}
      <div className="pointer-events-none absolute top-0 left-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px]"></div>
      <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-600/5 blur-[120px]"></div>

      {/* Delikatny grid technologiczny */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:3rem_3rem] opacity-20"></div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        {/* Nagłówek Sekcji dopasowany do reszty strony */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <h2 className="mb-6 text-[2rem] leading-[1.15] font-extrabold tracking-tight text-balance text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            Jak aplikacje internetowe <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              wspierają Twoją firmę?
            </span>
          </h2>
          <p className="mx-auto max-w-2xl px-2 text-[15px] leading-relaxed font-light text-balance text-slate-400 sm:px-0 sm:text-lg md:text-xl">
            Nowoczesne oprogramowanie to nie tylko technologia. To inwestycja,
            która odciąża zespół, redukuje koszty operacyjne i bezpośrednio
            przekłada się na wzrost przychodów.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {impacts.map((item, index) => (
            <div
              key={index}
              className={`group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-slate-900/80 sm:p-10 ${
                index === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Efekt podświetlenia karty od góry */}
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-transparent via-blue-500/0 to-transparent transition-all duration-500 group-hover:via-blue-500/50"></div>

              <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full bg-blue-500/10 opacity-0 blur-[40px] transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-950 shadow-inner transition-transform duration-500 group-hover:scale-105 sm:h-16 sm:w-16">
                  <item.icon className="h-7 w-7 text-blue-400 transition-colors group-hover:text-cyan-300 sm:h-8 sm:w-8" />
                </div>

                <h3 className="mb-3 text-xl leading-snug font-bold text-white sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-auto text-[15px] leading-relaxed font-light text-slate-400 sm:text-[17px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
