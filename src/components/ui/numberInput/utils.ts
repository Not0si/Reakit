import type { KeyboardEvent } from 'react'

export const preventRepeat = (
  event: KeyboardEvent<HTMLInputElement>,
): boolean => {
  const allowedKeys = ['Delete', 'Backspace', 'ArrowLeft', 'ArrowRight']

  if (event.repeat && !allowedKeys.includes(event.key)) {
    event.preventDefault()

    return true
  }

  return false
}

export const preventNonNumbers = (
  event: KeyboardEvent<HTMLInputElement>,
  type: 'float' | 'integer',
): boolean => {
  const allowWithCtrl: string[] = ['a', 'A', 'v', 'V', 'c', 'C', 'x', 'X']
  const allowWithAlt: string[] = []
  const allow: string[] = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '-',
    'ArrowLeft',
    'ArrowRight',
    'Delete',
    'Backspace',
  ]

  if (type === 'float') {
    allow.push('.')
  }

  if (
    allow.includes(event.key) ||
    (event.ctrlKey && allowWithCtrl.includes(event.key)) ||
    (event.altKey && allowWithAlt.includes(event.key))
  ) {
    return false
  }

  event.preventDefault()
  return true
}

export const preventMax = (
  event: KeyboardEvent<HTMLInputElement>,
  max: number,
): boolean => {
  const input = event.target as HTMLInputElement
  const expectedString = input.value + event.key

  // Check if the expected value exceeds the maximum
  const expectedValue = parseFloat(expectedString)

  if (!isNaN(expectedValue) && expectedValue > max) {
    event.preventDefault() // Prevent the default action if it exceeds max
    return true
  }

  return false
}
