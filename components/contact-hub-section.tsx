import { Mail, Phone } from "lucide-react"

export function ContactHubSection() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-14 text-slate-300 sm:py-20 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center">
        <header className="mb-10 sm:mb-14">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3.5 py-1.5 text-center text-[10px] font-bold uppercase leading-snug tracking-wider text-blue-400 sm:text-xs">
              Inżynieria IT • Bezpieczeństwo Bankowe • Bez Pośredników
            </span>
          </div>
          <h2 className="mx-auto mb-4 max-w-3xl text-2xl font-bold leading-tight tracking-tight text-balance text-white sm:text-3xl md:text-4xl">
            Nie wiesz, która ścieżka rozwiąże problem w Twojej firmie?
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-pretty text-slate-400 sm:text-base md:text-lg">
            Każdy projekt traktuję indywidualnie. Jeśli Twoje wyzwanie łączy
            kilka obszarów lub nie masz pewności, czy potrzebujesz dedykowanego
            systemu, modernizacji czy nadzoru nad agencją — opisz krótko obecną
            sytuację.
          </p>
        </header>

        <div className="mx-auto max-w-xl divide-y divide-slate-800/70 border-y border-slate-800/70">
          <a
            href="mailto:kontakt@karolmodelski.pl"
            className="group flex items-center gap-4 px-2 py-5 text-left transition-colors hover:bg-white/[0.02]"
          >
            <Mail className="h-5 w-5 shrink-0 text-blue-400" />
              <div className="min-w-0">
                <div className="text-xs text-slate-500">
                  Napisz bezpośrednio do architekta
                </div>
                <div className="font-semibold break-words text-white transition-colors group-hover:text-blue-400">
                  kontakt@karolmodelski.pl
                </div>
              </div>
          </a>
          <a
            href="tel:+48664598563"
            className="group flex items-center gap-4 px-2 py-5 text-left transition-colors hover:bg-white/[0.02]"
          >
            <Phone className="h-5 w-5 shrink-0 text-blue-400" />
            <div className="min-w-0">
              <div className="text-xs text-slate-500">
                Telefon / konsultacja wstępna
              </div>
              <div className="font-semibold text-white transition-colors group-hover:text-blue-400">
                +48 664 598 563
              </div>
            </div>
          </a>
        </div>

        <div className="mx-auto mt-10 max-w-xl">
          <p className="mb-3 text-xs leading-relaxed text-slate-400">
            Wolisz przejść od razu do konkretnego obszaru i sprawdzić dedykowane
            warunki wdrożenia?
          </p>
          <a
            href="#zwrotnica"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 transition-colors hover:text-blue-300"
          >
            Wróć do wyboru obszarów współpracy ↑
          </a>
        </div>
      </div>
    </section>
  )
}
