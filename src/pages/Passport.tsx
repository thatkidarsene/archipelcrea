export default function Passport() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Passeport Créatif</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Une carte personnelle valable 3 ans, pour suivre la progression de chaque enfant.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">À quoi sert le Passeport ?</h2>
            <ul className="text-gray-700 space-y-2">
              <li>• Suivi de progression</li>
              <li>• Historique des îles visitées</li>
              <li>• Accès prioritaire aux prochaines éditions</li>
              <li>• Badges et jalons artistiques</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Évolution (phase 2)</h2>
            <p className="text-gray-700">
              Un système numérique pourra être ajouté : code unique par enfant, badges, export et historique.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
