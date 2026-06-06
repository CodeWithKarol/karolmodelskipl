import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, ShieldCheck, Zap, Sparkles } from "lucide-react"
import { content } from "@/lib/content"

export function HeroSection() {
  const { hero } = content;
  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-50 min-h-[100dvh] flex items-center selection:bg-blue-500/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[200px] bg-blue-500/10 blur-[100px] rounded-[100%] opacity-50"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container relative z-10 mx-auto px-4 py-12 md:py-32 max-w-6xl">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center gap-6 md:gap-8">
          
          <div className="relative group cursor-default">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-20 transition duration-500"></div>
            <div className="relative flex items-center gap-2 sm:gap-3 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 shadow-2xl">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs sm:text-sm font-medium text-slate-300 tracking-wide">
                {hero.eyebrow}
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] sm:leading-[1.1] mt-2">
            {hero.h1_part1} <br className="hidden sm:block" /> {hero.h1_part2}
            <span className="block mt-1 sm:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              {hero.h1_highlight}
            </span>
          </h1>
          
          <p className="text-sm sm:text-lg md:text-xl leading-relaxed text-slate-400 text-balance max-w-2xl font-normal px-2">
            {hero.subheading}
          </p>
          
          <div className="w-full flex flex-col items-center mt-4">
            <a 
              href="https://calendly.com/kontakt-karolmodelski/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
                <Button 
                  size="lg" 
                  className="h-auto py-4 px-4 sm:py-5 sm:px-8 text-[11px] sm:text-base md:text-lg bg-blue-600 hover:bg-blue-500 text-white rounded-2xl w-full sm:w-auto shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)] transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <span className="text-center leading-[1.2] whitespace-normal">{hero.cta}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Button>
            </a>
            
            <p className="mt-4 text-[10px] sm:text-xs text-slate-500 font-medium uppercase tracking-[0.05em] flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 opacity-80 leading-snug">
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <ShieldCheck className="w-3 h-3 shrink-0" />
                100% darmowa konsultacja
              </span>
              <span className="hidden sm:inline text-slate-700">•</span>
              <span className="whitespace-nowrap">Zero zobowiązań</span>
            </p>
          </div>
          
          <div className="mt-8 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-8 border-t border-slate-800/60 pt-6 md:pt-10 w-full max-w-2xl mx-auto px-4">
            {hero.indicators.map((ind, i) => (
              <div key={i} className="flex sm:flex-col items-center gap-3 bg-slate-900/30 p-3 rounded-xl sm:bg-transparent sm:p-0">
                {i === 0 ? <Zap className="h-5 w-5 text-blue-500/70" /> : i === 1 ? <ShieldCheck className="h-5 w-5 text-blue-500/70" /> : <Code2 className="h-5 w-5 text-blue-500/70" />}
                <span className="text-xs sm:text-sm font-medium text-slate-300">{ind.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
