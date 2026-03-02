import { useState } from "react";

const ITEMS = [
  {
    q: "À partir de quel âge peut-on participer ?",
    a: "Le programme est conçu pour les enfants de 5 à 15 ans, avec une adaptation par niveau.",
  },
  {
    q: "Quelle est la différence entre les formules ?",
    a: "Les formules déterminent le nombre d’îles accessibles et les options d’accompagnement.",
  },
  {
    q: "Le matériel est-il fourni ?",
    a: "Oui. Le matériel est prévu selon la formule choisie.",
  },
  {
    q: "Que se passe-t-il après l’inscription ?",
    a: "Un message de confirmation s’affiche. L’équipe vous contacte ensuite pour finaliser la validation et le paiement.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Questions Fréquemment Posées
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Trouvez les réponses aux questions les plus courantes.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto space-y-4">
          {ITEMS.map((it, idx) => {
            const isOpen = open === idx;
            return (
              <div key={it.q} className="border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-600 transition">
                <button
                  className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition"
                  onClick={() => setOpen(isOpen ? null : idx)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 text-left">{it.q}</h3>
                  <span className={"text-gray-600 transition-transform " + (isOpen ? "rotate-180" : "")}>⌄</span>
                </button>
                {isOpen && (
                  <div className="px-6 py-4 text-gray-700 bg-white">
                    {it.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Vous n’avez pas trouvé votre réponse ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contactez-nous, nous vous répondrons rapidement.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="mailto:larchipelcreatif@yahoo.com">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md font-medium">
                Nous envoyer un email
              </button>
            </a>
            <a href="/contact">
              <button className="border-blue-600 text-blue-600 hover:bg-blue-50 border px-8 py-6 text-lg rounded-md font-medium">
                Formulaire de contact
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
