import type { ComparisonTableContent } from "./types"

export const comparison = {
  title: "Dlaczego bezpośrednia współpraca bije na głowę tradycyjną agencję?",
  columns: [
    "Karol Modelski (Niezależny Partner)",
    "Tradycyjna agencja (Software House)",
  ],
  rows: [
    {
      criterion: "Gdzie idą Twoje pieniądze?",
      values: [
        "100% budżetu idzie w działający kod i logikę biznesową.",
        "Płacisz za prowizje handlowców, pensje account managerów i drogi open space w centrum Warszawy.",
      ],
    },
    {
      criterion: "Komunikacja",
      values: [
        "Rozmawiasz i ustalasz szczegóły bezpośrednio z inżynierem, który pisze Twój system. Zero filtrów.",
        "„Głuchy telefon” – rozmawiasz z project managerem, który dopiero przekazuje notatki junior developerom.",
      ],
    },
    {
      criterion: "Gwarancja i bezpieczeństwo",
      values: [
        "Rozliczenie w 2-tygodniowych sprintach (50/50). Płacisz za dowiezione, zdefiniowane moduły techniczne, a nie za niekończące się roboczogodziny.",
        "Wysokie faktury z góry, zaliczki i brak gwarancji dowiezienia ustalonego terminu.",
      ],
    },
    {
      criterion: "Niezależność kodu",
      values: [
        "Czysty, uniwersalny kod i pełna dokumentacja – jesteś w 100% właścicielem swojego systemu.",
        "Częste uzależnianie klienta od własnych, zamkniętych frameworków (vendor lock-in).",
      ],
    },
  ],
} satisfies ComparisonTableContent
