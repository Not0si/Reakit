import type { ClipboardEvent, FC, KeyboardEvent } from 'react'

import styles from './styles.module.scss'
import { INumberInput } from './types'
import { preventMax, preventNonNumbers, preventRepeat } from './utils'

const NumberInput: FC<INumberInput> = ({ type = 'float', onChange, max }) => {
  return (
    <input
      type="text"
      className={styles.input}
      onPaste={(event: ClipboardEvent<HTMLInputElement>) => {
        const pastedText = event.clipboardData.getData('text')
        const pastedNumber = Number(pastedText)

        if (!pastedNumber) {
          return event.preventDefault()
        }

        if (max && pastedNumber > max) {
          return event.preventDefault()
        }
      }}
      onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
        if (preventRepeat(event)) return

        if (preventNonNumbers(event, type)) return

        if (max && preventMax(event, max)) return
      }}
      onChange={(event) => {
        if (onChange)
          onChange(
            !event.target.value?.trim() ? null : Number(event.target.value),
          )
      }}
    />
  )
}

export default NumberInput
