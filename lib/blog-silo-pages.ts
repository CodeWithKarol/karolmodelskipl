import {
  Banknote,
  Rocket,
  ShieldCheck,
  Target,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react"
import type { CtaContent } from "@/lib/content/types"

export interface BlogSiloHeroIndicator {
  icon: LucideIcon
  label: string
}

export interface BlogSiloPageConfig {
  slug: string
  silo: string
  metadata: {
    title: string
    description: string
  }
  jsonLd: {
    name: string
    description: string
  }
  hero: {
    badge: string
    title: string
    description: string
    callout: {
      question: string
      href: string
      label: string
    }
    indicators: BlogSiloHeroIndicator[]
  }
  gridTitle: string
  ctaContent: CtaContent
}

export const modernizacjaBlogSilo: BlogSiloPageConfig = {
  slug: "bezinwazyjna-modernizacja-systemow",
  silo: "Bezinwazyjna Modernizacja Systemów",
  metadata: {
    title: "Bezinwazyjna Modernizacja Systemów | Artykuły i Poradniki IT",
    description:
      "Jak zoptymalizować działający kod, wyeliminować błędy w bazie danych i przyspieszyć aplikację bez zatrzymywania sprzedaży? Praktyczne poradniki i analizy oparte na bankowych standardach inżynieryjnych, przeniesione do realiów MŚP.",
  },
  jsonLd: {
    name: "Bezinwazyjna Modernizacja i Przyspieszanie Systemów | Poradniki i Praktyka IT",
    description:
      "Praktyczne przewodniki i analizy o ratowaniu i optymalizacji kodu, oparte na bankowych standardach inżynieryjnych przeniesionych do realiów MŚP.",
  },
  hero: {
    badge: "Poradniki i praktyka IT",
    title:
      "Bezinwazyjna Modernizacja i Przyspieszanie Systemów – Poradniki i Praktyka IT",
    description:
      "Jak zoptymalizować działający kod, wyeliminować błędy w bazie danych i przyspieszyć aplikację bez zatrzymywania bieżącej sprzedaży i bez kosztownego pisania wszystkiego od nowa? Przeczytaj praktyczne przewodniki oraz analizy oparte na bankowych standardach inżynieryjnych przeniesionych bezpośrednio do realiów MŚP.",
    callout: {
      question: "Twoja aplikacja wymaga konkretnej naprawy lub przyspieszenia?",
      href: "/naprawa-i-modernizacja-aplikacji",
      label: "Przejdź do oferty: Bezinwazyjna modernizacja aplikacji",
    },
    indicators: [
      { icon: Zap, label: "Jak przyspieszyć aplikację" },
      { icon: ShieldCheck, label: "Bezpieczny rozwój w tle" },
      { icon: Banknote, label: "Ochrona budżetu" },
    ],
  },
  gridTitle: "Poradniki i analizy dotyczące modernizacji oprogramowania:",
  ctaContent: {
    badge:
      "Program Wdrożeniowy: Audyt Wydajności i Architektury (Tylko 2 firmy w kwartale)",
    title:
      "Twój system działa wolno, generuje błędy przy obciążeniu i wolisz zdiagnozować wąskie gardła od razu w 4 oczy?",
    description:
      "Zamiast tracić tygodnie na domysły i kolejne bezowocne dyskusje z programistami, przenieś analizę na moje barki. Jako Niezależny Partner Technologiczny w każdym kwartale biorę na warsztat <strong class='text-highlight font-semibold'>maksymalnie dwa systemy</strong>. W zamian za opinię po zakończeniu analizy, możesz odebrać dedykowany Pakiet Strategiczny całkowicie <strong class='text-highlight font-semibold'>za 0 zł</strong>.",
    package_title:
      "Co namacalnie otrzymujesz w Pakiecie Strategicznym (Wartość 600 zł za 0 zł):",
    offer_items: [
      {
        title:
          "Bezpłatna Diagnoza Wąskich Gardeł i Długu Technologicznego: Wskazanie 2–3 krytycznych miejsc w kodzie i architekturze, które realnie dławią szybkość systemu i blokują zyski.",
      },
      {
        title:
          "Bankowy Test Stabilności pod Obciążeniem: Weryfikacja odporności Twojego oprogramowania na awarie w godzinach największego ruchu i sprzedaży.",
      },
      {
        title:
          "Ewolucyjna Mapa Drogowa Naprawy: Rozpisany krok po kroku plan wymiany modułów na środowisku testowym – z gwarancją zero przestojów w biznesie.",
      },
    ],
    button: "Odbierz Bezpłatny Audyt Wydajności i Zarezerwuj Miejsce (0 zł)",
    footer:
      "Zajmij jedno z 2 wolnych miejsc w tym kwartale. Każdy kolejny dzień z mulącym systemem to porzucone koszyki, sfrustrowany zespół i ryzyko krytycznej awarii w najważniejszym momencie sprzedażowym.",
  },
}

export const szybkaWersjaBlogSilo: BlogSiloPageConfig = {
  slug: "szybka-wersja-startowa",
  silo: "Szybka Wersja Startowa Aplikacji",
  metadata: {
    title: "Szybka Wersja Startowa Aplikacji | Artykuły i Poradniki IT",
    description:
      "Masz pomysł na nowy produkt cyfrowy? Dowiedz się, jak bezpiecznie uruchomić kluczową funkcję w 30 dni, przetestować pomysł i nie przepalić budżetu.",
  },
  jsonLd: {
    name: "Szybka Wersja Startowa Aplikacji | Artykuły",
    description:
      "Praktyczne poradniki o tym, jak w bezpieczny sposób uruchomić kluczową funkcję w 30 dni.",
  },
  hero: {
    badge: "Szybka wersja startowa aplikacji (MVP)",
    title: "Szybka Wersja Startowa (MVP) – Poradniki i Praktyka",
    description:
      "Jak przetestować pomysł na aplikację lub system w 30 dni bez przepalania 100 tysięcy złotych w agencji? Zobacz artykuły, w których krok po kroku wyjaśniam inżynierskie metody obcinania zakresu specyfikacji, architekturę startową oraz bezpieczną walidację rynkowego popytu.",
    callout: {
      question:
        "Szukasz bezpośredniego wykonania technicznego przez inżyniera?",
      href: "/projektowanie-mvp",
      label: "Przejdź do oferty: Wdrożenie MVP w 30 dni",
    },
    indicators: [
      { icon: Rocket, label: "Walidacja pomysłu w 30 dni" },
      { icon: Banknote, label: "Minimalne koszty na starcie" },
      { icon: ShieldCheck, label: "Bezpieczna weryfikacja popytu" },
    ],
  },
  gridTitle: "Poradniki i analizy dotyczące budowy MVP:",
  ctaContent: {
    badge: "Program Wdrożeniowy: Szybka Wersja Startowa (MVP)",
    title:
      "Masz gotowy pomysł na aplikację i wolisz omówić architekturę MVP od razu w 4 oczy?",
    description:
      "Zamiast tracić godziny na analizowanie artykułów i domysły, przenieś wyzwanie na moje barki. Jako Niezależny Partner Technologiczny w każdym kwartale prowadzę <strong class='text-highlight font-semibold'>maksymalnie dwa wdrożenia</strong>, dając projektom 100% mojego skupienia. W zamian za opinię po zakończeniu analizy, możesz odebrać kompletny Pakiet Strategiczny na start za 0 zł.",
    package_title:
      "Co namacalnie otrzymujesz w Pakiecie Strategicznym (Wartość 600 zł za 0 zł):",
    offer_items: [
      {
        title:
          "Bezpłatna Diagnoza i Audyt Pomysłu: Pomagam Ci wybrać serce Twojego systemu i odrzucić zbędny przerost formy agencji.",
      },
      {
        title:
          "Bankowy Test Stabilności i Bezpieczeństwa: Weryfikacja, czy Twój pomysł na architekturę spełnia standardy bezpieczeństwa danych.",
      },
      {
        title:
          "Osobista Mapa Drogowa MVP: Rozpisany krok po kroku plan działania, harmonogram wdrożenia w 30 dni oraz przejrzysta wycena etapowa.",
      },
    ],
    button: "Odbierz Pakiet Strategiczny i Skonsultuj Pomysł (0 zł)",
    footer:
      "Zajmij jedno z 2 wolnych miejsc na ten kwartał. Odkładanie walidacji biznesowej na „kiedyś” to zgoda na to, że konkurencja pierwsza wypuści podobne rozwiązanie i przejmie rynek.",
  },
}

export const aplikacjeBlogSilo: BlogSiloPageConfig = {
  slug: "aplikacje-dla-firm",
  silo: "Dedykowane Systemy dla Firm (Koszty i Zyski)",
  metadata: {
    title:
      "Dedykowane Aplikacje dla Firm – Koszty, ROI i Automatyzacja | Artykuły",
    description:
      "Ile naprawdę kosztuje dedykowane oprogramowanie na zamówienie i kiedy taka inwestycja zwraca się z nawiązką? Rozkładam wyceny agencji na czynniki pierwsze i pokazuję, jak precyzyjnie liczyć realny zwrot z automatyzacji procesów w MŚP.",
  },
  jsonLd: {
    name: "Dedykowane Aplikacje dla Firm – Koszty, ROI i Automatyzacja | Artykuły",
    description:
      "Praktyczne analizy biznesowe, w których rozbijam wyceny agencji na czynniki pierwsze i pokazuję, jak precyzyjnie liczyć realny zwrot z automatyzacji procesów w sektorze MŚP.",
  },
  hero: {
    badge: "Koszt stworzenia aplikacji dla firmy",
    title: "Dedykowane Aplikacje dla Firm – Koszty, ROI i Automatyzacja",
    description:
      "Ile naprawdę kosztuje dedykowane oprogramowanie na zamówienie i kiedy taka inwestycja zwraca się z nawiązką? Przeczytaj praktyczne analizy biznesowe, w których rozbijam wyceny agencji na czynniki pierwsze i pokazuję, jak precyzyjnie liczyć realny zwrot z automatyzacji procesów w sektorze MŚP.",
    callout: {
      question:
        "Szukasz bezpośredniego wykonania dedykowanego systemu dla swojej firmy?",
      href: "/aplikacje-internetowe-dla-firm",
      label: "Przejdź do oferty: Aplikacje internetowe dla firm",
    },
    indicators: [
      { icon: Banknote, label: "Realne koszty i budżety" },
      { icon: TrendingUp, label: "Automatyzacja i zyski" },
      { icon: ShieldCheck, label: "Bezpieczne inwestycje" },
    ],
  },
  gridTitle: "Artykuły, kalkulacje i poradniki finansowe:",
  ctaContent: {
    badge: "Program Wdrożeniowy: Audyt Kosztów i Budżetu",
    title:
      "Masz na stole wycenę od agencji lub chcesz precyzyjnie oszacować budżet systemu w 4 oczy?",
    description:
      "Zamiast zgadywać, czy kwota w specyfikacji od software house'u jest uczciwa, przenieś tę analizę na moje barki. Jako Niezależny Partner Technologiczny w każdym kwartale obejmuję opieką strategiczną i wykonawczą <strong class='text-highlight font-semibold'>maksymalnie dwie firmy</strong>. W zamian za feedback po zakończeniu audytu, możesz odebrać pełny Pakiet Strategiczny całkowicie <strong class='text-highlight font-semibold'>za 0 zł</strong>.",
    package_title:
      "Co namacalnie otrzymujesz w Pakiecie Strategicznym (Wartość 600 zł za 0 zł):",
    offer_items: [
      {
        title:
          "Bezpłatna Diagnoza i Audyt Kosztów: Analizuję Twój pomysł lub aktualną wycenę od agencji i wskazuję miejsca, gdzie próbuje się przepalić Twój budżet.",
      },
      {
        title:
          "Bankowy Test Stabilności i Bezpieczeństwa: Weryfikacja, czy planowana architektura nie wygeneruje ukrytych, gigantycznych kosztów serwerowych przy skalowaniu firmy.",
      },
      {
        title:
          "Osobista Mapa Drogowa i Estymacja Budżetu: Przejrzysty, rozpisany krok po kroku plan działania z precyzyjną wyceną etapową bez ukrytych opłat.",
      },
    ],
    button: "Odbierz Pakiet Strategiczny i Prześwietl Budżet (0 zł)",
    footer:
      "Zajmij jedno z 2 wolnych miejsc w tym kwartale. Każdy miesiąc odkładania automatyzacji i porządku w technologii to zgoda na dalsze opłacanie żmudnej, ręcznej roboty i uciekające zyski, które bezpowrotnie tracisz na rzecz szybszej konkurencji.",
  },
}

export const strategiaBlogSilo: BlogSiloPageConfig = {
  slug: "strategia-it",
  silo: "Strategia i Niezależne Partnerstwo Technologiczne",
  metadata: {
    title: "Strategia IT i Niezależne Partnerstwo Technologiczne | Poradniki",
    description:
      "Jak mądrze planować rozwój cyfrowy firmy, weryfikować wyceny zewnętrznych dostawców i chronić budżet przed naciąganiem ze strony software house'ów? Poznaj praktykę Fractional CTO.",
  },
  jsonLd: {
    name: "Strategia i Niezależne Partnerstwo Technologiczne | Artykuły",
    description:
      "Praktyczne poradniki o zarządzaniu IT na szczeblu zarządczym, oparte na rygorystycznych standardach bankowych.",
  },
  hero: {
    badge: "Doradztwo i architektura IT dla firm",
    title:
      "Strategia IT i Niezależne Partnerstwo Technologiczne – Poradniki i Praktyka",
    description:
      "Jak mądrze planować rozwój cyfrowy firmy, weryfikować wyceny zewnętrznych dostawców i chronić budżet przed naciąganiem ze strony software house'ów? Dowiedz się, jak korzystać ze wsparcia Fractional CTO (Dyrektora Technologicznego na godziny), by chronić portfel, budować bezpieczną architekturę i egzekwować jakość od programistów — bez płacenia 30 tys. zł miesięcznie za etat zarządczy.",
    callout: {
      question:
        "Szukasz bezpośredniego doradztwa strategicznego dla swojej firmy?",
      href: "/doradztwo-techniczne-dla-firm",
      label: "Przejdź do oferty: Doradztwo techniczne i partnerstwo",
    },
    indicators: [
      { icon: Target, label: "Decyzje zarządcze" },
      { icon: ShieldCheck, label: "Ochrona przed pułapkami agencji" },
      { icon: TrendingUp, label: "Nowoczesna strategia" },
    ],
  },
  gridTitle: "Poradniki i analizy dotyczące strategii oraz architektury IT:",
  ctaContent: {
    badge: "Program Partnerski: Audyt Strategiczny i Nadzór IT",
    title:
      "Masz na stole wyceny od software house'ów lub chcesz skonsultować kierunek cyfryzacji firmy w 4 oczy?",
    description:
      "Zamiast podejmować wielotysięczne decyzje technologiczne „na wyczucie”, przenieś odpowiedzialność analityczną na moje barki. Jako Niezależny Partner Technologiczny w każdym kwartale obejmuję opieką strategiczną <strong class='text-highlight font-semibold'>maksymalnie dwie firmy</strong>. W zamian za feedback po zakończeniu analizy, możesz odebrać dedykowany Pakiet Strategiczny całkowicie <strong class='text-highlight font-semibold'>za 0 zł</strong>.",
    package_title:
      "Co namacalnie otrzymujesz w Pakiecie Strategicznym (Wartość 600 zł za 0 zł):",
    offer_items: [
      {
        title:
          "Bezpłatny Audyt Umów i Wycen IT: Prześwietlenie kosztorysów od agencji, wykrycie sztucznie napompowanych godzin i ukrytych opłat.",
      },
      {
        title:
          "Bankowy Test Bezpieczeństwa i Architektury: Weryfikacja odporności infrastruktury na wycieki danych i uzależnienie od jednego programisty (vendor lock-in).",
      },
      {
        title:
          "Strategiczna Mapa Drogowa Rozwoju IT: Przejrzysty, rozpisany krok po kroku plan cyfryzacji firmy z priorytetami biznesowymi i estymacją budżetu.",
      },
    ],
    button: "Odbierz Bezpłatny Audyt Strategiczny (0 zł)",
    footer:
      "Zajmij jedno z 2 wolnych miejsc w tym kwartale. Każdy miesiąc braku niezależnego nadzoru nad technologią to ryzyko podpisania niekorzystnej umowy i bezradnego patrzenia, jak Twój budżet ucieka przez palce.",
  },
}
