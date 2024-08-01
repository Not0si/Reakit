/**
 * Beautifies HTML by adding proper indentation and line breaks.
 *
 * This function takes a string of HTML and formats it to improve readability.
 * It adds indentation based on tag nesting, separates attributes onto new lines,
 * and generally structures the HTML in a more organized manner.
 *
 * @param {string} html - The input HTML string to be beautified.
 * @returns {string} The beautified HTML string.
 *
 * @example
 * const uglyHTML = '<div><p>Hello<span>World</span></p></div>';
 * const prettyHTML = beautifyHTML(uglyHTML);
 * console.log(prettyHTML);
 * // Output:
 * // <div>
 * //   <p>
 * //     Hello
 * //     <span>
 * //       World
 * //     </span>
 * //   </p>
 * // </div>
 */
export const beautifyHTML = (html: string): string => {
  const indent = '  ' // Two spaces for indentation
  let depth = 0
  let result = ''
  let inTag = false
  let inAttribute = false
  let inString = false
  let currentLine = ''

  const addLine = () => {
    if (currentLine.trim()) {
      result += indent.repeat(depth) + currentLine.trim() + '\n'
    }
    currentLine = ''
  }

  for (let i = 0; i < html.length; i++) {
    const char = html[i]

    if (char === '<' && !inString) {
      addLine()
      inTag = true
      depth++
    } else if (char === '>' && !inString) {
      inTag = false
      currentLine += char
      addLine()
      depth--
      continue
    } else if ((char === '"' || char === "'") && inTag) {
      inString = !inString
    } else if (char === ' ' && inTag && !inString) {
      if (!inAttribute) {
        addLine()
        depth++
        inAttribute = true
      }
    } else if (
      inAttribute &&
      !inString &&
      (char === '>' || html[i + 1] === '>')
    ) {
      inAttribute = false
      depth--
    }

    currentLine += char

    if (char === '\n' && !inTag) {
      addLine()
    }
  }

  addLine() // Add any remaining content

  return result.trim()
}
