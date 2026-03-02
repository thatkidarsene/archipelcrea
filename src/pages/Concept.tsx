export default function Concept() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Le Concept de L&apos;Archipel Créatif
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Un programme structuré qui transforme l’apprentissage artistique en aventure immersive.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Qu&apos;est-ce que L&apos;Archipel Créatif ?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            L&apos;Archipel Créatif est une métaphore vivante : chaque enfant devient un explorateur qui traverse cinq îles thématiques.
            Chaque île propose des ateliers pensés pour développer la sensibilité artistique, la motricité fine et la confiance.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
            Les principes fondamentaux
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Exploration créative</h3>
              <p className="text-gray-700">
                Découvrir des techniques, expérimenter, s&apos;exprimer et progresser dans un cadre exigeant mais bienveillant.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Apprentissage immersif</h3>
              <p className="text-gray-700">
                On apprend en faisant : créations concrètes, défis, échanges et mise en valeur du processus.
              </p>
            </div>

            <div className="border-l-4 border-orange-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Encadrement personnalisé</h3>
              <p className="text-gray-700">
                Chaque enfant est accompagné et encouragé selon son âge et son niveau, avec des objectifs clairs.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Communauté créative</h3>
              <p className="text-gray-700">
                Un environnement stimulant où l&apos;on apprend à partager, collaborer et respecter les réalisations de chacun.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Le Passeport Créatif</h2>
          <p className="text-lg text-gray-700 mb-6">
            Chaque participant reçoit un Passeport Créatif valable trois ans. Il trace les îles visitées, les compétences acquises
            et les projets réalisés — un véritable portfolio.
          </p>

          <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Prêt à embarquer ?</h3>
            <p className="text-gray-700 mb-6">
              Rejoignez l&apos;aventure et découvrez un programme artistique structuré et inspirant.
            </p>
            <a href="/inscription">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md font-medium">
                Commencer l&apos;aventure
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
