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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Treść (mobile-first: najpierw treść) */}
          <Reveal className="order-1 w-full text-center lg:text-left">
            <div className="mb-6 mx-auto lg:mx-0">
              <SectionBadge>
              <User className="h-4 w-4" />
              <span>{about.badge}</span>
            </SectionBadge>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight text-foreground mb-8 leading-tight">
              {about.title}
            </h2>

            <div className="space-y-6 text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
              {about.body.map((paragraph, idx) => (
                <p
                  key={idx}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                  className="[&_strong]:text-foreground [&_strong]:font-medium"
                />
              ))}
            </div>
          </Reveal>

          {/* Portret - borderless, glow, asymetria, pływający badge */}
          <Reveal delay={0.1} className="relative order-2 w-full max-w-sm mx-auto lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] rotate-1 lg:-rotate-1 rounded-3xl overflow-hidden shadow-[0_25px_80px_-20px_rgba(37,99,235,0.35)]">
              <div className="absolute -inset-6 -z-10 bg-primary/20 blur-3xl rounded-full"></div>
              <Image
                src="/karol-about.webp"
                alt="Karol Modelski - Niezależny Partner Technologiczny i Architekt Oprogramowania"
                fill
                priority
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-primary/5"></div>
            </div>

            {/* Floating badge - borderless */}
            <div className="absolute -bottom-5 left-2 sm:-left-8 flex max-w-[calc(100%-1rem)] items-center gap-2.5 sm:gap-3 bg-muted/80 backdrop-blur-xl ring-1 ring-border rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-lg">
              <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center text-primary">
                <Landmark className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
              <div className="min-w-0">
                <p className="text-sm sm:text-base font-bold text-foreground leading-tight">7+ lat</p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground">
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
