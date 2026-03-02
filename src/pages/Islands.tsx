import { useMemo, useState } from "react";
import { ISLANDS } from "@/data/islands";
import { Link } from "wouter";

export default function Islands() {
  const [active, setActive] = useState(ISLANDS[0].id);

  const activeIsland = useMemo(
    () => ISLANDS.find((i) => i.id === active) ?? ISLANDS[0],
    [active]
  );

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Les Îles</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Une progression en cinq semaines, structurée comme un voyage artistique.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Map (interactive V1) */}
          <div className="lg:col-span-2 bg-gradient-to-b from-blue-50 to-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Carte de l&apos;archipel</h2>
            <p className="text-sm text-gray-600 mb-6">
              Cliquez sur une île pour afficher le détail (version 1 — la carte illustrée viendra ensuite).
            </p>

            <div className="relative h-72 rounded-xl bg-white border border-gray-200 overflow-hidden">
              {/* “Sea” */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white" />

              {/* Islands points */}
              {ISLANDS.map((i, idx) => {
                const positions = [
                  { left: "18%", top: "25%" },
                  { left: "55%", top: "18%" },
                  { left: "72%", top: "48%" },
                  { left: "42%", top: "58%" },
                  { left: "22%", top: "70%" },
                ];
                const pos = positions[idx] ?? positions[0];
                const isActive = i.id === active;

                return (
                  <button
                    key={i.id}
                    type="button"
                    onClick={() => setActive(i.id)}
                    className={[
                      "absolute -translate-x-1/2 -translate-y-1/2 rounded-full",
                      "transition transform",
                      isActive ? "scale-110" : "scale-100 hover:scale-105",
                    ].join(" ")}
                    style={{ left: pos.left, top: pos.top }}
                    aria-label={i.title}
                  >
                    <span
                      className={[
                        "block w-5 h-5 rounded-full ring-4",
                        isActive ? "ring-white" : "ring-white/70",
                      ].join(" ")}
                      style={{ backgroundColor: i.color }}
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-6 rounded-xl p-4 border border-gray-200 bg-white">
              <div className="font-bold text-gray-900">{activeIsland.title}</div>
              <div className="text-gray-600 mt-1">{activeIsland.subtitle}</div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {ISLANDS.map((i) => {
                const selected = i.id === active;
                return (
                  <button
                    key={i.id}
                    type="button"
                    onClick={() => setActive(i.id)}
                    className={[
                      "w-full text-left border rounded-2xl p-6 transition",
                      selected
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-blue-600",
                    ].join(" ")}
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-xl" style={{ backgroundColor: i.color }} />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{i.title}</h3>
                        <p className="text-gray-600">{i.subtitle}</p>
                        <p className="text-gray-700 mt-3 leading-relaxed">{i.description}</p>

                        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                          <InfoCard title="Objectifs" items={["Observer", "Structurer", "S’exprimer"]} />
                          <InfoCard title="Compétences" items={["Motricité fine", "Créativité", "Confiance"]} />
                          <InfoCard title="Réalisations" items={["Études", "Créations guidées", "Projet final"]} />
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-10 bg-blue-50 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Prêt à embarquer ?</h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Choisissez votre formule et sélectionnez les îles qui correspondent aux besoins de votre enfant.
              </p>
              <Link href="/inscription">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md font-medium">
                  Commencer l&apos;aventure
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="font-bold text-gray-900 mb-2">{title}</div>
      <ul className="text-gray-600 space-y-1">
        {items.map((x) => (
          <li key={x}>• {x}</li>
        ))}
      </ul>
    </div>
  );
}
