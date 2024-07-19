/**
 * Converts an array of inputs of unknown type into a concatenated string,
 * filtering out null, undefined, or non-string/number values.
 * @param inputs Array of inputs of unknown type to convert to strings.
 * @param separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
 * @returns Concatenated string of valid inputs.
 */
export const ensureString = (inputs: unknown[], separator?: string): string => {
  const output = inputs.map((input) => {
    if (typeof input === 'number') {
      return `${input}`
    }

    if (typeof input === 'string') {
      return input
    }

    return null
  })

  return output.filter(Boolean).join(separator)
}
