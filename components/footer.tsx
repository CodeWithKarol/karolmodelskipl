import Link from "next/link"
import Image from "next/image"
import { Briefcase, ShieldCheck, MessageCircle, ExternalLink } from "lucide-react"
import { content } from "@/lib/content"
import { siteConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"

export function Footer() {
  const { footer } = content

  return (
    <footer className="relative overflow-hidden border-t border-slate-900 bg-slate-950 pt-12 text-slate-300 sm:pt-16 md:pt-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            <div className="relative h-16 w-16 rounded-full overflow-hidden border border-slate-700">
              <Image src="/karol.webp" alt="Karol Modelski" fill sizes="64px" className="object-cover" />
            </div>
            <h3 className="text-lg font-bold text-white">{footer.brand.name}</h3>
            <p className="text-xs text-blue-400 font-bold uppercase tracking-wider">{footer.brand.title}</p>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">{footer.brand.description}</p>
          </div>

          <div className="text-center lg:text-left space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center justify-center lg:justify-start gap-2"><Briefcase className="h-4 w-4 text-blue-400 shrink-0" />{footer.solutions.title}</h3>
            <ul className="space-y-2.5">
              {footer.solutions.items.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center lg:text-left space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center justify-center lg:justify-start gap-2"><ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />{footer.guarantees.title}</h3>
            <ul className="space-y-3">
              {footer.guarantees.items.map((item, i) => (
                <li key={i} className="flex flex-col items-center lg:items-start gap-0.5 text-sm">
                  <span className="font-semibold text-white">{item.title}</span>
                  <span className="text-xs text-slate-400 leading-relaxed">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center lg:text-left space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center justify-center lg:justify-start gap-2"><MessageCircle className="h-4 w-4 text-blue-400 shrink-0" />{footer.contact.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{footer.contact.owner}</p>
            <a href={footer.contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors">
              <ExternalLink className="h-3.5 w-3.5 shrink-0" />
              {footer.contact.linkedinLabel}
            </a>
            <p className="text-xs text-slate-500">{footer.contact.coverage}</p>
            <div className="space-y-1 text-sm">
              <p><a href={`mailto:${footer.contact.email}`} className="text-blue-400 hover:text-blue-300 transition-colors">{footer.contact.email}</a></p>
              <p><a href={`tel:${footer.contact.phone.replace(/\s+/g, "")}`} className="text-blue-400 hover:text-blue-300 transition-colors">{footer.contact.phone}</a></p>
            </div>
            <p className="text-xs text-slate-500">NIP: {footer.contact.nip}</p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 sm:pt-8 pb-8 sm:pb-6 text-center">
          <div className="max-w-md mx-auto mb-5 sm:mb-6">
            <a href={siteConfig.calendlyLink} target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 text-sm font-bold rounded-xl shadow-lg transition-all whitespace-normal h-auto leading-tight">
                Porozmawiajmy o Twoim projekcie
              </Button>
            </a>
            <p className="text-xs text-slate-500 mt-2">100% bezpłatna rozmowa strategiczna • Odbierz plan o wartości 600 zł za 0 zł</p>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
