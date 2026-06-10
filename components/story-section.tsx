import { Building2, Flame, Lightbulb, ShieldCheck, ArrowRight } from "lucide-react"
import { content } from "@/lib/content"

export function StorySection() {
  const { story } = content;
  
  // Rozdzielamy tekst wprowadzenia na dwa logiczne bloki dla lepszej typografii
  const introParts = story.intro_text.split('. ');
  const firstIntroSentence = introParts[0] + (introParts.length > 1 ? '.' : '');
  const restIntroText = introParts.slice(1).join('. ');

  // Rozdzielamy paragrafy problemu
  const problemParagraphs = story.problem_text.split('\n\n');

  return (
    <section id="historia" className="relative py-20 md:py-32 bg-slate-950 text-slate-300 border-t border-slate-900/50 overflow-hidden">
      {/* Delikatne Tło */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/40 via-slate-950 to-slate-950"></div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        
        {/* Główny Nagłówek Sekcji */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] sm:leading-[1.1] tracking-tight text-balance">
            {story.title_part1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {story.title_highlight}
            </span>
          </h2>
        </div>

        {/* CZĘŚĆ 1: KONTRAST (Świat Korporacji vs Problem Rynku) */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto items-stretch">
          
          {/* Karta 1: Moja Historia (Backstory) */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-[2rem] p-8 sm:p-10 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-60"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
                <Building2 className="w-4 h-4" />
                <span>{story.customer_perspective_tag}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-5">
                {firstIntroSentence}
              </h3>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-light">
                {restIntroText}
              </p>
            </div>
          </div>

          {/* Karta 2: Mroczny Sekret (Problem) */}
          <div className="bg-gradient-to-b from-red-950/20 to-slate-900/60 border border-red-900/30 rounded-[2rem] p-8 sm:p-10 relative overflow-hidden group hover:border-red-500/30 transition-colors">
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 blur-[80px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-60"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
                <Flame className="w-4 h-4" />
                <span>Mroczny Sekret Branży</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-5">
                {story.problem_title}
              </h3>
              <div className="space-y-4 text-base sm:text-lg text-slate-400 leading-relaxed font-light">
                {problemParagraphs.map((paragraph, idx) => (
                  <p key={idx} className={idx === problemParagraphs.length - 1 ? "text-slate-300 font-medium" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* CZĘŚĆ 2: OLŚNIENIE I MISJA (Rozwiązanie / The Shift) */}
        <div className="mt-16 md:mt-24 max-w-5xl mx-auto">
          <div className="relative group">
            {/* Tło i poświata pod kartą */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-emerald-500/20 to-blue-600/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-70 transition duration-500"></div>
            
            <div className="bg-slate-900 border border-slate-700/50 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 md:p-14 relative overflow-hidden shadow-2xl backdrop-blur-sm">
              {/* Grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start relative z-10">
                
                {/* Lewa strona dużej karty */}
                <div className="lg:col-span-5 text-center lg:text-left lg:sticky lg:top-10">
                  <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6 mx-auto lg:mx-0 flex-shrink-0">
                    <Lightbulb className="w-4 h-4" />
                    <span>{story.paradigm_tag}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] lg:leading-[1.15] text-balance max-w-2xl mx-auto lg:mx-0">
                    {story.paradigm_title}
                  </h2>
                </div>

                {/* Prawa strona dużej karty */}
                <div className="lg:col-span-7 space-y-6 sm:space-y-8 lg:space-y-10 mt-2 lg:mt-0">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6 items-center sm:items-start">
                    <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl shrink-0 sm:mt-1 hidden sm:block">
                      <ShieldCheck className="w-6 h-6 lg:w-7 lg:h-7 text-blue-400" />
                    </div>
                    <p className="text-[15px] sm:text-lg lg:text-xl text-slate-300 leading-[1.6] lg:leading-[1.7] text-center sm:text-left">
                      {story.paradigm_text_1}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6 items-center sm:items-start bg-slate-950/60 border border-slate-800/80 p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-[1.5rem] shadow-inner">
                    <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl shrink-0 sm:mt-1 hidden sm:block">
                      <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-400" />
                    </div>
                    <p className="text-[15px] sm:text-lg lg:text-xl text-slate-200 font-medium leading-[1.6] lg:leading-[1.7] text-center sm:text-left">
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
