"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import { header } from "@/lib/content/header"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isOfferOpen, setIsOfferOpen] = React.useState(false)

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
            <div className="hidden items-center gap-1 md:flex">
              <div className="relative group">
                <button className="flex h-8 items-center gap-1 rounded-full px-3 text-[13px] font-medium text-slate-400 transition-colors hover:bg-slate-800/50 hover:text-slate-100">
                  {header.menu.oferta.title}
                  <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-2 hidden w-[320px] flex-col gap-1 rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-2xl backdrop-blur-xl group-hover:flex">
                  {header.menu.oferta.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex flex-col gap-1 rounded-xl p-3 text-left transition-colors hover:bg-slate-800/50"
                    >
                      <span className="text-[14px] font-semibold text-slate-200 hover:text-white">
                        {item.title}
                      </span>
                      <span className="text-[12px] leading-relaxed text-slate-400 font-light">
                        {item.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href={header.menu.blog.href}
                className="flex h-8 items-center rounded-full px-3 text-[13px] font-medium text-slate-400 transition-colors hover:bg-slate-800/50 hover:text-slate-100"
              >
                {header.menu.blog.title}
              </Link>
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

      {/* Modern Custom Mobile Menu Overlay (Mobile First from scratch) */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 md:hidden overflow-y-auto animate-in fade-in duration-200">
          <div className="flex flex-col space-y-6 w-full max-w-sm mx-auto my-auto">
            
            {/* Sekcja Oferta rozwijana */}
            <div className="space-y-3">
              <button
                onClick={() => setIsOfferOpen(!isOfferOpen)}
                className="flex w-full items-center justify-between text-xl font-extrabold tracking-tight text-white py-2 border-b border-slate-800/80"
              >
                <span>{header.menu.oferta.title}</span>
                <ChevronDown className={`h-5 w-5 text-blue-400 transition-transform duration-300 ${isOfferOpen ? "rotate-180" : ""}`} />
              </button>

              {isOfferOpen && (
                <div className="flex flex-col gap-3 pl-4 pt-2 border-l border-blue-500/30 animate-in slide-in-from-top-2 duration-200">
                  {header.menu.oferta.items.map((item, idx) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex flex-col gap-0.5 py-1.5 text-left"
                    >
                      <span className="text-sm font-semibold text-slate-200 hover:text-blue-400 transition-colors">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-slate-400 font-light line-clamp-1">
                        {item.description}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Baza wiedzy */}
            <Link
              href={header.menu.blog.href}
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-between text-xl font-extrabold tracking-tight text-white py-2 border-b border-slate-800/80"
            >
              <span>{header.menu.blog.title}</span>
              <ArrowRight className="h-5 w-5 text-slate-500" />
            </Link>

            {/* CTA główny w menu */}
            <div className="pt-6">
              <a
                href={header.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 text-sm font-bold shadow-xl transition-all text-center"
              >
                <span>{header.cta.title}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="text-center text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-3">
                {header.cta.description}
              </p>
            </div>
          </div>

          <div className="text-center pt-8 text-xs text-slate-600 uppercase tracking-widest font-mono">
            {header.brand.name} • 2026
          </div>
        </div>
      )}
    </>
  )
}
