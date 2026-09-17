import { Mail, Phone } from "lucide-react"
import { SectionBadge } from "@/components/section-badge"
import { siteConfig } from "@/lib/site-config"

export function ContactHubSection() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden border-t border-border bg-background py-14 text-muted-foreground sm:py-20 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="relative z-10 container mx-auto max-w-4xl px-4 text-left lg:text-center">
        <header className="mb-10 sm:mb-14">
          <div className="mb-4 flex justify-start lg:justify-center">
            <SectionBadge className="text-[10px] sm:text-xs">
              Inżynieria IT • Bezpieczeństwo Bankowe • Bez Pośredników
            </SectionBadge>
          </div>
          <h2 className="mb-4 max-w-3xl text-2xl leading-tight font-semibold tracking-tight text-balance text-foreground sm:text-3xl md:text-4xl lg:mx-auto">
            Nie wiesz, która ścieżka rozwiąże problem w Twojej firmie?
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-pretty text-muted-foreground sm:text-base md:text-lg lg:mx-auto">
            Każdy projekt traktuję indywidualnie. Jeśli Twoje wyzwanie łączy
            kilka obszarów lub nie masz pewności, czy potrzebujesz dedykowanego
            systemu, modernizacji czy nadzoru nad agencją — opisz krótko obecną
            sytuację.
          </p>
        </header>

        <div className="max-w-xl divide-y divide-border border-y border-border lg:mx-auto">
          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex items-center gap-4 px-2 py-5 text-left transition-colors hover:bg-muted"
          >
            <Mail className="h-5 w-5 shrink-0 text-primary" />
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground">
                Napisz bezpośrednio do architekta
              </div>
              <div className="font-semibold break-words text-foreground transition-colors group-hover:text-primary">
                {siteConfig.email}
              </div>
            </div>
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="group flex items-center gap-4 px-2 py-5 text-left transition-colors hover:bg-muted"
          >
            <Phone className="h-5 w-5 shrink-0 text-primary" />
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground">
                Telefon / konsultacja wstępna
              </div>
              <div className="font-semibold text-foreground transition-colors group-hover:text-primary">
                {siteConfig.phoneDisplay}
              </div>
            </div>
          </a>
        </div>

        <div className="mt-10 max-w-xl text-left lg:mx-auto">
          <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
            Wolisz przejść od razu do konkretnego obszaru i sprawdzić dedykowane
            warunki wdrożenia?
          </p>
          <a
            href="#zwrotnica"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[oklch(48%_0.245_262.881)] transition-colors hover:text-[oklch(42%_0.245_262.881)]"
          >
            Wróć do wyboru obszarów współpracy ↑
          </a>
        </div>
      </div>
    </section>
  )
}
