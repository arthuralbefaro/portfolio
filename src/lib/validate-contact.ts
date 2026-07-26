export interface ContactInput {
  name: string;
  email: string;
  message: string;
}

export type ContactField = keyof ContactInput;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(input: ContactInput): ContactField[] {
  const invalid: ContactField[] = [];
  if (input.name.trim().length < 2) {
    invalid.push("name");
  }
  if (!EMAIL_PATTERN.test(input.email.trim())) {
    invalid.push("email");
  }
  if (input.message.trim().length < 10) {
    invalid.push("message");
  }
  return invalid;
}
