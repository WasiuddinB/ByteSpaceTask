const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MIN_NAME_LENGTH = 2;
const MIN_PASSWORD_LENGTH = 8;

export function validateName(value: string) {
  const name = value.trim();
  if (!name) return "Enter your full name";
  if (name.length < MIN_NAME_LENGTH) return "Enter at least 2 characters";
  return undefined;
}

export function validateEmail(value: string) {
  const email = value.trim();
  if (!email) return "Enter your email address";
  if (!EMAIL_PATTERN.test(email)) return "Enter a valid email address";
  return undefined;
}

export function validatePassword(value: string) {
  if (!value) return "Enter your password";
  if (value.length < MIN_PASSWORD_LENGTH) return "Use at least 8 characters";
  return undefined;
}
