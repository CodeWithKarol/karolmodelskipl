import { Flame } from "lucide-react"
import { content } from "@/lib/content"

export function StorySection() {
  const { story } = content

  return (
    <section
      id="problem"
      className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-20 text-slate-300 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        {/* Header - Mobile First */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-xs font-bold text-red-400 uppercase tracking-wider">
            <Flame className="h-4 w-4" />
            <span>Diagnoza problemu</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
            {story.title}
          </h2>
          <p 
            className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-base sm:text-lg mb-4 [&_em]:text-slate-200 [&_em]:not-italic [&_em]:font-medium"
            dangerouslySetInnerHTML={{ __html: story.intro }} 
          />
          <p 
            className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-base sm:text-lg [&_.italic]:italic [&_.italic]:text-slate-200"
            dangerouslySetInnerHTML={{ __html: story.context }}
          />
        </div>

        {/* Points Grid - Mobile: 1 col, Tablet+: 2 col */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {story.points.map((point, idx) => (
            <div 
              key={idx} 
              className="group relative bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl hover:border-slate-700 transition-all duration-300"
            >
              <div className="text-red-500 mb-4 font-black text-xl sm:text-2xl opacity-50 group-hover:opacity-100 transition-opacity">
                0{idx + 1}
              </div>
              <h4 
                className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors [&_strong]:text-white"
                dangerouslySetInnerHTML={{ __html: point.title }}
              />
              <p 
                className="text-slate-400 leading-relaxed text-xs sm:text-sm [&_em]:text-slate-300 [&_em]:not-italic [&_em]:font-medium"
                dangerouslySetInnerHTML={{ __html: point.desc }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
