class UString {
  /**
   * Converts an array of inputs of unknown type into a concatenated string,
   * filtering out null, undefined, or non-string/number values.
   * @param inputs Array of inputs of unknown type to convert to strings.
   * @returns Concatenated string of valid inputs.
   */
  static ensureString = (...inputs: unknown[]): string => {
    const output = inputs.map((input) => {
      if (typeof input === 'number') {
        return `${input}`
      }

      if (typeof input === 'string') {
        return input
      }

      return null
    })

    return output.filter(Boolean).join(' ')
  }
}

export default UString
