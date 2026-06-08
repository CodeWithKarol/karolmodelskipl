import Link from "next/link"
import { content } from "@/lib/content"

export function Footer() {
  const { footer } = content;

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900/50 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Kolumna 1 (Karol Modelski) */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold tracking-tight">{footer.col1.name}</h3>
            <p className="font-medium text-slate-300">{footer.col1.title}</p>
            <p className="text-sm leading-relaxed">{footer.col1.description}</p>
            <div className="pt-2 flex items-center gap-4">
              <a href={`mailto:${footer.col1.contact}`} className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm">
                {footer.col1.contact}
              </a>
              <a href="https://www.linkedin.com/in/karol-modelski/" target="_blank" rel="noopener noreferrer" aria-label="Profil LinkedIn" className="text-slate-400 hover:text-[#0077b5] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Kolumna 2 (Nawigacja) */}
          <div className="space-y-4 md:pl-8">
            <h3 className="text-white text-lg font-bold tracking-tight">{footer.col2.title}</h3>
            <nav className="flex flex-col space-y-3">
              {footer.col2.links.map((link, idx) => (
                <Link key={idx} href={link.href} className="text-sm hover:text-white transition-colors w-fit">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Kolumna 3 (Zakres) */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold tracking-tight">{footer.col3.title}</h3>
            <p className="text-sm leading-relaxed">
              {footer.col3.description}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>{footer.bottom.copyright}</p>
          <p className="text-slate-400">{footer.bottom.nda}</p>
        </div>
      </div>
    </footer>
  )
}
