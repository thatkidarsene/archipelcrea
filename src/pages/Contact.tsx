export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Une question ? Écrivez-nous et nous vous répondrons rapidement.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Coordonnées</h2>
            <p className="text-gray-700"><span className="font-semibold">Email :</span> larchipelcreatif@yahoo.com</p>
            <p className="text-gray-500 text-sm mt-3">
              (Le numéro de téléphone pourra être ajouté dès que disponible.)
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3">Réseaux sociaux</h3>
            <ul className="text-blue-600 space-y-2">
              <li><a href="https://instagram.com/larchipelcreatif" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://facebook.com/larchipelcreatif" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://tiktok.com/@larchipelcreatif" target="_blank" rel="noreferrer">TikTok</a></li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Formulaire</h2>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Nom</label>
                <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600" />
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium">
                Envoyer
              </button>

              <p className="text-xs text-gray-500">
                (En phase 2, ce formulaire enverra un email via le backend / Directus.)
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
