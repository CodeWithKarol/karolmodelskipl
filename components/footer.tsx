import Link from "next/link"
import Image from "next/image"
import { Briefcase, MessageCircle, ExternalLink } from "lucide-react"
import { content } from "@/lib/content"

export function Footer() {
  const { footer } = content

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background pt-12 text-muted-foreground sm:pt-16 md:pt-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-10 grid grid-cols-1 gap-8 sm:mb-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 text-center lg:items-start lg:text-left">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full shadow-[0_8px_30px_-10px_color-mix(in_oklch,var(--primary)_40%,transparent)] ring-1 ring-primary/20">
                <Image
                  src="/karol.webp"
                  alt="Karol Modelski"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {footer.brand.name}
              </h3>
            </div>
            <p className="text-xs font-medium tracking-wider text-primary uppercase">
              {footer.brand.title}
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {footer.brand.description}
            </p>
          </div>

          <div className="space-y-4 text-center lg:text-left">
            <h3 className="flex items-start justify-center gap-2 text-sm font-semibold text-foreground lg:justify-start">
              <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {footer.solutions.title}
            </h3>
            <ul className="space-y-2.5">
              {footer.solutions.items.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 text-center lg:text-left">
            <h3 className="flex items-start justify-center gap-2 text-sm font-semibold text-foreground lg:justify-start">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {footer.contact.title}
            </h3>

            <div className="space-y-1 text-sm">
              <p>
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {footer.contact.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${footer.contact.phone.replace(/\s+/g, "")}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {footer.contact.phone}
                </a>
              </p>
            </div>

            <div>
              <a
                href={footer.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-primary transition-colors hover:text-primary"
              >
                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                {footer.contact.linkedinLabel}
              </a>
            </div>

            <div className="space-y-1 text-xs text-muted-foreground">
              <p>NIP: {footer.contact.nip}</p>
              <p>{footer.contact.coverage}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 pb-8 text-center sm:pt-8 sm:pb-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
