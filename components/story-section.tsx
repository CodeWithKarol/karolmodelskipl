import { BadgeAlert, Target } from "lucide-react"
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
    <section id="historia" className="relative py-16 md:py-32 bg-slate-950 text-slate-300 border-t border-slate-900/50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/40 via-slate-950 to-slate-950"></div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-24">
          <h2 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] sm:leading-[1.1] tracking-tight text-balance">
            {story.title_part1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              {story.title_highlight}
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Lewa kolumna: Perspektywa klienta */}
          <div className="space-y-5 sm:space-y-6 md:pr-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
              <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{story.customer_perspective_tag}</span>
            </div>
            
            <h3 className="text-xl sm:text-3xl font-semibold text-slate-100 leading-snug">
              {firstIntroSentence}
            </h3>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed font-light">
              {restIntroText}
            </p>
          </div>

          {/* Prawa kolumna: Karta problemu tradycyjnego IT */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-lg transition-all duration-500 group-hover:from-red-500/30 group-hover:to-orange-500/30"></div>
            <div className="bg-slate-900 border border-slate-800 rounded-[1.5rem] p-6 sm:p-10 relative overflow-hidden shadow-2xl">
              
              <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-5">
                <BadgeAlert className="w-24 h-24 sm:w-32 sm:h-32" />
              </div>

              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8 relative">
                <div className="p-2.5 sm:p-3 bg-red-500/10 border border-red-500/20 rounded-xl sm:rounded-2xl shrink-0">
                  <BadgeAlert className="w-5 h-5 sm:w-7 sm:h-7 text-red-400" />
                </div>
                <h3 className="text-[1.1rem] sm:text-2xl font-bold text-white leading-snug">
                  {story.problem_title}
                </h3>
              </div>
              
              <div className="space-y-4 sm:space-y-6 relative text-slate-300">
                {problemParagraphs.map((paragraph, idx) => (
                  <p 
                    key={idx} 
                    className={`leading-relaxed text-[15px] sm:text-lg ${idx === problemParagraphs.length - 1 ? "text-slate-200 font-medium border-l-2 border-red-500/50 pl-4" : ""}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
