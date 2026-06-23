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
              <p
                className="text-[15px] leading-relaxed font-light text-slate-400 sm:text-lg [&_a]:font-medium [&_a]:text-blue-400 [&_a]:transition-colors [&_a:hover]:text-blue-300 [&_a:hover]:underline"
                dangerouslySetInnerHTML={{ __html: restIntroText }}
              />
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
              <div className="space-y-4 text-[15px] leading-relaxed font-light text-slate-400 sm:text-lg [&_a]:font-medium [&_a]:text-blue-400 [&_a]:transition-colors [&_a:hover]:text-blue-300 [&_a:hover]:underline">
                {problemParagraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={
                      idx === problemParagraphs.length - 1
                        ? "font-medium text-slate-300"
                        : ""
                    }
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CZĘŚĆ 2: OLŚNIENIE I MISJA (Rozwiązanie / The Shift) */}
        <div className="mx-auto mt-20 max-w-5xl border-t border-slate-800/60 pt-16 md:mt-32 md:pt-20">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Lewa strona - Nagłówek */}
            <div className="lg:sticky lg:top-10 lg:col-span-5">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <span className="text-sm font-bold tracking-wider text-emerald-400 uppercase">
                  {story.paradigm_tag}
                </span>
              </div>
              <h2 className="text-3xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                {story.paradigm_title}
              </h2>
            </div>

            {/* Prawa strona - Treść bez ramek */}
            <div className="flex flex-col gap-8 lg:col-span-7">
              <p className="text-lg leading-[1.7] text-slate-300">
                {story.paradigm_text_1}
              </p>

              <div className="relative pl-6 sm:pl-8">
                {/* Ozdobna linia akcentująca */}
                <div className="absolute top-0 bottom-0 left-0 w-1 rounded-full bg-gradient-to-b from-emerald-500 to-blue-500"></div>
                <p className="text-xl leading-[1.6] font-medium text-white">
                  {story.paradigm_text_2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
