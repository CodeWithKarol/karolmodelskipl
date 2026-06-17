import {
  Building2,
  Flame,
  Lightbulb,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"
import { content } from "@/lib/content"

export function StorySection() {
  const { story } = content

  // Rozdzielamy tekst wprowadzenia na dwa logiczne bloki dla lepszej typografii
  const introParts = story.intro_text.split(". ")
  const firstIntroSentence = introParts[0] + (introParts.length > 1 ? "." : "")
  const restIntroText = introParts.slice(1).join(". ")

  // Rozdzielamy paragrafy problemu
  const problemParagraphs = story.problem_text.split("\n\n")

  return (
    <section
      id="historia"
      className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-20 text-slate-300 md:py-32"
    >
      {/* Delikatne Tło */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/40 via-slate-950 to-slate-950"></div>

      <div className="relative z-10 container mx-auto max-w-6xl px-4">
        {/* Główny Nagłówek Sekcji */}
        <div className="mx-auto mb-16 max-w-4xl text-center md:mb-24">
          <h2 className="text-[1.75rem] leading-[1.15] font-extrabold tracking-tight text-balance text-white sm:text-4xl sm:leading-[1.1] md:text-5xl lg:text-6xl">
            {story.title_part1}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {story.title_highlight}
            </span>
          </h2>
        </div>

        {/* CZĘŚĆ 1: KONTRAST (Świat Korporacji vs Problem Rynku) */}
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 md:gap-10 lg:grid-cols-2">
          {/* Karta 1: Moja Historia (Backstory) */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-7 transition-colors hover:border-blue-500/30 sm:p-10">
            <div className="pointer-events-none absolute top-0 right-0 h-48 w-48 rounded-full bg-blue-500/10 opacity-60 blur-[80px] transition-opacity group-hover:opacity-100"></div>
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-400 sm:mb-8 sm:text-sm">
                <Building2 className="h-4 w-4" />
                <span>{story.customer_perspective_tag}</span>
              </div>
              <h3 className="mb-5 text-xl leading-snug font-bold text-balance text-white sm:text-2xl lg:text-[1.35rem]">
                {firstIntroSentence}
              </h3>
              <p className="text-[15px] leading-relaxed font-light text-slate-400 sm:text-lg">
                {restIntroText}
              </p>
            </div>
          </div>

          {/* Karta 2: Mroczny Sekret (Problem) */}
          <div className="group relative overflow-hidden rounded-3xl border border-red-900/30 bg-gradient-to-b from-red-950/20 to-slate-900/60 p-7 transition-colors hover:border-red-500/30 sm:p-10">
            <div className="pointer-events-none absolute top-0 right-0 h-48 w-48 rounded-full bg-red-500/10 opacity-60 blur-[80px] transition-opacity group-hover:opacity-100"></div>
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-400 sm:mb-8 sm:text-sm">
                <Flame className="h-4 w-4" />
                <span>Mroczny Sekret Branży</span>
              </div>
              <h3 className="mb-5 text-xl leading-snug font-bold text-balance text-white sm:text-2xl lg:text-[1.35rem]">
                {story.problem_title}
              </h3>
              <div className="space-y-4 text-[15px] leading-relaxed font-light text-slate-400 sm:text-lg">
                {problemParagraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={
                      idx === problemParagraphs.length - 1
                        ? "font-medium text-slate-300"
                        : ""
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CZĘŚĆ 2: OLŚNIENIE I MISJA (Rozwiązanie / The Shift) */}
        <div className="mx-auto mt-16 max-w-5xl md:mt-24">
          <div className="group relative">
            {/* Tło i poświata pod kartą */}
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-blue-600/20 via-emerald-500/20 to-blue-600/20 opacity-50 blur-xl transition duration-500 group-hover:opacity-70"></div>

            <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-700/50 bg-slate-900 p-6 shadow-2xl backdrop-blur-sm sm:rounded-[2rem] sm:p-10 md:p-14">
              {/* Grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

              <div className="relative z-10 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
                {/* Lewa strona dużej karty */}
                <div className="text-center lg:sticky lg:top-10 lg:col-span-5 lg:text-left">
                  <div className="mx-auto mb-4 inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400 sm:mb-6 sm:text-sm lg:mx-0 lg:justify-start">
                    <Lightbulb className="h-4 w-4" />
                    <span>{story.paradigm_tag}</span>
                  </div>
                  <h2 className="mx-auto max-w-2xl text-2xl leading-[1.2] font-extrabold text-balance text-white sm:text-3xl md:text-4xl lg:mx-0 lg:text-5xl lg:leading-[1.15]">
                    {story.paradigm_title}
                  </h2>
                </div>

                {/* Prawa strona dużej karty */}
                <div className="mt-2 space-y-6 sm:space-y-8 lg:col-span-7 lg:mt-0 lg:space-y-10">
                  <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-5 lg:gap-6">
                    <div className="hidden shrink-0 rounded-xl border border-blue-500/20 bg-blue-500/10 p-3 sm:mt-1 sm:block">
                      <ShieldCheck className="h-6 w-6 text-blue-400 lg:h-7 lg:w-7" />
                    </div>
                    <p className="text-center text-[15px] leading-[1.6] text-slate-300 sm:text-left sm:text-lg lg:text-xl lg:leading-[1.7]">
                      {story.paradigm_text_1}
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 shadow-inner sm:flex-row sm:items-start sm:gap-5 sm:rounded-[1.5rem] sm:p-6 lg:gap-6 lg:p-8">
                    <div className="hidden shrink-0 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-2.5 sm:mt-1 sm:block">
                      <ArrowRight className="h-5 w-5 text-emerald-400 lg:h-6 lg:w-6" />
                    </div>
                    <p className="text-center text-[15px] leading-[1.6] font-medium text-slate-200 sm:text-left sm:text-lg lg:text-xl lg:leading-[1.7]">
                      {story.paradigm_text_2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
