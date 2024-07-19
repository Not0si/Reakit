import clsx from 'clsx'
import type { ClassValue } from 'clsx'

export const getClassName = (...inputs: ClassValue[]): string => {
  return clsx(...inputs)
}
