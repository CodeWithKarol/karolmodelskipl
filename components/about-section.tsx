import { User } from "lucide-react"
import { content } from "@/lib/content"
import { SectionBadge } from "@/components/section-badge"
import Image from "next/image"

export function AboutSection() {
  const { about } = content

  return (
    <section
      id="o-mnie"
      className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-20 text-slate-300 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Treść (Zmieniona kolejność dla mobile-first: najpierw treść) */}
          <div className="order-1 text-center lg:text-left">
            <div className="mb-6 mx-auto lg:mx-0">
              <SectionBadge>
              <User className="h-4 w-4" />
              <span>{about.badge}</span>
            </SectionBadge>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-8 leading-tight">
              {about.title}
            </h2>

            <div className="space-y-6 text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              {about.body.map((paragraph, idx) => (
                <p 
                  key={idx} 
                  dangerouslySetInnerHTML={{ __html: paragraph }} 
                  className="[&_strong]:text-slate-200 [&_strong]:font-medium"
                />
              ))}
            </div>
          </div>

          {/* Portret */}
          <div className="relative order-2">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              <Image 
                src="/karol-about.webp" 
                alt="Karol Modelski - Niezależny Partner Technologiczny i Architekt Oprogramowania" 
                fill
                priority
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
