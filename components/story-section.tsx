import { BadgeAlert, Lightbulb, Rocket, ShieldCheck, TrendingUp, Zap } from "lucide-react"
import { content } from "@/lib/content"

export function StorySection() {
  const { story } = content;
  return (
    <section id="historia" className="relative py-16 md:py-32 bg-slate-950 text-slate-300 border-t border-slate-900/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/40 via-slate-950 to-slate-950"></div>

      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        
        <div className="text-center mb-12 md:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight text-balance">
            {story.title_part1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{story.title_highlight}</span>
          </h2>
        </div>

        <div className="space-y-8 md:space-y-16 text-base md:text-lg lg:text-xl leading-relaxed font-light">
          
          <div className="relative pl-4 sm:pl-8 border-l-4 border-blue-500/50">
            <p className="text-slate-100 font-medium text-lg md:text-2xl mb-4">
              Cześć, nazywam się <span className="text-white font-bold">{story.intro_name}</span>.
            </p>
            <p>{story.intro_text}</p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 sm:p-8">
            <div className="flex items-center sm:items-center gap-2.5 sm:gap-3 mb-4">
              <BadgeAlert className="w-5 h-5 sm:w-8 sm:h-8 text-amber-500 shrink-0" />
              <h3 className="text-base sm:text-xl font-bold text-white leading-snug break-words">{story.problem_title}</h3>
            </div>
            <p className="text-slate-300">{story.problem_text}</p>
          </div>

          <div className="text-center py-4">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-900/20 border border-blue-500/30 mb-4 shadow-[0_0_20px_-5px_rgba(59,130,246,0.2)]">
              <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
            </div>
            <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight">{story.epiphany}</h3>
          </div>

          <div className="space-y-6">
            <p>{story.solution_text}</p>
            
            <h4 className="text-lg md:text-xl font-bold text-white pt-2">{story.benefits_title}</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {story.benefits.map((item, i) => {
                const Icon = i === 0 ? ShieldCheck : i === 1 ? Rocket : i === 2 ? Zap : TrendingUp;
                return (
                  <div key={i} className="bg-slate-900 border border-slate-800 p-4 sm:p-5 rounded-xl hover:border-blue-500/30 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mb-2 sm:mb-3" />
                    <h5 className="font-bold text-slate-100 text-sm sm:text-base mb-1">{item.title}</h5>
                    <p className="text-xs sm:text-sm text-slate-400">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-transparent border-l-4 border-blue-500 p-6 sm:p-8 mt-8">
            <p className="text-lg md:text-2xl font-medium text-white italic leading-relaxed">
              &quot;{story.commitment}&quot;
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
