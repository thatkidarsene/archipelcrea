import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/concept" className="hover:text-white transition">Le Concept</Link></li>
              <li><Link href="/iles" className="hover:text-white transition">Les Îles</Link></li>
              <li><Link href="/formules" className="hover:text-white transition">Les Formules</Link></li>
              <li><Link href="/passeport" className="hover:text-white transition">Passeport Créatif</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Ressources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400">Email: larchipelcreatif@yahoo.com</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Réseaux Sociaux</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white transition" target="_blank" rel="noreferrer" href="https://instagram.com/larchipelcreatif">Instagram</a></li>
              <li><a className="hover:text-white transition" target="_blank" rel="noreferrer" href="https://facebook.com/larchipelcreatif">Facebook</a></li>
              <li><a className="hover:text-white transition" target="_blank" rel="noreferrer" href="https://tiktok.com/@larchipelcreatif">TikTok</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 L'Archipel Créatif. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
