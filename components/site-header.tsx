"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { header } from "@/lib/content/header"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isOfferOpen, setIsOfferOpen] = React.useState(false)
  const [isBlogOpen, setIsBlogOpen] = React.useState(false)

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
        <header className="pointer-events-auto flex h-16 w-full min-w-[280px] items-center justify-between gap-2 border-b border-slate-800/60 bg-slate-950/80 px-4 shadow-2xl backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60 sm:h-14 sm:w-auto sm:max-w-4xl sm:min-w-[300px] sm:gap-16 sm:rounded-full sm:border sm:px-6">
          {/* Logo / Brand */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/" className="group flex shrink-0 items-center space-x-2">
              <span className="text-[14px] font-bold tracking-tight text-slate-200 transition-colors group-hover:text-white sm:text-[15px]">
                {header.brand.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center md:flex">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-8 rounded-full px-3 text-[13px] font-medium text-slate-400 hover:bg-slate-800/50 hover:text-slate-100 data-open:bg-slate-800/50 data-open:text-slate-100 data-popup-open:bg-slate-800/50 data-popup-open:text-slate-100 bg-transparent">
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
                                className="group/item flex flex-col items-start gap-1 rounded-xl p-3 text-left transition-colors hover:bg-slate-800/50 focus:bg-slate-800/50"
                              >
                                <span className="text-[14px] font-semibold text-slate-200 group-hover/item:text-white transition-colors">
                                  {item.title}
                                </span>
                                <span className="text-[12px] leading-relaxed text-slate-400 font-light">
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
                    <NavigationMenuTrigger className="h-8 rounded-full px-3 text-[13px] font-medium text-slate-400 hover:bg-slate-800/50 hover:text-slate-100 data-open:bg-slate-800/50 data-open:text-slate-100 data-popup-open:bg-slate-800/50 data-popup-open:text-slate-100 bg-transparent">
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
                                className="group/item flex flex-col items-start gap-1 rounded-xl p-3 text-left transition-colors hover:bg-slate-800/50 focus:bg-slate-800/50"
                              >
                                <span className="text-[14px] font-semibold text-slate-200 group-hover/item:text-white transition-colors">
                                  {item.title}
                                </span>
                                <span className="text-[12px] leading-relaxed text-slate-400 font-light">
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
          <div className="flex items-center gap-2">
            {/* Desktop CTA Button */}
            <Button
              asChild
              className="hidden h-8 shrink-0 rounded-full border border-blue-500/30 bg-blue-600 px-4 text-[12px] font-semibold text-white shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] transition-all hover:bg-blue-500 min-[400px]:inline-flex sm:h-9 sm:px-5 sm:text-[13px]"
            >
              <a href={header.cta.href} target="_blank" rel="noopener noreferrer">{header.cta.title}</a>
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white md:hidden transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 md:hidden overflow-y-auto">
          <div className="flex flex-col space-y-2 w-full max-w-sm mx-auto my-auto">
            
            <button
              onClick={() => setIsOfferOpen(!isOfferOpen)}
              className="flex w-full items-center justify-between py-3 text-base font-bold text-white"
            >
              <span>{header.menu.oferta.title}</span>
              <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${isOfferOpen ? "rotate-180" : ""}`} />
            </button>
            {isOfferOpen && (
              <div className="flex flex-col pl-4 border-l border-slate-800 mb-2">
                {header.menu.oferta.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="py-2.5 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}

            <button
              onClick={() => setIsBlogOpen(!isBlogOpen)}
              className="flex w-full items-center justify-between py-3 text-base font-bold text-white"
            >
              <span>{header.menu.bazaWiedzy.title}</span>
              <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${isBlogOpen ? "rotate-180" : ""}`} />
            </button>
            {isBlogOpen && (
              <div className="flex flex-col pl-4 border-l border-slate-800 mb-2">
                {header.menu.bazaWiedzy.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="py-2.5 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}

            <div className="pt-6">
              <a
                href={header.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white py-3.5 text-sm font-bold shadow-lg transition-all text-center"
              >
                {header.cta.title}
              </a>
              <p className="text-center text-[10px] text-slate-400 mt-2">{header.cta.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
