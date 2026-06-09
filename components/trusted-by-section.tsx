import { ShieldCheck } from "lucide-react"

export function TrustedBySection() {
  const companies = [
    { name: "Citi", type: "Bankowość Inwestycyjna" },
    { name: "BNP Paribas", type: "Finanse Międzynarodowe" },
    { name: "Silent Eight", type: "AI & Cyberbezpieczeństwo" },
    { name: "Amway", type: "E-commerce Globalny" }
  ];

  return (
    <section className="relative py-12 md:py-16 bg-slate-950 border-t border-slate-900/50 overflow-hidden">
      {/* Subtelne tło z gradientem skupiającym wzrok na środku */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/40 via-slate-950 to-slate-950"></div>
      
      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-3 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-300">
              Moje Portfolio Doświadczeń
            </span>
          </div>
          <h3 className="text-center text-xl md:text-2xl font-semibold text-white mb-2 text-balance">
            Doświadczenie, które gwarantuje stabilność Twojego biznesu
          </h3>
          <p className="text-center text-sm md:text-base text-slate-400 font-normal max-w-2xl text-balance mx-auto">
            Przenoszę rygorystyczne standardy z globalnych instytucji wprost do Twojej firmy. Otrzymujesz niezawodny, błyskawiczny system, który chroni dane i bez zadyszki obsługuje każdy wzrost sprzedaży.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10">
          {companies.map((company) => (
            <div 
              key={company.name} 
              className="flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-900/30 hover:bg-slate-900/60 border border-slate-800/40 hover:border-slate-700/60 rounded-2xl transition-all duration-300 group min-w-[140px] sm:min-w-[180px] backdrop-blur-sm"
            >
              <span className="text-lg sm:text-2xl font-bold text-slate-300 group-hover:text-white transition-colors duration-300 tracking-tight">
                {company.name}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 group-hover:text-blue-400/80 mt-1 sm:mt-1.5 font-medium transition-colors duration-300">
                {company.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
