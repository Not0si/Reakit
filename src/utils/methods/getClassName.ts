import clsx from 'clsx'
import type { ClassValue } from 'clsx'

const getClassName = (...inputs: ClassValue[]): string => {
  return clsx(...inputs)
}

export default getClassName
