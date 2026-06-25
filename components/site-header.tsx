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
  SheetClose,
} from "@/components/ui/sheet"
import { ChevronRight, Menu } from "lucide-react"
import { header } from "@/lib/content/header"

export function SiteHeader() {
  return (
    <div className="pointer-events-none fixed top-0 z-50 flex w-full justify-center sm:top-4 sm:px-4">
      <header className="pointer-events-auto flex h-16 w-full min-w-[280px] items-center justify-between gap-2 border-b border-slate-800/60 bg-slate-950/80 px-3 shadow-2xl backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60 sm:h-14 sm:w-auto sm:max-w-4xl sm:min-w-[300px] sm:gap-16 sm:rounded-full sm:border sm:px-6">
        {/* Lewa strona: Imię i Nazwisko */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link href="/" className="group flex shrink-0 items-center space-x-2">
            <span className="text-[14px] font-bold tracking-tight text-slate-200 transition-colors group-hover:text-white sm:text-[15px]">
              {header.brand.name}
            </span>
          </Link>

          {/* Menu nawigacyjne (Desktop) */}
          <div className="hidden items-center gap-1 md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-8 rounded-full !bg-transparent px-3 text-[13px] font-medium text-slate-400 transition-colors hover:!bg-slate-800/50 hover:!text-slate-100 data-[state=open]:!bg-slate-800/50 data-[state=open]:!text-slate-100 [&>svg]:hidden">
                    {header.menu.oferta.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex w-[260px] flex-col gap-1 p-2 md:w-[280px]">
                      {header.menu.oferta.items.map((item) => (
                        <NavigationMenuLink key={item.href} asChild>
                          <Link
                            href={item.href}
                            className="group flex flex-col gap-1.5 rounded-lg p-3 transition-colors outline-none hover:bg-slate-800/20 focus:bg-slate-800/20"
                          >
                            <div className="flex items-center text-[14px] font-medium text-slate-300 transition-colors group-hover:text-white">
                              <span className="flex-1">{item.title}</span>
                              <ChevronRight className="h-4 w-4 -translate-x-2 text-slate-500 opacity-0 transition-all group-hover:translate-x-0 group-hover:text-white group-hover:opacity-100" />
                            </div>
                            <p className="text-[13px] leading-relaxed text-slate-500 transition-colors group-hover:text-slate-400">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href={header.menu.blog.href}
              className="flex h-8 items-center rounded-full px-3 text-[13px] font-medium text-slate-400 transition-colors hover:bg-slate-800/50 hover:text-slate-100"
            >
              {header.menu.blog.title}
            </Link>
          </div>
        </div>

        {/* Prawa strona: Mobilne Menu & Przycisk */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            asChild
            className="hidden h-8 shrink-0 rounded-full border border-blue-500/30 bg-blue-600 px-4 text-[12px] font-semibold text-white shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] transition-all hover:bg-blue-500 hover:shadow-[0_0_25px_-5px_rgba(37,99,235,0.6)] min-[400px]:inline-flex sm:h-9 sm:px-5 sm:text-[13px]"
          >
            <Link href={header.cta.href}>{header.cta.title}</Link>
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
                    {header.menu.mobile.title}
                  </SheetTitle>
                  <SheetDescription className="text-xs text-slate-500">
                    {header.menu.mobile.description}
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-2">
                  {header.menu.oferta.items.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="group flex flex-col gap-1 rounded-lg p-3 transition-colors hover:bg-slate-800/30"
                      >
                        <div className="flex items-center justify-between text-[14px] font-medium text-slate-300 transition-colors group-hover:text-white">
                          <span>{item.title}</span>
                          <ChevronRight className="h-4 w-4 text-slate-500 transition-colors group-hover:text-white" />
                        </div>
                        <span className="text-[13px] text-slate-500 transition-colors group-hover:text-slate-400">
                          {item.description}
                        </span>
                      </Link>
                    </SheetClose>
                  ))}

                  <div className="my-2 h-[1px] w-full bg-slate-800/50" />

                  <SheetClose asChild>
                    <Link
                      href={header.cta.href}
                      className="group flex flex-col gap-1 rounded-lg bg-blue-600/10 p-3 transition-colors hover:bg-blue-600/20"
                    >
                      <div className="flex items-center justify-between text-[14px] font-bold text-blue-400 transition-colors group-hover:text-blue-300">
                        <span>{header.cta.title}</span>
                        <ChevronRight className="h-4 w-4 text-blue-400 transition-colors group-hover:text-blue-300" />
                      </div>
                      <span className="text-[13px] text-slate-400 transition-colors group-hover:text-slate-300">
                        {header.cta.description}
                      </span>
                    </Link>
                  </SheetClose>

                  <div className="my-2 h-[1px] w-full bg-slate-800/50" />

                  <SheetClose asChild>
                    <Link
                      href={header.menu.blog.href}
                      className="group flex flex-col gap-1 rounded-lg p-3 transition-colors hover:bg-slate-800/30"
                    >
                      <div className="flex items-center justify-between text-[14px] font-medium text-slate-300 transition-colors group-hover:text-white">
                        <span>{header.menu.blog.title}</span>
                        <ChevronRight className="h-4 w-4 text-slate-500 transition-colors group-hover:text-white" />
                      </div>
                      <span className="text-[13px] text-slate-500 transition-colors group-hover:text-slate-400">
                        {header.menu.blog.description}
                      </span>
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  )
}
