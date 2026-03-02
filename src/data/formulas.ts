export type FormulaId = "explorateur" | "grand_voyageur" | "maitre" | "familiale";

export type Formula = {
  id: FormulaId;
  title: string;
  price: number;
  currency: "FCFA";
  description: string;
  maxIslands: number;      // selection limit (ignored if autoSelectAll)
  autoSelectAll?: boolean; // for master & family
  childrenCount?: number;  // family = 4
};

export const FORMULAS: Formula[] = [
  {
    id: "explorateur",
    title: "Explorateur Essentiel",
    price: 30000,
    currency: "FCFA",
    description: "Sélection possible de 3 îles maximum.",
    maxIslands: 3,
  },
  {
    id: "grand_voyageur",
    title: "Grand Voyageur",
    price: 40000,
    currency: "FCFA",
    description: "Sélection possible de 4 îles maximum.",
    maxIslands: 4,
  },
  {
    id: "maitre",
    title: "Maître de l’Archipel",
    price: 50000,
    currency: "FCFA",
    description: "5 îles automatiquement sélectionnées.",
    maxIslands: 5,
    autoSelectAll: true,
  },
  {
    id: "familiale",
    title: "Formule Familiale",
    price: 180000,
    currency: "FCFA",
    description: "Inscription de 4 enfants, accès à toutes les îles.",
    maxIslands: 5,
    autoSelectAll: true,
    childrenCount: 4,
  },
];
