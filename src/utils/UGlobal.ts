class UGlobal {
  /**
   * Checks if a value is not null or undefined.
   * @param input The value to check.
   * @returns `true` if the value is not null or undefined, `false` otherwise.
   */
  static isDefined = (input: unknown): boolean => {
    return input !== null && input !== undefined
  }
}

export default UGlobal
