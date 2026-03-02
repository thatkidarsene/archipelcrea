export type Island = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string; // for simple visuals
};

export const ISLANDS: Island[] = [
  {
    id: "trait",
    title: "Semaine 1 — Île Bleue : L’Île du Trait",
    subtitle: "Dessin, perspective, proportions, ombres, bases du croquis.",
    description:
      "Un socle solide pour apprendre à observer, construire et représenter. Les enfants développent la précision, la patience et l’assurance du geste.",
    color: "rgb(37, 99, 235)",
  },
  {
    id: "couleurs",
    title: "Semaine 2 — Île Jaune : L’Île des Couleurs",
    subtitle: "Peinture acrylique, mélanges, théorie des couleurs.",
    description:
      "Comprendre les harmonies, les contrastes et les nuances. Les enfants apprennent à composer, doser et exprimer une intention par la couleur.",
    color: "rgb(245, 158, 11)",
  },
  {
    id: "formes",
    title: "Semaine 3 — Île Orange : L’Île des Formes",
    subtitle: "Céramique, modelage, volumes, compréhension spatiale.",
    description:
      "Toucher, modeler, construire : une exploration du volume et de la matière. Développe la motricité fine et l’intelligence spatiale.",
    color: "rgb(234, 88, 12)",
  },
  {
    id: "bases",
    title: "Semaine 4 — Île des Bases",
    subtitle: "Maquettes, papier, carton, logique constructive.",
    description:
      "Assembler, structurer, stabiliser. Les enfants découvrent la construction créative avec des matériaux accessibles et une méthode claire.",
    color: "rgb(16, 185, 129)",
  },
  {
    id: "fibres",
    title: "Semaine 5 — Île des Fibres",
    subtitle: "Tissage, texture, travail manuel, patience et structure.",
    description:
      "Travailler la texture et le rythme, apprendre la régularité et la concentration. Une île apaisante et minutieuse, riche en sensations.",
    color: "rgb(6, 182, 212)",
  },
];
