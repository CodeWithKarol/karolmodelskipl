"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { header } from "@/lib/content/header"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

function MobileNavGroup({
  title,
  open,
  onToggle,
  children,
}: {
  title: string
  open: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex min-h-[56px] w-full items-center justify-between gap-4 py-4 text-left text-base font-bold text-foreground transition-colors active:text-primary"
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        aria-hidden={!open}
        inert={!open}
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 pb-4">{children}</div>
        </div>
      </div>
    </div>
  )
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [openSection, setOpenSection] = React.useState<"oferta" | "baza" | null>(
    null
  )

  const toggleSection = (key: "oferta" | "baza") =>
    setOpenSection((prev) => (prev === key ? null : key))

  // Blokowanie scrolla tła gdy menu mobilne jest otwarte
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <div className="pointer-events-none fixed top-0 z-50 flex w-full justify-center sm:top-4 sm:px-4">
        <header className="pointer-events-auto flex h-16 w-full min-w-[280px] items-center justify-between gap-2 border-b border-border bg-background/80 px-4 shadow-2xl backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 md:justify-center sm:h-14 sm:w-auto sm:max-w-4xl sm:min-w-[300px] sm:rounded-full sm:border sm:px-6">
          {/* Logo / Brand */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/" className="group flex shrink-0 items-center space-x-2">
              <span className="text-[14px] font-bold tracking-tight text-foreground transition-colors group-hover:text-foreground sm:text-[15px]">
                {header.brand.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center md:flex">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-8 rounded-full px-3 text-[13px] font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground data-popup-open:bg-accent data-popup-open:text-accent-foreground bg-transparent">
                      {header.menu.oferta.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-1">
                      <div className="flex w-[320px] flex-col gap-1 p-1">
                        {header.menu.oferta.items.map((item) => (
                          <NavigationMenuLink
                            key={item.href}
                            render={
                              <Link
                                href={item.href}
                                className="group/item flex flex-col items-start gap-1 rounded-xl p-3 text-left transition-colors hover:bg-accent focus:bg-accent"
                              >
                                <span className="text-[14px] font-semibold text-foreground group-hover/item:text-foreground transition-colors">
                                  {item.title}
                                </span>
                                <span className="text-[12px] leading-relaxed text-muted-foreground font-light">
                                  {item.description}
                                </span>
                              </Link>
                            }
                          />
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-8 rounded-full px-3 text-[13px] font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground data-popup-open:bg-accent data-popup-open:text-accent-foreground bg-transparent">
                      {header.menu.bazaWiedzy.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-1">
                      <div className="flex w-[320px] flex-col gap-1 p-1">
                        {header.menu.bazaWiedzy.items.map((item) => (
                          <NavigationMenuLink
                            key={item.href}
                            render={
                              <Link
                                href={item.href}
                                className="group/item flex flex-col items-start gap-1 rounded-xl p-3 text-left transition-colors hover:bg-accent focus:bg-accent"
                              >
                                <span className="text-[14px] font-semibold text-foreground group-hover/item:text-foreground transition-colors">
                                  {item.title}
                                </span>
                                <span className="text-[12px] leading-relaxed text-muted-foreground font-light">
                                  {item.description}
                                </span>
                              </Link>
                            }
                          />
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                if (isOpen) setOpenSection(null)
                setIsOpen(!isOpen)
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-accent hover:text-foreground md:hidden transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Nawigacja mobilna"
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-background/95 px-5 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-20 backdrop-blur-2xl md:hidden"
        >
          <nav className="mx-auto flex w-full max-w-sm flex-col">
            <MobileNavGroup
              title={header.menu.oferta.title}
              open={openSection === "oferta"}
              onToggle={() => toggleSection("oferta")}
            >
              {header.menu.oferta.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-[44px] flex-col justify-center gap-0.5 rounded-xl px-3 py-3 transition-colors hover:bg-accent active:bg-accent"
                >
                  <span className="text-[15px] font-semibold text-foreground">
                    {item.title}
                  </span>
                  <span className="text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </span>
                </Link>
              ))}
            </MobileNavGroup>

            <MobileNavGroup
              title={header.menu.bazaWiedzy.title}
              open={openSection === "baza"}
              onToggle={() => toggleSection("baza")}
            >
              {header.menu.bazaWiedzy.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-[44px] flex-col justify-center gap-0.5 rounded-xl px-3 py-3 transition-colors hover:bg-accent active:bg-accent"
                >
                  <span className="text-[15px] font-semibold text-foreground">
                    {item.title}
                  </span>
                  <span className="text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </span>
                </Link>
              ))}
            </MobileNavGroup>
          </nav>
        </div>
      )}
    </>
  )
}
