import type {
  ComparisonTableContent,
  ContentMetadata,
  CtaContent,
  FaqContent,
  GuaranteeContent,
  HeroContent,
  OfferPageContent,
  QualificationContent,
  ValueStackContent,
} from "./types"

export const mvp = {
  metadata: {
    title: "Gotowa do sprzedaży platforma dla biznesu w 30 dni | Karol Modelski",
    description:
      "Od pomysłu do gotowej do sprzedaży platformy dla biznesu w dokładnie 30 dni. Stała cena, gwarancja terminu i zwrotu 25 000 zł zaliczki. Bezpłatna rozmowa osobista.",
  } satisfies ContentMetadata,
  service: {
    title: "Gotowa do sprzedaży platforma dla biznesu w 30 dni",
    description:
      "Kompletna platforma dla biznesu pod Twoim adresem internetowym, zbudowana w 30 dni — bezpieczny panel klienta, jedna kluczowa funkcja biznesowa i w pełni zautomatyzowane przyjmowanie opłat. 100% praw autorskich do kodu w Twoich rękach.",
    type: "Tworzenie wersji pilotażowych oprogramowania",
    offerName: "Bezpłatna rozmowa osobista i osobisty plan działania",
    offerPrice: "0",
    offerCurrency: "PLN",
    offerDescription:
      "Bezpłatna rozmowa osobista 1-na-1: odcinamy zbędne koszty — zostawiamy tylko to, za co klienci realnie zapłacą w pierwszym miesiącu — i przygotowujemy osobisty plan wdrożenia.",
  },
  hero: {
    badge:
      "Dla założycieli firm tworzących systemy i usługi dla biznesu bez zaplecza programistycznego",
    title:
      "Od pomysłu do gotowej do sprzedaży platformy dla biznesu w dokładnie 30 dni.",
    title_highlight:
      "Zamiast 9 miesięcy czekania na agencję programistyczną — kompletny system pod Twoim adresem internetowym z działającymi płatnościami.",
    subtitle:
      "Działająca platforma w 30. dniu albo zwracam 25 000 zł zaliczki, a kod zostaje u Ciebie.",
    qualification: {
      status_label: "Status na ten kwartał",
      status_value: "Zostało 1 z 2 miejsc",
      title: "Program wdrożenia platformy dla biznesu w 30 dni",
      description:
        "Osobiste przejęcie 100% technologii i dowiezienie pod Twoją marką działającego systemu o stabilności i bezpieczeństwie sprawdzonym w bankach.",
      cta: "Sprawdź kwalifikację projektu",
      cta_line1: "Sprawdź kwalifikację projektu →",
      trust_label:
        "Standardy wykonania i bezpieczeństwa sprawdzone w systemach dla:",
      trust_logos: ["Citibank", "BNP Paribas", "Silent Eight", "Amway"],
    },
    cta_sub:
      "Bezpłatna rozmowa osobista • 0 zł • Tylko 2 projekty na kwartał (Zostało 1 wolne miejsce)",
    pegs: [
      {
        title: "Stała cena (rozliczenie pół na pół)",
        desc: "Jedna kwota za dowieziony efekt biznesowy — zero dopłat za „nieprzewidziane trudności”.",
      },
      {
        title: "Gwarancja terminu",
        desc: "W 30. dniu sprawdzamy działanie wpłatą kartą albo oddaję zaliczkę.",
      },
      {
        title: "Pełna niezależność",
        desc: "Prawa autorskie, kod, baza danych i serwery należą w całości do Ciebie.",
      },
    ],
  } satisfies HeroContent,
  trap: {
    title:
      "Dlaczego tradycyjny sposób tworzenia oprogramowania niszczy budżety przedsiębiorców?",
    title_highlight: "",
    text1:
      "Tradycyjne agencje programistyczne zarabiają na <strong>przeciąganiu prac w nieskończoność</strong>, a nie na tym, czy Twój system zarobi chociaż jedną złotówkę. To jawna sprzeczność interesów.",
    text2: "",
    negative_points: [
      {
        title: "Płacenie za czas zamiast za gotowy rezultat",
        desc: "Liczenie każdej godziny premiuje powolne tempo. Zamiast działającej platformy co miesiąc dostajesz kolejne faktury za „nieprzewidziane trudności”, a data uruchomienia ciągle się oddala.",
      },
      {
        title: "Zasłona dymna branżowego żargonu",
        desc: "Zamiast rozmawiać o sprzedaży i klientach, tracisz energię na próby rozszyfrowania skrótów i pojęć technicznych. Niejasny język odbiera Ci pełną kontrolę nad budżetem.",
      },
      {
        title: "Przeładowanie systemu zbędnymi funkcjami",
        desc: "Programiści chętnie dopiszą 30 podstron i skomplikowane ekrany, bo na tym zarabiają. Po pół roku zostajesz z gigantycznym narzędziem, którego żaden klient nie potrzebuje do podjęcia decyzji o zakupie.",
      },
      {
        title: "Strach przed technicznym prześwietleniem przez inwestora",
        desc: "Platforma posklejana byle jak przez przypadkowych wykonawców rozsypie się przy pierwszej weryfikacji. Inwestor powie wprost: „kod do kosza, zaczynamy od zera”. Tracisz zaufanie i szansę na kapitał.",
      },
    ],
    positive_point:
      "Zamiast miesiącami czekać na idealny produkt, buduję kompletny system dla biznesu w 30 dni, skupiając się wyłącznie na tym, co generuje zysk.",
  },
  usp: {
    title: "Twój Osobisty Partner Technologiczny",
    subtitle:
      "Poznaj fundamenty mojego podejścia, dzięki którym oszczędzasz czas i pieniądze.",
    cards: [
      {
        title: "Zero zbędnych ogniw",
        desc: "Płacisz za czystą inżynierię, a nie za spotkania z kierownikami projektów, którzy przekazują Twoje słowa programiście. Rozmawiasz bezpośrednio z autorem Twojego systemu.",
      },
      {
        title: "Projektowanie pod zwrot z inwestycji",
        desc: "Nie buduję „na zapas”. Projektuję system tak, aby był tani w utrzymaniu, ale gotowy na rozwój, gdy tylko zaczniesz zarabiać na pierwszych klientach.",
      },
      {
        title: "Tempo startowe",
        desc: "Wykorzystuję nowoczesne podejście, które pozwala dowieźć wersję gotową do testów rynkowych w zaledwie 4 tygodnie.",
      },
    ],
  },
  comparison: {
    title:
      "Porównanie modeli: Tradycyjna agencja programistyczna a Twój Osobisty Partner Technologiczny",
    columns: ["Współpraca ze mną", "Tradycyjna agencja programistyczna"],
    rows: [
      {
        criterion: "Czas do uruchomienia",
        values: [
          "Dokładnie 30 dni od zatwierdzenia planu. Działający system gotowy do sprzedaży w 1 miesiąc.",
          "Od 6 do 12 miesięcy analiz, planowania i ciągłych opóźnień.",
        ],
      },
      {
        criterion: "Rozliczenie i budżet",
        values: [
          "Jedna, z góry ustalona kwota za dowieziony rezultat. Zero dopłat za „nieprzewidziane trudności”.",
          "Płatność za godziny: rachunek rośnie co miesiąc, brak gwarancji ceny końcowej.",
        ],
      },
      {
        criterion: "Język i kontakt",
        values: [
          "Rozmawiasz wprost z doświadczonym inżynierem. Prosty język zysków, stabilności i wygody Twoich odbiorców.",
          "Obce skróty, głuche telefony przez pośredników i praca z początkującymi programistami.",
        ],
      },
      {
        criterion: "Efekt końcowy i niezależność",
        values: [
          "Gotowa platforma zarabiająca pieniądze: bezpieczeństwo i stabilność bankowa, pełna własność i opis działania systemu — każdy programista przejmie pracę od ręki.",
          "Zbiór plików z kodem, którego nie umiesz ocenić. Pełne uzależnienie i opłaty za każdą drobną poprawkę.",
        ],
      },
    ],
  } satisfies ComparisonTableContent,
  mechanism: {
    title: "Plan wdrożenia: Jak to robimy w 30 dni? Dokładnie, a nie na oko",
    subtitle:
      "Stabilność i bezpieczeństwo wypracowane w bankach przeniosłem do systemów biznesowych — bez zbędnej biurokracji i przeciągania terminów. Całość zamykamy w 3 konkretnych etapach:",
    cards: [
      {
        label: "Dni 1–3",
        title: "Odcięcie zbędnych kosztów",
        content:
          "Wspólnie prześwietlamy Twój pomysł. Wyrzucamy 80% zbędnych funkcji, które tylko przepalają budżet, a nie przynoszą pierwszych wpłat. Wytyczamy prostą, niezmienną ścieżkę: od wejścia klienta na stronę do zakupu.",
      },
      {
        label: "Dni 4–24",
        title: "Budowa maszyny sprzedażowej",
        content:
          "Przejmuję całą technologię na siebie. Tworzę stabilne zaplecze, bezpieczny panel użytkownika i zautomatyzowane przyjmowanie opłat. Ty w tym czasie skupiasz się na tym, co najważniejsze — rozmowach z pierwszymi klientami.",
      },
      {
        label: "Dni 25–30",
        title: "Test ogniowy i uruchomienie wpłat",
        content:
          "Podpinamy Twój oficjalny adres internetowy. Razem wykonujemy testowy zakup prawdziwą kartą. W 30. dniu Twój system jest gotowy przyjmować oficjalne zamówienia.",
      },
    ],
  },
  spec: {
    badge: "Zawartość pakietu i warunki rozliczenia",
    title: "Kompletny system gotowy do zarabiania",
    intro:
      "Nie kupujesz mglistych obietnic ani paczek z plikami. Otrzymujesz działający system gotowy do obsługi zamówień i pobierania opłat od pierwszego dnia — z zamkniętą ścieżką od wejścia na stronę po w pełni zautomatyzowaną sprzedaż.",
    core: {
      title: "Gotowa do zarabiania platforma internetowa",
      value: "Wartość rynkowa: 110 000 zł",
      desc: "Kompletny, zarabiający system pod Twoim adresem internetowym — bez zaglądania w kod i bez ręcznych rozliczeń:",
      tiers: [
        {
          label: "Ścieżka sprzedaży dla firm",
          text: "Szybkie płatności kartą i kodem mobilnym z automatycznym wystawianiem faktur w Krajowym Systemie e-Faktur oraz natychmiastowym dostępem do usługi.",
        },
        {
          label: "Serce systemu",
          text: "Bezpieczny panel klienta i główna funkcja biznesowa, za którą płaci rynek.",
        },
        {
          label: "Gotowość w 30. dniu",
          text: "Pieniądze ze sprzedaży trafiają na Twoje konto firmowe natychmiast po udanej transakcji.",
        },
      ],
    },
    bonuses: [
      {
        tag: "Dodatek 1",
        title: "Osobista tarcza przed inwestorami",
        value: "Wartość: 25 000 zł",
        desc: "Moja osobista obecność na 30-minutowym sprawdzianie technicznym z Twoim inwestorem. Kiedy padną podchwytliwe pytania o bazy danych, bezpieczeństwo transakcji i odporność na awarie, mówisz spokojnie: „Oddaję głos mojemu inżynierowi”. Biorę techniczny ogień na siebie, chroniąc Twoją wiarygodność i wycenę firmy.",
      },
      {
        tag: "Dodatek 2",
        title: "60 dni technicznej ochrony na start",
        value: "Wartość: 30 000 zł",
        desc: "Prywatny bezpośredni numer do mnie i gwarancja reakcji do 4 godzin. Kiedy wpuszczasz na platformę pierwszych płacących klientów, nie drżysz o to, że serwer nagle odmówi posłuszeństwa. Zyskujesz dwa miesiące spokoju i asysty inżyniera, który napisał ten kod.",
      },
      {
        tag: "Dodatek 3",
        title: "Księga technicznej niezależności",
        value: "Wartość: 15 000 zł",
        desc: "Koniec z uzależnieniem od wykonawców. Otrzymujesz 100% majątkowych praw autorskich i czysty przewodnik po systemie. Gdy w przyszłości zatrudnisz własnego programistę, wręczasz mu dokumentację, a on podejmuje pracę w 24 godziny — bez narzekania, że „kod jest do wyrzucenia i trzeba pisać od nowa”.",
      },
    ],
    summary_label: "Zestawienie kosztów alternatywnych:",
    summary_value:
      "Klasyczna agencja programistyczna: 120 000 – 180 000 zł, 6–12 miesięcy niepewności i niekończące się rachunki za roboczogodziny.",
    price_label: "Twoja inwestycja u mnie:",
    price_amount: "50 000 zł netto",
    payment:
      "Stała kwota, jedna umowa, zero ukrytych kosztów. Bezpieczna płatność w modelu pół na pół: 25 000 zł przy rezerwacji terminu (blokada mojego czasu w kwartale), a drugie 25 000 zł dopiero w 30. dniu — gdy system działa i widzisz potwierdzenie udanej płatności.",
    bullets: [
      "Pełna faktura z podatkiem od towarów i usług",
      "Jedna umowa — zero dopłat i aneksów",
      "Gwarancja terminu i zwrotu 25 000 zł zaliczki wpisana wprost do umowy",
    ],
  } satisfies ValueStackContent,
  guarantee: {
    badge: "Gwarancje i bezpieczeństwo",
    title: "Całe ryzyko opóźnienia biorę na siebie.",
    subtitle:
      "Rozliczamy się wyłącznie za dowieziony rezultat. Drugą połowę płacisz dopiero w 30. dniu — gdy platforma działa pod Twoim adresem i wspólnie przeprowadzimy udaną transakcję testową.",
    items: [
      {
        title: "Pełna gotowość do sprzedaży w 30 dni albo darmowy kod",
        desc: "Jeśli w 30. dniu platforma nie przejdzie testu płatności lub nie będzie w 100% gotowa na przyjęcie klientów:",
        bullets: [
          "Oddaję Ci całe 25 000 zł zaliczki co do grosza.",
          "Cały zbudowany kod i konfiguracja serwerów zostają u Ciebie za 0 zł.",
          "Opłacam 3 miesiące utrzymania Twojego serwera, byś nie poniósł ani złotówki straty.",
        ],
        note: "Spóźnienie kosztuje mnie, a nie Ciebie.",
      },
      {
        title: "Koniec z uzależnieniem od wykonawców: pełna własność i dokumentacja",
        desc: "Otrzymujesz 100% majątkowych praw autorskich i pełną dokumentację systemu. Każdy kolejny programista przejmie pracę od ręki, bez narzekania, że trzeba pisać wszystko od nowa.",
      },
    ],
  } satisfies GuaranteeContent,
  faq: {
    title: "Najczęściej zadawane pytania",
    subtitle:
      "Decyzja o szybkim starcie nowej platformy rodzi naturalne pytania. Oto odpowiedzi na kwestie, które najczęściej poruszają przedsiębiorcy:",
    items: [
      {
        question: "Czy platforma zbudowana w 30 dni to pełnoprawne rozwiązanie?",
        answer:
          "Tak. Otrzymujesz w 100% działający system gotowy do sprzedaży, a nie makietę czy prototyp. Platforma ma bezpieczną rejestrację użytkowników, panel klienta, jedną kluczową funkcję biznesową Twojego pomysłu (główną funkcję, za którą płaci klient) oraz podłączone płatności z automatycznym wystawianiem faktur w Krajowym Systemie e-Faktur, automatycznymi wiadomościami powitalnymi i dostępem do usługi od razu po udanej płatności. Twoi klienci wchodzą, płacą i korzystają z usługi, a pieniądze trafiają na Twoje konto firmowe. Różnica między nami a agencją polega na tym, że zamiast budować przez 9 miesięcy 40 podstron, których nikt nie odwiedzi, skupiamy się na jednej, kluczowej ścieżce: od wejścia na stronę do w pełni zautomatyzowanej sprzedaży.",
      },
      {
        question: "Co dzieje się z systemem po zakończeniu tych 30 dni?",
        answer:
          "Platforma działa pod Twoim adresem internetowym i jest gotowa zarabiać, a Ty nie zostajesz z tym sam. Przez kolejne 60 dni obejmuje Cię Ochrona Startowa — masz mój prywatny kontakt i gwarancję reakcji w przypadku problemów uniemożliwiających zakupy. Po tym czasie nie jesteś od nikogo uzależniony: nie płacisz żadnego obowiązkowego abonamentu za utrzymanie, nie ma ukrytych licencji ani zamkniętego oprogramowania. Kod, baza danych i serwery należą w 100% do Ciebie. Możesz rozwijać system ze mną, zatrudnić własnego programistę albo po prostu pozwolić platformie zarabiać.",
      },
      {
        question:
          "W jaki sposób dbamy o bezpieczeństwo i poufność Twojego pomysłu?",
        answer:
          "Zanim zdradzisz mi choćby jedno słowo na temat swojego pomysłu, podpisujemy przejrzystą umowę o zachowaniu poufności. Jako inżynier z doświadczeniem w globalnych instytucjach finansowych (Citibank, BNP Paribas) na co dzień pracuję w rygorach tajemnicy bankowej i najwyższych standardów ochrony własności intelektualnej. Twój pomysł, Twoja baza klientów i cała stworzona własność intelektualna należą prawnie wyłącznie do Ciebie.",
      },
      {
        question:
          "Dlaczego lepiej wybrać bezpośrednią współpracę ze mną zamiast dużej agencji programistycznej?",
        answer:
          "Duże agencje programistyczne sprzedają godziny pracy — im dłużej budują Twój system, tym więcej zarabiają. Projekt, który u mnie trwa 30 dni, w agencji przechodzi przez handlowców, kierowników projektów i zmieniających się początkujących programistów, co wydłuża start do 6–12 miesięcy i generuje rachunki rzędu 120 000 – 180 000 zł. U mnie rozmawiasz bezpośrednio z inżynierem, który buduje Twój system. Płacisz jedną, stałą kwotę za dowieziony rezultat. Przede wszystkim: agencja nie bierze odpowiedzialności za terminy — ja daję twardą gwarancję zwrotu całej zaliczki, jeśli system nie ruszy w 30. dniu.",
      },
    ],
  } satisfies FaqContent,
  cta: {
    badge: "Tylko 2 wdrożenia w kwartale",
    title: "Sprawdź, czy Twój pomysł uruchomimy w 30 dni.",
    description:
      "Pracuję osobiście, bez podwykonawców. Ograniczenie do 2 projektów na kwartał to jedyny sposób, by zagwarantować terminowy start i pełne bezpieczeństwo Twoich pieniędzy.",
    package_title: "Twój pierwszy krok (30 sekund):",
    offer_items: [
      {
        title: "Rozmowa osobista (30 minut):",
        desc: "Prześwietlamy Twój pomysł i wycinamy 80% zbędnych funkcji. Skupiamy się wyłącznie na tym, za co rynek zapłaci od pierwszego dnia.",
      },
      {
        title: "Wykaz zagrożeń (zestawienie do pobrania):",
        desc: "Czarno na białym wskazuję, gdzie agencje ukrywają dodatkowe opłaty i które błędy zablokowałyby Twój rozwój.",
      },
      {
        title: "Osobisty plan działania (zestawienie do pobrania):",
        desc: "Gotowy harmonogram 30-dniowego startu ze stałą ceną (50 000 zł netto płatne pół na pół) — bez ryzyka niespodziewanych dopłat.",
      },
    ],
    button: "Wypełnij 30-sekundową ankietę kwalifikacyjną →",
    format:
      "100% bezpłatnie • Rozmowa wideo w cztery oczy • Zero nacisku i zero technicznego żargonu",
    note: "Podczas bezpłatnej 30-minutowej rozmowy powiem Ci wprost: czy ten system da się bezpiecznie postawić i uruchomić w 30 dni, czy lepiej odpuścić.",
    availability: "Dostępność: Dokładnie 2 projekty w kwartale.",
    footer:
      "Dostępność: Dokładnie 2 projekty w kwartale. Po wyczerpaniu miejsc kolejny nabór rusza dopiero za 3 miesiące.",
  } satisfies CtaContent,
  application: {
    badge: "Aplikacja o projekt",
    title: "Zanim otworzę Ci kalendarz — 3 pytania.",
    intro:
      "Przyjmuję tylko 2 wdrożenia na kwartał, dlatego przed rezerwacją terminu krótko sprawdzam, czy projekt ma sens w tej formule.",
    steps: [
      {
        key: "stage",
        label: "Na jakim etapie jest Twój projekt?",
        options: [
          {
            value: "spec",
            label: "Mam gotową specyfikację lub makiety i chcę ruszać natychmiast",
          },
          {
            value: "pomysl",
            label:
              "Mam zweryfikowany pomysł i model biznesowy — szukam wykonawcy",
          },
          { value: "poczatek", label: "Dopiero zaczynam myśleć nad pomysłem" },
        ],
      },
      {
        key: "budget",
        label:
          "Platformę dla biznesu realizuję w stałej cenie 50 000 zł netto (model pół na pół: 25 000 zł na start i 25 000 zł po udanej transakcji testowej). Czy Twoja firma posiada zabezpieczony budżet na to wdrożenie?",
        options: [
          {
            value: "tak",
            label:
              "Tak, mam zabezpieczone 50 000 zł netto i chcę wystartować w tym kwartale",
          },
          {
            value: "pozniej",
            label: "Budżet będzie dostępny w kolejnych kwartałach",
          },
          {
            value: "ponizej",
            label: "Szukam tańszych rozwiązań / budżet poniżej 50 000 zł",
          },
        ],
      },
      {
        key: "timeline",
        label: "Kiedy planujesz wystartować z pracami nad platformą?",
        options: [
          { value: "30dni", label: "Natychmiast (najbliższe 30 dni)" },
          { value: "1-2mies", label: "W ciągu 1–2 miesięcy" },
          { value: "3-6mies", label: "Za 3–6 miesięcy" },
          {
            value: "rozeznanie",
            label: "Jeszcze nie wiem, robię rozeznanie rynku",
          },
        ],
      },
    ],
    disqualify: [
      { key: "timeline", values: ["rozeznanie"] },
      { key: "budget", values: ["ponizej"] },
    ],
    messages: {
      rejected: {
        title: "Dziękujemy za zgłoszenie",
        body: "W tym kwartale prowadzimy wdrożenia wyłącznie dla maksymalnie 2 zakwalifikowanych firm. Zapraszamy do zapoznania się z materiałami w naszej bazie wiedzy.",
        button: "Przejdź do bazy wiedzy",
        href: "/blog",
      },
    },
    qualified: {
      title: "Twoja aplikacja przechodzi kwalifikację.",
      body: "Zarezerwuj 30-minutową rozmowę 1-na-1. Ustalimy zakres, harmonogram 30 dni i warunki współpracy. Zero sprzedaży, zero żargonu.",
      button: "Zarezerwuj rozmowę kwalifikacyjną (30 min)",
      footer: "Tylko 2 wdrożenia w kwartale • Zostało 1 wolne miejsce",
    },
  } satisfies QualificationContent,
}

export const offerPage: OfferPageContent = {
  slug: "projektowanie-mvp",
  metadata: mvp.metadata,
  jsonLd: {
    serviceName: mvp.service.title,
    serviceDescription: mvp.service.description,
  },
  qualificationHref: "/kwalifikacja-saas",
  hero: mvp.hero,
  story: {
    title: mvp.trap.title,
    intro: mvp.trap.text1,
    context: mvp.trap.text2,
    points: mvp.trap.negative_points,
  },
  comparison: mvp.comparison,
  offer: {
    badge: "Harmonogram wdrożenia",
    title: mvp.mechanism.title,
    subheading: mvp.mechanism.subtitle,
    paths: mvp.mechanism.cards.map((card) => ({
      title: card.label,
      situation: card.title,
      desc: card.content,
    })),
  },
  spec: mvp.spec,
  guarantee: mvp.guarantee,
  faq: mvp.faq,
  cta: mvp.cta,
}
