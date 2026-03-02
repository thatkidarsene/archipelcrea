import { useMemo, useState } from "react";
import { FORMULAS, FormulaId } from "@/data/formulas";
import { ISLANDS } from "@/data/islands";
import { saveRegistration } from "@/lib/storage";

type Level = "Éveil" | "Intermédiaire" | "Avancé";

type Child = {
  firstName: string;
  lastName: string;
  age: string;
  dob: string;
  level: Level;
};

type Parent = {
  firstName: string;
  lastName: string;
  primaryContact: string;
  emergencyContact: string;
  email: string;
};

const DEFAULT_CHILD: Child = {
  firstName: "",
  lastName: "",
  age: "",
  dob: "",
  level: "Éveil",
};

export default function Registration() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formulaId, setFormulaId] = useState<FormulaId | "">("");
  const [selectedIslands, setSelectedIslands] = useState<string[]>([]);
  const [children, setChildren] = useState<Child[]>([{ ...DEFAULT_CHILD }]);
  const [parent, setParent] = useState<Parent>({
    firstName: "",
    lastName: "",
    primaryContact: "",
    emergencyContact: "",
    email: "",
  });

  const formula = useMemo(
    () => FORMULAS.find((f) => f.id === formulaId),
    [formulaId]
  );

  function syncChildrenCount(fid: FormulaId) {
    const f = FORMULAS.find((x) => x.id === fid)!;
    const count = f.childrenCount ?? 1;
    setChildren((prev) => {
      const next = [...prev];
      while (next.length < count) next.push({ ...DEFAULT_CHILD });
      return next.slice(0, count);
    });
  }

  function applyAutoSelection(fid: FormulaId) {
    const f = FORMULAS.find((x) => x.id === fid)!;
    if (f.autoSelectAll) setSelectedIslands(ISLANDS.map((i) => i.id));
    else setSelectedIslands([]);
  }

  function chooseFormula(fid: FormulaId) {
    setFormulaId(fid);
    syncChildrenCount(fid);
    applyAutoSelection(fid);
  }

  const maxIslands = formula?.maxIslands ?? 0;
  const autoSelectAll = !!formula?.autoSelectAll;

  function toggleIsland(id: string) {
    if (!formula) return;
    if (autoSelectAll) return;

    setSelectedIslands((prev) => {
      const has = prev.includes(id);
      if (has) return prev.filter((x) => x !== id);
      if (prev.length >= maxIslands) return prev;
      return [...prev, id];
    });
  }

  function canGoStep2() {
    return formulaId !== "";
  }

  function canGoStep3() {
    if (!formula) return false;
    if (autoSelectAll) return true;
    return selectedIslands.length > 0 && selectedIslands.length <= maxIslands;
  }

  function validateFinal() {
    const parentOk =
      parent.firstName &&
      parent.lastName &&
      parent.primaryContact &&
      parent.emergencyContact &&
      parent.email;

    const childrenOk = children.every(
      (c) => c.firstName && c.lastName && c.age && c.dob && c.level
    );

    return !!formula && parentOk && childrenOk && canGoStep3();
  }

  function autoLevelFromAge(age: number): Level {
    if (age <= 7) return "Éveil";
    if (age <= 11) return "Intermédiaire";
    return "Avancé";
  }

  function onChildChange(i: number, patch: Partial<Child>) {
    setChildren((prev) => {
      const next = [...prev];
      const merged = { ...next[i], ...patch };

      if (patch.age !== undefined) {
        const n = Number(patch.age);
        if (!Number.isNaN(n) && n > 0) merged.level = autoLevelFromAge(n);
      }

      next[i] = merged;
      return next;
    });
  }

  function submit() {
    if (!validateFinal()) return;

    const payload = {
      formulaId,
      islands: selectedIslands,
      children,
      parent,
    };

    saveRegistration(payload);

    alert(
      "Votre demande d’embarquement a été enregistrée avec succès.\n" +
        "Notre équipe vous contactera dans les 24 heures pour la confirmation et les modalités de paiement.\n" +
        "Bienvenue dans l’Archipel Créatif."
    );

    setStep(1);
    setFormulaId("");
    setSelectedIslands([]);
    setChildren([{ ...DEFAULT_CHILD }]);
    setParent({
      firstName: "",
      lastName: "",
      primaryContact: "",
      emergencyContact: "",
      email: "",
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Inscriptions</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Embarquez pour un voyage créatif. Remplissez le formulaire ci-dessous.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-8">
            <div className="flex justify-between mb-4">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className={[
                    "flex-1 h-2 mx-1 rounded",
                    step >= (n as 1 | 2 | 3) ? "bg-blue-600" : "bg-gray-200",
                  ].join(" ")}
                />
              ))}
            </div>
            <p className="text-center text-gray-600">Étape {step} sur 3</p>
          </div>

          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Étape 1 : Choisir une formule
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {FORMULAS.map((f) => {
                  const active = formulaId === f.id;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => chooseFormula(f.id)}
                      className={[
                        "text-left rounded-2xl border-2 p-5 transition",
                        active ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-blue-600",
                      ].join(" ")}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="font-bold text-gray-900">{f.title}</div>
                          <div className="text-blue-600 font-bold text-xl">
                            {f.price.toLocaleString("fr-FR")} {f.currency}
                          </div>
                          <div className="text-gray-600 mt-1">{f.description}</div>
                        </div>
                        <div className="text-sm text-gray-500 whitespace-nowrap">
                          {f.childrenCount ? `${f.childrenCount} enfants` : "1 enfant"}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex gap-4">
                <a href="/" className="flex-1">
                  <button className="w-full border rounded-md py-3 hover:bg-gray-50">
                    Annuler
                  </button>
                </a>
                <button
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md py-3 disabled:opacity-50"
                  disabled={!canGoStep2()}
                  onClick={() => setStep(2)}
                >
                  Continuer
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Étape 2 : Choisir vos îles
              </h2>

              {formula && (
                <p className="text-gray-600 mb-6">
                  Formule : <span className="font-semibold">{formula.title}</span>{" "}
                  {formula.autoSelectAll ? (
                    <span className="text-gray-500">— sélection automatique des 5 îles</span>
                  ) : (
                    <span className="text-gray-500">
                      — {selectedIslands.length}/{maxIslands} sélectionnées
                    </span>
                  )}
                </p>
              )}

              <div className="space-y-3">
                {ISLANDS.map((island) => {
                  const checked = selectedIslands.includes(island.id);
                  const disabled =
                    !autoSelectAll &&
                    !checked &&
                    !!formula &&
                    selectedIslands.length >= maxIslands;

                  return (
                    <label
                      key={island.id}
                      className={[
                        "flex items-start gap-4 border rounded-2xl p-4 transition",
                        checked ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-blue-600",
                        autoSelectAll ? "opacity-90" : "",
                      ].join(" ")}
                    >
                      <input
                        type="checkbox"
                        className="mt-1"
                        checked={checked}
                        disabled={autoSelectAll || disabled}
                        onChange={() => toggleIsland(island.id)}
                      />
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">{island.title}</div>
                        <div className="text-gray-600 mt-1">{island.subtitle}</div>
                      </div>
                    </label>
                  );
                })}
              </div>

              {!autoSelectAll && formula && selectedIslands.length >= maxIslands && (
                <p className="text-sm text-gray-500 mt-3">Limite atteinte pour cette formule.</p>
              )}

              <div className="mt-8 flex gap-4">
                <button
                  className="flex-1 border rounded-md py-3 hover:bg-gray-50"
                  onClick={() => setStep(1)}
                >
                  Retour
                </button>
                <button
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md py-3 disabled:opacity-50"
                  disabled={!canGoStep3()}
                  onClick={() => setStep(3)}
                >
                  Continuer
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Étape 3 : Informations</h2>

              <div className="space-y-8">
                {children.map((c, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-2xl p-4">
                    <div className="font-bold text-gray-900 mb-4">Enfant {idx + 1}</div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Field label="Prénom *">
                        <input
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                          value={c.firstName}
                          onChange={(e) => onChildChange(idx, { firstName: e.target.value })}
                        />
                      </Field>
                      <Field label="Nom *">
                        <input
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                          value={c.lastName}
                          onChange={(e) => onChildChange(idx, { lastName: e.target.value })}
                        />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <Field label="Âge *">
                        <input
                          type="number"
                          min={5}
                          max={15}
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                          value={c.age}
                          onChange={(e) => onChildChange(idx, { age: e.target.value })}
                        />
                      </Field>
                      <Field label="Date de naissance *">
                        <input
                          type="date"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                          value={c.dob}
                          onChange={(e) => onChildChange(idx, { dob: e.target.value })}
                        />
                      </Field>
                    </div>

                    <div className="mt-4">
                      <Field label="Niveau *">
                        <select
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                          value={c.level}
                          onChange={(e) => onChildChange(idx, { level: e.target.value as Level })}
                        >
                          <option value="Éveil">Éveil</option>
                          <option value="Intermédiaire">Intermédiaire</option>
                          <option value="Avancé">Avancé</option>
                        </select>
                      </Field>
                      <p className="text-xs text-gray-500 mt-2">
                        Niveau proposé automatiquement selon l’âge, modifiable.
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <div className="font-bold text-gray-900 mb-4">Parent / Responsable</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Prénom du parent *">
                    <input
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                      value={parent.firstName}
                      onChange={(e) => setParent({ ...parent, firstName: e.target.value })}
                    />
                  </Field>
                  <Field label="Nom du parent *">
                    <input
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                      value={parent.lastName}
                      onChange={(e) => setParent({ ...parent, lastName: e.target.value })}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <Field label="Contact principal *">
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                      value={parent.primaryContact}
                      onChange={(e) => setParent({ ...parent, primaryContact: e.target.value })}
                    />
                  </Field>
                  <Field label="Contact d'urgence *">
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                      value={parent.emergencyContact}
                      onChange={(e) => setParent({ ...parent, emergencyContact: e.target.value })}
                    />
                  </Field>
                </div>

                <div className="mt-4">
                  <Field label="Email *">
                    <input
                      type="email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                      value={parent.email}
                      onChange={(e) => setParent({ ...parent, email: e.target.value })}
                    />
                  </Field>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  className="flex-1 border rounded-md py-3 hover:bg-gray-50"
                  onClick={() => setStep(2)}
                >
                  Retour
                </button>
                <button
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md py-3 disabled:opacity-50"
                  disabled={!validateFinal()}
                  onClick={submit}
                >
                  Confirmer l'inscription
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="block text-sm font-semibold text-gray-900 mb-2">{label}</div>
      {children}
    </label>
  );
}
