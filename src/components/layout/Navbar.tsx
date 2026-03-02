import { Link, useLocation } from "wouter";

const nav = [
  { href: "/concept", label: "Le Concept" },
  { href: "/iles", label: "Les Îles" },
  { href: "/formules", label: "Les Formules" },
  { href: "/inscription", label: "Inscriptions" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [loc] = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.jpg" alt="L'Archipel Créatif" className="h-12 w-auto" />
        </Link>

        <div className="hidden md:flex gap-8">
          {nav.map((i) => {
            const active = loc === i.href;
            return (
              <Link
                key={i.href}
                href={i.href}
                className={
                  active
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600 transition"
                }
              >
                {i.label}
              </Link>
            );
          })}
        </div>

        <Link href="/inscription" className="inline-flex">
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 text-sm font-medium">
            S'inscrire
          </button>
        </Link>
      </div>
    </nav>
  );
}
