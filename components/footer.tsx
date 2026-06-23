import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { content } from "@/lib/content"

export function Footer() {
  const { footer } = content

  return (
    <footer className="relative overflow-hidden border-t border-slate-900 bg-slate-950 py-12 text-slate-400 md:py-20">
      {/* Delikatne tło stopki */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

      <div className="relative z-10 container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-16">
          {/* Kolumna 1: Krótkie podsumowanie marki (UVP) */}
          <div className="space-y-5 lg:col-span-4 xl:col-span-5">
            <h3 className="flex items-center gap-3 text-xl font-bold tracking-tight text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-500 to-blue-700 text-base font-black text-white shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]">
                KM
              </span>
              {footer.col1.name}
            </h3>
            <p className="text-[13px] font-bold tracking-[0.1em] text-blue-400 uppercase">
              {footer.col1.title}
            </p>
            <p className="max-w-md text-sm leading-relaxed font-light text-slate-300 sm:text-[15px]">
              {footer.col1.description}
            </p>
          </div>

          {/* Kolumna 2: Dane kontaktowe i NAP (Local SEO) */}
          <div className="space-y-6 lg:col-span-4 xl:col-span-3">
            <h3 className="text-base font-bold tracking-tight text-white sm:text-lg">
              {footer.col2.title}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0 rounded-lg border border-blue-500/20 bg-blue-500/10 p-2">
                  <MapPin className="h-4 w-4 text-blue-400" />
                </div>
                <div className="text-sm leading-relaxed text-slate-300">
                  <span className="block">{footer.col2.address_street}</span>
                  <span className="block font-medium">
                    {footer.col2.address_city}
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="shrink-0 rounded-lg border border-blue-500/20 bg-blue-500/10 p-2">
                  <Phone className="h-4 w-4 text-blue-400" />
                </div>
                <a
                  href={`tel:${footer.col2.phone.replace(/\s+/g, "")}`}
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  {footer.col2.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="shrink-0 rounded-lg border border-blue-500/20 bg-blue-500/10 p-2">
                  <Mail className="h-4 w-4 text-blue-400" />
                </div>
                <a
                  href={`mailto:${footer.col2.email}`}
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  {footer.col2.email}
                </a>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <div className="shrink-0 rounded-lg border border-[#0077b5]/20 bg-[#0077b5]/10 p-2 transition-colors group-hover:bg-[#0077b5]/20">
                  <svg
                    className="h-4 w-4 text-[#0077b5]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <a
                  href="https://www.linkedin.com/in/karol-modelski/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  Profil LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Kolumna 3: Szybka nawigacja i mikro-CTA */}
          <div className="space-y-6 lg:col-span-4 xl:col-span-4">
            <h3 className="text-base font-bold tracking-tight text-white sm:text-lg">
              {footer.col3.title}
            </h3>
            <nav className="flex flex-col space-y-3.5">
              {footer.col3.navigation.map((nav, idx) => (
                <Link
                  key={idx}
                  href={nav.href}
                  className="group flex w-fit items-center gap-2 text-[15px] text-slate-400 transition-colors hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-slate-700 transition-colors group-hover:bg-blue-500"></span>
                  {nav.label}
                </Link>
              ))}
              {footer.col3.links.map((link, idx) =>
                link.isCta ? (
                  <div key={idx} className="pt-2">
                    <a
                      href={link.href}
                      className="inline-flex w-fit items-center rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-sm font-bold text-blue-400 shadow-sm transition-all hover:border-blue-400 hover:bg-blue-500/20"
                    >
                      {link.label}
                    </a>
                  </div>
                ) : (
                  <Link
                    key={idx}
                    href={link.href}
                    className="group flex w-fit items-center gap-2 text-[15px] text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-slate-700 transition-colors group-hover:bg-blue-500"></span>
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>

        {/* Dolny pasek: Wiarygodność B2B i kwestie prawne */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 text-[13px] text-slate-400 sm:mt-20 lg:flex-row">
          <div className="text-center lg:text-left">
            <p>{footer.bottom.copyright}</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-medium text-slate-400">
            <span className="rounded-md border border-slate-800 bg-slate-900 px-3 py-1">
              NIP: <span className="text-white">{footer.bottom.nip}</span>
            </span>
            <span className="rounded-md border border-slate-800 bg-slate-900 px-3 py-1">
              REGON: <span className="text-white">{footer.bottom.regon}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
