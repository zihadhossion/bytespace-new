export type FieldErrors<K extends string = string> = Partial<
  Record<K, string | null>
>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateRequired(
  value: string,
  label: string,
): string | null {
  if (!value.trim()) return `${label} is required`;
  return null;
}

export function validateEmail(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return "Email is required";
  if (!EMAIL_RE.test(trimmed)) return "Enter a valid email address";
  return null;
}

export function validateMinLength(
  value: string,
  min: number,
  label: string,
): string | null {
  if (value.length < min) return `${label} must be at least ${min} characters`;
  return null;
}
