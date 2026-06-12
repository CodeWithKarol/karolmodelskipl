import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { content } from "@/lib/content"

export function Footer() {
  const { footer } = content;

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-12 md:py-20 relative overflow-hidden">
      {/* Delikatne tło stopki */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>
      
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Kolumna 1: Krótkie podsumowanie marki (UVP) */}
          <div className="lg:col-span-4 xl:col-span-5 space-y-5">
            <h3 className="text-white text-xl font-bold tracking-tight flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-base font-black shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] border border-blue-400/20">
                KM
              </span>
              {footer.col1.name}
            </h3>
            <p className="font-bold text-blue-400 text-[13px] tracking-[0.1em] uppercase">
              {footer.col1.title}
            </p>
            <p className="text-sm sm:text-[15px] leading-relaxed text-slate-300 max-w-md font-light">
              {footer.col1.description}
            </p>
          </div>

          {/* Kolumna 2: Dane kontaktowe i NAP (Local SEO) */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-6">
            <h3 className="text-white text-base sm:text-lg font-bold tracking-tight">{footer.col2.title}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-sm leading-relaxed text-slate-300">
                  <span className="block">{footer.col2.address_street}</span>
                  <span className="block font-medium">{footer.col2.address_city}</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 shrink-0">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <a href={`tel:${footer.col2.phone.replace(/\s+/g, '')}`} className="text-sm text-slate-300 hover:text-white transition-colors font-medium">
                  {footer.col2.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 shrink-0">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <a href={`mailto:${footer.col2.email}`} className="text-sm text-slate-300 hover:text-white transition-colors font-medium">
                  {footer.col2.email}
                </a>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <div className="p-2 rounded-lg bg-[#0077b5]/10 border border-[#0077b5]/20 shrink-0 group-hover:bg-[#0077b5]/20 transition-colors">
                  <svg className="w-4 h-4 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <a 
                  href="https://www.linkedin.com/in/karol-modelski/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-slate-300 hover:text-white transition-colors font-medium group"
                >
                  Profil LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Kolumna 3: Szybka nawigacja i mikro-CTA */}
          <div className="lg:col-span-4 xl:col-span-4 space-y-6">
            <h3 className="text-white text-base sm:text-lg font-bold tracking-tight">{footer.col3.title}</h3>
            <nav className="flex flex-col space-y-3.5">
              {footer.col3.links.map((link, idx) => (
                link.isCta ? (
                  <div key={idx} className="pt-2">
                    <a 
                      href={link.href}
                      className="inline-flex items-center text-sm font-bold text-blue-400 bg-blue-500/10 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/20 py-3 px-5 rounded-xl transition-all w-fit shadow-sm"
                    >
                      {link.label}
                    </a>
                  </div>
                ) : (
                  <Link 
                    key={idx} 
                    href={link.href} 
                    className="text-[15px] text-slate-400 hover:text-white transition-colors w-fit flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors"></span>
                    {link.label}
                  </Link>
                )
              ))}
            </nav>
          </div>

        </div>

        {/* Dolny pasek: Wiarygodność B2B i kwestie prawne */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6 text-[13px] text-slate-400">
          <div className="text-center lg:text-left">
            <p>{footer.bottom.copyright}</p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-medium text-slate-400">
            <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800">NIP: <span className="text-white">{footer.bottom.nip}</span></span>
            <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800">REGON: <span className="text-white">{footer.bottom.regon}</span></span>
          </div>
        </div>
      </div>
    </footer>
  )
}
