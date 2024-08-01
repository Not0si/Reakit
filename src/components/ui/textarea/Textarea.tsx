import { getClassName } from '@utils/ULib'

import { useCallback, useRef } from 'react'
import type {
  DetailedHTMLProps,
  FC,
  KeyboardEvent,
  TextareaHTMLAttributes,
} from 'react'

import styles from './textarea.module.scss'

type IDefaultProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

type ITextareaProps = Omit<IDefaultProps, 'onInput' | 'rows'>

const Textarea: FC<ITextareaProps> = ({
  maxLength = 255,
  className,
  ...rest
}) => {
  const growerRef = useRef<HTMLDivElement>(null)

  const onInput = useCallback(
    (event: KeyboardEvent<HTMLTextAreaElement>) => {
      if (growerRef.current) {
        const str = event.currentTarget.value
        console.log({ str })
        growerRef.current.innerHTML = str.endsWith('\n') ? str + 'k' : str
      }
    },
    [growerRef],
  )

  return (
    <section className={getClassName(styles.container)}>
      <textarea
        className={getClassName(styles.textarea, styles.commun, className)}
        onInput={onInput}
        maxLength={maxLength}
        {...rest}
      />
      <div
        ref={growerRef}
        className={getClassName(styles.grower, styles.commun, className)}
      />
    </section>
  )
}

export default Textarea
