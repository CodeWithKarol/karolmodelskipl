import { User, Landmark } from "lucide-react"
import { content } from "@/lib/content"
import { SectionBadge } from "@/components/section-badge"
import Image from "next/image"
import { Reveal } from "@/components/reveal"

export function AboutSection() {
  const { about } = content

  return (
    <section
      id="o-mnie"
      className="relative overflow-hidden border-t border-border bg-background py-20 text-muted-foreground md:py-32"
    >
      <div className="relative z-10 container mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center gap-12 lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Treść (mobile-first: najpierw treść) */}
          <Reveal className="order-1 w-full text-center lg:text-left">
            <div className="mx-auto mb-6 lg:mx-0">
              <SectionBadge>
                <User className="h-4 w-4" />
                <span>{about.badge}</span>
              </SectionBadge>
            </div>

            <h2 className="mb-8 text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl md:text-4xl">
              {about.title}
            </h2>

            <div className="space-y-6 text-sm leading-relaxed font-normal text-muted-foreground sm:text-base">
              {about.body.map((paragraph, idx) => (
                <p
                  key={idx}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                  className="[&_strong]:font-medium [&_strong]:text-foreground"
                />
              ))}
            </div>
          </Reveal>

          {/* Portret - borderless, glow, asymetria, pływający badge */}
          <Reveal
            delay={0.1}
            className="relative order-2 mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none"
          >
            <div className="relative aspect-[4/5] rotate-1 overflow-hidden rounded-3xl shadow-[0_25px_80px_-20px_color-mix(in_srgb,var(--glow)_35%,transparent)] lg:-rotate-1">
              <div className="absolute -inset-6 -z-10 rounded-full bg-primary/20 blur-3xl"></div>
              <Image
                src="/karol-about.webp"
                alt="Karol Modelski - Niezależny Partner Technologiczny i Architekt Oprogramowania"
                fill
                priority
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>

            {/* Floating badge - borderless */}
            <div className="absolute -bottom-5 left-2 flex max-w-[calc(100%-1rem)] items-center gap-2.5 rounded-2xl bg-muted/80 px-3 py-2.5 shadow-lg ring-1 ring-border backdrop-blur-xl sm:-left-8 sm:gap-3 sm:px-4 sm:py-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center text-primary sm:h-10 sm:w-10">
                <Landmark className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
              <div className="min-w-0">
                <p className="text-sm leading-tight font-semibold text-foreground sm:text-base">
                  7+ lat
                </p>
                <p className="text-[10px] tracking-wider text-muted-foreground uppercase sm:text-[11px]">
                  Doświadczenia bankowego
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
