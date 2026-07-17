import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Code2,
  LineChart,
  Lock,
  CheckCircle2,
  Server,
} from "lucide-react"
import { content } from "@/lib/content"

export function HeroSection() {
  const { hero } = content
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden bg-slate-950 pt-20 pb-8 text-slate-50 selection:bg-blue-500/30 sm:py-12 sm:pt-28 lg:py-20 lg:pt-36">
      {/* Dynamiczne Tło i Gradienty */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950 to-slate-950"></div>
      <div className="absolute top-1/4 right-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-blue-600/10 opacity-60 mix-blend-screen blur-[100px] lg:h-[800px] lg:w-[800px]"></div>
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-cyan-600/5 opacity-60 mix-blend-screen blur-[100px]"></div>

      {/* Delikatny grid technologiczny */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:3rem_3rem] opacity-20"></div>

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-center">
          
          {/* Lewa kolumna: Tekst i CTA */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* MOBILNY TRIGGER AUTORYTETU (Tylko na Mobile/Tablet) */}
            <div className="flex lg:hidden items-center gap-3 mb-6 bg-slate-900/40 border border-slate-800/80 rounded-full pl-1.5 pr-4 py-1.5 w-fit backdrop-blur-sm">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-blue-500/30">
                <img 
                  src="/karol.webp" 
                  alt="Karol Modelski - Niezależny Partner Technologiczny" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-100 leading-none">Karol Modelski</span>
                <span className="text-[8px] sm:text-[10px] text-blue-400 font-medium leading-none mt-1">Niezależny Partner Technologiczny</span>
              </div>
            </div>

            {/* Główny Nagłówek */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-extrabold tracking-tight text-white mb-4 leading-tight">
              <span className="block mb-0.5 sm:mb-1">{hero.h1_part1}</span>
              <span className="block mb-0.5 sm:mb-1">{hero.h1_part2}</span>
              <span className="text-blue-400">{hero.h1_highlight}</span>
            </h1>

            {/* Podnagłówek */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 mb-6 sm:mb-8 leading-relaxed font-light text-balance">
              {hero.subheading}
            </p>

            {/* Oferta / CTA - Mobile First */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 sm:p-6 text-left shadow-2xl backdrop-blur-sm relative overflow-hidden group/card">
              {/* Efekt świetlny w tle karty */}
              <div className="absolute -right-20 -top-20 h-32 w-32 rounded-full bg-blue-500/5 blur-[40px] transition-all duration-700 group-hover/card:bg-blue-500/10"></div>
              
              {/* Badge limitowanej oferty */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-[10px] sm:text-xs font-medium text-blue-400 mb-4 sm:mb-6">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                </span>
                Oferta Limitowana: Darmowy Pakiet Doradczy
              </div>

              <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-tight">
                Zanim zainwestujesz w aplikację, zdejmijmy z Ciebie całe ryzyko:
              </h3>

              <div className="space-y-3.5 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  { title: "Mapa Drogowa Modernizacji IT", desc: "ścieżka wdrożenia aplikacji w 30 dni", val: "200 zł" },
                  { title: "Diagnoza Wąskich Gardeł", desc: "lokalizacja miejsc blokujących Twoje zyski", val: "300 zł" },
                  { title: "Analiza Bezpieczeństwa", desc: "weryfikacja pomysłu pod kątem standardów bankowych", val: "100 zł" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 sm:gap-3.5 group/item transition-colors duration-300">
                    <div className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 group-hover/item:bg-blue-500/20 transition-all">
                      <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </div>
                    <div className="flex-1 space-y-0.5">
                      <p className="text-xs sm:text-sm font-semibold text-slate-100 group-hover/item:text-blue-300 transition-colors">
                        {item.title}
                      </p>
                      <p className="text-[10px] sm:text-xs text-slate-400 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                    <div className="text-[10px] sm:text-xs font-mono font-medium text-blue-400/80 bg-blue-500/5 border border-blue-500/10 px-1.5 sm:px-2 py-0.5 rounded">
                      +{item.val}
                    </div>
                  </div>
                ))}
              </div>

              {/* Sekcja Podsumowania i CTA */}
              <div className="border-t border-slate-800/60 pt-4 sm:pt-6 space-y-4">
                <div className="flex items-center justify-between text-[10px] sm:text-xs text-slate-400 font-medium px-0.5">
                  <span>Wartość pakietu: <span className="line-through text-slate-500 font-mono">600 zł</span></span>
                  <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">Cena dla Ciebie: 0 zł</span>
                </div>

                <a href="https://calendly.com/kontakt-karolmodelski/30min" target="_blank" rel="noopener noreferrer" className="block w-full group/btn">
                  <div className="relative">
                    <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-20 blur group-hover/btn:opacity-40 transition duration-300"></div>
                    <Button size="lg" className="relative bg-blue-600 hover:bg-blue-500 text-white w-full py-5 sm:py-6 text-xs sm:text-base font-bold shadow-lg whitespace-normal leading-tight rounded-xl border border-blue-400/20">
                      Odbierz Pakiet za Darmo
                    </Button>
                  </div>
                </a>
                
                <p className="text-[10px] sm:text-[11px] text-slate-500 text-center leading-normal">
                  Dzisiaj za 0 zł • Rozmowa przez wideo • {hero.click_trigger_part2}
                </p>
              </div>
            </div>
          </div>

          {/* DESKTOP-ONLY: Profesjonalny Portret (Ukryty na Mobile/Tablet) */}
          <div className="hidden lg:col-span-5 lg:flex justify-center items-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-2xl overflow-hidden border border-slate-800/80 shadow-[0_0_50px_-12px_rgba(59,130,246,0.25)] bg-slate-900 group">
              <Image 
                src="/karol.webp" 
                alt="Karol Modelski - Niezależny Partner Technologiczny" 
                fill
                priority
                sizes="400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
              
              {/* Odznaka z autorytetem na zdjęciu */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 border border-slate-800 rounded-xl p-3 backdrop-blur-md">
                <p className="text-xs font-bold text-white">Karol Modelski</p>
                <p className="text-[10px] text-blue-400 font-medium">Niezależny Partner Technologiczny</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}


