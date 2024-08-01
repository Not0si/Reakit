import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

type defaultType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type defaultClear = Omit<defaultType, 'min' | 'max' | 'step' | 'type'>

export type INumberInput = defaultClear & {
  type?: 'float' | 'integer'
  onChange?: (value: number | null) => void
  max?: number
}
