/**
 * Utilities for Form Validation
 *
 */
class UForm {
  /**
   * Validates an email address using a regular expression.
   *
   * This function checks if the provided email string matches the
   * standard format of an email address. The format is defined by
   * the following pattern:
   * - One or more alphanumeric characters, dots (.), underscores (_), or percent signs (%)
   * - Followed by an "@" symbol
   * - Followed by one or more alphanumeric characters or dots (.)
   * - Followed by a dot (.)
   * - Followed by two or more alphabetical characters
   *
   * @param email - The email address to be validated, which is a nullable string
   * @returns true if the email address is valid, false otherwise
   */
  static isValidEmail = (email?: string | null): boolean => {
    // Check if email is null or undefined
    if (email === null || email === undefined) {
      return false
    }

    // Regular expression pattern for validating an email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    return emailPattern.test(email)
  }
}

export default UForm
