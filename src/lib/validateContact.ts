export type ContactInput = {
  name?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  message: string;
  honeypot?: string;
};

export type ValidationResult =
  | { ok: true; data: { name: string; email: string; message: string } }
  | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export function validateContact(input: unknown): ValidationResult {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Invalid payload." };
  }

  const raw = input as Record<string, unknown>;

  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  const firstName = typeof raw.firstName === "string" ? raw.firstName.trim() : "";
  const lastName = typeof raw.lastName === "string" ? raw.lastName.trim() : "";
  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  const message = typeof raw.message === "string" ? raw.message.trim() : "";

  const computedName = name || [firstName, lastName].filter(Boolean).join(" ").trim();

  if (!computedName || computedName.length < 2) {
    return { ok: false, error: "Name is required." };
  }
  if (!email || !EMAIL_RE.test(email)) return { ok: false, error: "Email is invalid." };
  if (!message || message.length < 10)
    return { ok: false, error: "Message must be at least 10 characters." };
  if (message.length > 5000) return { ok: false, error: "Message is too long." };

  return { ok: true, data: { name: computedName, email, message } };
}
