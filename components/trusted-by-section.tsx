export function TrustedBySection() {
  const companies = ["Amway", "BNP Paribas", "Silent Eight", "Citi"];

  return (
    <section className="py-10 bg-slate-950 border-y border-slate-900/50">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-slate-400 mb-8 font-medium uppercase tracking-wider">
          Doświadczenie zdobyte w:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:opacity-100 transition-opacity duration-500">
          {companies.map((company) => (
            <span key={company} className="text-xl font-bold text-slate-300">
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
