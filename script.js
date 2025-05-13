function validEmail(str: string): boolean {
  // Check for empty string
  if (!str) return false;

  // Regular expression to validate email
  const emailRegex = /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

  return emailRegex.test(str);
}