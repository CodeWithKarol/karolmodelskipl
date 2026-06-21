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
    <div className="pointer-events-none fixed top-0 z-50 flex w-full justify-center sm:top-4 sm:px-4">
      <header className="pointer-events-auto flex h-16 w-full min-w-[300px] items-center justify-between gap-4 border-b border-slate-800/60 bg-slate-950/80 px-4 shadow-2xl backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60 sm:h-14 sm:w-auto sm:max-w-4xl sm:gap-16 sm:rounded-full sm:border sm:px-6">
        {/* Lewa strona: Imię i Nazwisko */}
        <div className="flex items-center gap-6">
          <Link href="/" className="group flex shrink-0 items-center space-x-2">
            <span className="text-[15px] font-bold tracking-tight text-slate-200 transition-colors group-hover:text-white">
              Karol Modelski
            </span>
          </Link>

          {/* Menu nawigacyjne (Desktop) */}
          <div className="hidden items-center gap-1 md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-8 rounded-full !bg-transparent px-3 text-[13px] font-medium text-slate-400 transition-colors hover:!bg-slate-800/50 hover:!text-slate-100 data-[state=open]:!bg-slate-800/50 data-[state=open]:!text-slate-100 [&>svg]:hidden">
                    Oferta
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex w-[340px] flex-col gap-1 p-2 md:w-[360px]">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/aplikacje-internetowe-dla-firm"
                          className="group flex flex-col gap-2 rounded-xl p-4 transition-all outline-none hover:bg-slate-800/40 focus:bg-slate-800/40"
                        >
                          <div className="flex items-center justify-between text-[14px] font-semibold text-slate-200 transition-colors group-hover:text-blue-400">
                            <div className="flex items-center gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20">
                                <Code2 className="h-4 w-4" />
                              </div>
                              <span>Aplikacje dla firm</span>
                            </div>
                            <ChevronRight className="h-4 w-4 -translate-x-2 text-blue-400 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                          </div>
                          <p className="pl-11 text-[13px] leading-relaxed text-slate-400">
                            Dedykowane systemy webowe zwiększające zyski i
                            automatyzujące procesy w Twojej firmie.
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
              className="flex h-8 items-center rounded-full px-3 text-[13px] font-medium text-slate-400 transition-colors hover:bg-slate-800/50 hover:text-slate-100"
            >
              Baza wiedzy
            </Link>
          </div>
        </div>

        {/* Prawa strona: Mobilne Menu & Przycisk */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Button
            asChild
            className="h-8 shrink-0 rounded-full border border-blue-500/30 bg-blue-600 px-4 text-[12px] font-semibold text-white shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] transition-all hover:bg-blue-500 hover:shadow-[0_0_25px_-5px_rgba(37,99,235,0.6)] sm:h-9 sm:px-5 sm:text-[13px]"
          >
            <Link href="/#kontakt">Rezerwacja</Link>
          </Button>

          {/* Menu Hamburger na Mobile */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full border border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Otwórz menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="top"
                className="border-b border-slate-800 bg-slate-950/95 p-6 backdrop-blur-xl"
              >
                <SheetHeader className="mb-6 text-left">
                  <SheetTitle className="text-lg font-bold text-slate-200">
                    Nawigacja
                  </SheetTitle>
                  <SheetDescription className="text-xs text-slate-500">
                    Wybierz sekcję, do której chcesz przejść.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-4">
                  <Link
                    href="/aplikacje-internetowe-dla-firm"
                    className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition-colors hover:bg-slate-800"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                      <Code2 className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-slate-200">
                        Aplikacje dla firm
                      </span>
                      <span className="text-[12px] text-slate-400">
                        Oferta budowy systemów
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="/blog"
                    className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition-colors hover:bg-slate-800"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-slate-200">
                        Baza wiedzy
                      </span>
                      <span className="text-[12px] text-slate-400">
                        Blog i poradniki IT
                      </span>
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
