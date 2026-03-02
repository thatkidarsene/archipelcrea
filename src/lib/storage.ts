export type RegistrationRecord = {
  id: string;
  createdAt: string;
  payload: unknown;
};

const KEY = "archipel_registrations_v1";

export function saveRegistration(payload: unknown) {
  const prev = getRegistrations();
  const rec: RegistrationRecord = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    payload,
  };
  const next = [rec, ...prev];
  localStorage.setItem(KEY, JSON.stringify(next));
  return rec;
}

export function getRegistrations(): RegistrationRecord[] {
  const raw = localStorage.getItem(KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as RegistrationRecord[];
  } catch {
    return [];
  }
}
