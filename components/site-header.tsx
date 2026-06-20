import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Code2, ChevronRight, BookOpen, Menu } from "lucide-react"

export function SiteHeader() {
  return (
    <div className="fixed top-0 sm:top-4 z-50 w-full flex justify-center sm:px-4 pointer-events-none">
      <header className="pointer-events-auto flex h-16 sm:h-14 w-full sm:w-auto min-w-[300px] sm:max-w-4xl items-center justify-between gap-4 sm:gap-16 sm:rounded-full border-b sm:border border-slate-800/60 bg-slate-950/80 px-4 sm:px-6 shadow-2xl backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60">
        {/* Lewa strona: Imię i Nazwisko */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2 group shrink-0">
            <span className="text-[15px] tracking-tight font-bold text-slate-200 transition-colors group-hover:text-white">
              Karol Modelski
            </span>
          </Link>
          
          {/* Menu nawigacyjne (Desktop) */}
          <div className="hidden md:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="!bg-transparent h-8 px-3 text-[13px] font-medium text-slate-400 transition-colors hover:!bg-slate-800/50 hover:!text-slate-100 data-[state=open]:!bg-slate-800/50 data-[state=open]:!text-slate-100 rounded-full [&>svg]:hidden">
                    Oferta
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[340px] p-2 md:w-[360px] flex flex-col gap-1">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/aplikacje-internetowe-dla-firm"
                          className="group flex flex-col gap-2 rounded-xl p-4 transition-all hover:bg-slate-800/40 focus:bg-slate-800/40 outline-none"
                        >
                          <div className="flex items-center justify-between text-[14px] font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                <Code2 className="h-4 w-4" />
                              </div>
                              <span>Aplikacje dla firm</span>
                            </div>
                            <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-blue-400" />
                          </div>
                          <p className="text-[13px] leading-relaxed text-slate-400 pl-11">
                            Dedykowane systemy webowe zwiększające zyski i automatyzujące procesy w Twojej firmie.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link 
              href="/blog"
              className="h-8 px-3 flex items-center text-[13px] font-medium text-slate-400 transition-colors hover:bg-slate-800/50 hover:text-slate-100 rounded-full"
            >
              Baza wiedzy
            </Link>
          </div>
        </div>

        {/* Prawa strona: Mobilne Menu & Przycisk */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Button 
            asChild 
            className="h-8 sm:h-9 rounded-full bg-blue-600 px-4 sm:px-5 text-[12px] sm:text-[13px] font-semibold text-white shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] transition-all hover:bg-blue-500 hover:shadow-[0_0_25px_-5px_rgba(37,99,235,0.6)] border border-blue-500/30 shrink-0"
          >
            <Link href="/#kontakt">Rezerwacja</Link>
          </Button>

          {/* Menu Hamburger na Mobile */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Otwórz menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 p-6">
                <SheetHeader className="text-left mb-6">
                  <SheetTitle className="text-slate-200 text-lg font-bold">Nawigacja</SheetTitle>
                  <SheetDescription className="text-slate-500 text-xs">
                    Wybierz sekcję, do której chcesz przejść.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-4">
                  <Link 
                    href="/aplikacje-internetowe-dla-firm" 
                    className="flex items-center gap-3 rounded-xl bg-slate-900/50 border border-slate-800 p-4 transition-colors hover:bg-slate-800"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                      <Code2 className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-slate-200">Aplikacje dla firm</span>
                      <span className="text-[12px] text-slate-400">Oferta budowy systemów</span>
                    </div>
                  </Link>

                  <Link 
                    href="/blog" 
                    className="flex items-center gap-3 rounded-xl bg-slate-900/50 border border-slate-800 p-4 transition-colors hover:bg-slate-800"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-slate-200">Baza wiedzy</span>
                      <span className="text-[12px] text-slate-400">Blog i poradniki IT</span>
                    </div>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  )
}
