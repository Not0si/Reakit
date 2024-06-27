/**
 * Utilities for URL Composing and Parsing.
 *
 */
class UURL {
  /**
   * Parses a URL string and returns an object containing its components.
   * @param url - The URL string to parse.
   * @returns An object containing the URL components or null if the URL is invalid.
   */
  static parseURL(url?: string): URL | null {
    if (!url) {
      return null
    }

    try {
      return new URL(url)
    } catch (error) {
      console.error('Invalid URL:', error)

      return null
    }
  }
}

export default UURL
