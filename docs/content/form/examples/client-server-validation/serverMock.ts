export type ValidationErrors = { [key: string]: string };

const SERVER_DELAY_MS = 2000;

export const simulateServerValidation = async (
  values: any
): Promise<{ errors: ValidationErrors }> => {
  await new Promise((resolve) => setTimeout(resolve, SERVER_DELAY_MS));

  const errors: ValidationErrors = {};
  const { username, email } = values;

  if (username === "admin") {
    errors.username = 'Username "admin" is not allowed (server validation)';
  }
  if (email === "test@blocked.com") {
    errors.email = "Email domain is blocked (server validation)";
  }

  return { errors };
};
