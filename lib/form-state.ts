import { PolicyData } from "./types";

const STORAGE_KEY = "policydraft_form_state";

export function saveFormState(data: Partial<PolicyData>): void {
  const existing = getFormState();
  const updated = { ...existing, ...data };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function getFormState(): Partial<PolicyData> {
  if (typeof window === "undefined") return {};
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : {};
}

export function clearFormState(): void {
  localStorage.removeItem(STORAGE_KEY);
}
