import Link from "next/link"
import Image from "next/image"
import { ShieldCheck } from "lucide-react"
import { content } from "@/lib/content"

export function Footer() {
  const { footer } = content

  return (
    <footer className="relative overflow-hidden border-t border-slate-900 bg-slate-950 py-16 text-slate-300 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        {/* Grid - Mobile First */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            <div className="relative h-16 w-16 rounded-full overflow-hidden border border-slate-700">
              <Image src="/karol.webp" alt="Karol Modelski" fill sizes="64px" className="object-cover" />
            </div>
            <h3 className="text-lg font-bold text-white">{footer.brand.name}</h3>
            <p className="text-xs text-blue-400 font-bold uppercase tracking-wider">{footer.brand.title}</p>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">{footer.brand.description}</p>
          </div>

          {/* Solutions */}
          <div className="text-center lg:text-left space-y-4">
            <h3 className="text-base font-bold text-white">{footer.solutions.title}</h3>
            <ul className="space-y-3">
              {footer.solutions.items.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guarantees */}
          <div className="text-center lg:text-left space-y-4">
            <h3 className="text-base font-bold text-white">{footer.guarantees.title}</h3>
            <ul className="space-y-4">
              {footer.guarantees.items.map((item, i) => (
                <li key={i} className="flex flex-col items-center lg:items-start gap-1 text-sm">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold text-white">{item.title}</span>
                  </div>
                  <span className="text-xs text-slate-400 max-w-[200px]">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left space-y-4 text-sm text-slate-400">
            <h3 className="text-base font-bold text-white">{footer.contact.title}</h3>
            <p>{footer.contact.owner}</p>
            <p>{footer.contact.address}</p>
            <p className="text-blue-400 font-medium">{footer.contact.coverage}</p>
            <p className="pt-2"><a href={`tel:${footer.contact.phone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">{footer.contact.phone}</a></p>
            <p><a href={`mailto:${footer.contact.email}`} className="hover:text-white transition-colors">{footer.contact.email}</a></p>
            <p className="pt-2 font-mono text-xs">NIP: {footer.contact.nip}</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 mt-12 flex flex-col items-center text-center gap-4 text-xs text-slate-500">
          <p className="max-w-xl leading-relaxed">{footer.copyright}</p>
          {footer.legal.items.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6">
              {footer.legal.items.map((link, i) => (
                <Link key={i} href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
