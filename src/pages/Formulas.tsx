import { Link } from "wouter";
import { FORMULAS } from "@/data/formulas";

export default function Formulas() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Choisissez Votre Formule</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Des formules adaptées pour vivre l&apos;expérience artistique en toute sérénité.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FORMULAS.map((f) => (
            <div
              key={f.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200 hover:border-blue-600 transition transform hover:scale-[1.02]"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
                <h2 className="text-2xl font-bold mb-2">{f.title}</h2>
                <div className="text-3xl font-bold">{f.price.toLocaleString("fr-FR")} {f.currency}</div>
              </div>

              <div className="p-8">
                <p className="text-gray-600 mb-6">{f.description}</p>

                <div className="bg-blue-50 rounded-xl p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    {f.autoSelectAll
                      ? "Accès à toutes les îles (sélection automatique)."
                      : `Vous pouvez sélectionner jusqu'à ${f.maxIslands} îles.`}
                  </p>
                </div>

                <ul className="space-y-3 text-gray-700 text-sm mb-8">
                  <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">✓</span><span>Matériel fourni</span></li>
                  <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">✓</span><span>Encadrement structuré</span></li>
                  <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">✓</span><span>Certificat / portfolio</span></li>
                </ul>

                <Link href="/inscription">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-md font-bold">
                    Choisir cette formule
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à commencer ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Peu importe votre choix, vous embarquez pour une aventure créative extraordinaire.
          </p>
          <Link href="/inscription">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-md font-bold">
              S&apos;inscrire maintenant
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
