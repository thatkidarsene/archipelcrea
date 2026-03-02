import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mb-12">
          <img alt="L'Archipel Créatif" className="mx-auto h-48 w-auto mb-8" src="/logo.jpg" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Bienvenue dans l&apos;Archipel Créatif
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Un voyage artistique à travers cinq îles thématiques pour explorer, créer et s&apos;épanouir.
        </p>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-12 mb-12">
          <h2 className="text-2xl font-bold mb-8">Lancement du programme</h2>
          <div className="grid grid-cols-4 gap-4 mb-2">
            {["Jours", "Heures", "Minutes", "Secondes"].map((label) => (
              <div key={label} className="bg-white bg-opacity-20 rounded-lg p-6">
                <div className="text-4xl font-bold">0</div>
                <div className="text-sm mt-2">{label}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-white/80 mt-6">
            (Compteur dynamique à activer plus tard)
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
          <Link href="/inscription">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md font-medium">
              Commencer l&apos;aventure
            </button>
          </Link>
          <Link href="/concept">
            <button className="border-blue-600 text-blue-600 hover:bg-blue-50 border px-8 py-6 text-lg rounded-md font-medium">
              Découvrir le concept
            </button>
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Les Cinq Îles Créatives</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["Île du Trait", "Fondations du dessin", "rgb(37, 99, 235)"],
              ["Île des Couleurs", "Peinture & harmonie", "rgb(245, 158, 11)"],
              ["Île des Formes", "Volume & modelage", "rgb(234, 88, 12)"],
              ["Île des Bases", "Construction & maquettes", "rgb(16, 185, 129)"],
              ["Île des Fibres", "Texture & tissage", "rgb(6, 182, 212)"],
            ].map(([title, desc, color]) => (
              <div key={title} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="h-32" style={{ backgroundColor: color as string }} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
