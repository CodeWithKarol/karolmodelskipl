import Link from "next/link"
import Image from "next/image"
import { Briefcase, MessageCircle, ExternalLink } from "lucide-react"
import { content } from "@/lib/content"

export function Footer() {
  const { footer } = content

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background pt-12 text-muted-foreground sm:pt-16 md:pt-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 rounded-full overflow-hidden ring-1 ring-primary/20 shadow-[0_8px_30px_-10px_color-mix(in_oklch,var(--primary)_40%,transparent)]">
                <Image src="/karol.webp" alt="Karol Modelski" fill sizes="40px" className="object-cover" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{footer.brand.name}</h3>
            </div>
            <p className="text-xs text-primary font-bold uppercase tracking-wider">{footer.brand.title}</p>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">{footer.brand.description}</p>
          </div>

          <div className="text-center lg:text-left space-y-4">
            <h3 className="text-sm font-bold text-foreground flex items-start justify-center lg:justify-start gap-2"><Briefcase className="mt-0.5 h-4 w-4 text-primary shrink-0" />{footer.solutions.title}</h3>
            <ul className="space-y-2.5">
              {footer.solutions.items.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center lg:text-left space-y-4">
            <h3 className="text-sm font-bold text-foreground flex items-start justify-center lg:justify-start gap-2"><MessageCircle className="mt-0.5 h-4 w-4 text-primary shrink-0" />{footer.contact.title}</h3>

            <div className="space-y-1 text-sm">
              <p>
                <a href={`mailto:${footer.contact.email}`} className="text-muted-foreground hover:text-foreground transition-colors">{footer.contact.email}</a>
              </p>
              <p>
                <a href={`tel:${footer.contact.phone.replace(/\s+/g, "")}`} className="text-muted-foreground hover:text-foreground transition-colors">{footer.contact.phone}</a>
              </p>
            </div>

            <div>
              <a href={footer.contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary transition-colors">
                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                {footer.contact.linkedinLabel}
              </a>
            </div>

            <div className="text-xs text-muted-foreground space-y-1">
              <p>NIP: {footer.contact.nip}</p>
              <p>{footer.contact.coverage}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 sm:pt-8 pb-8 sm:pb-6 text-center">
          <p className="text-xs text-muted-foreground leading-relaxed">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
