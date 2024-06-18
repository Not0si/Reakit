import { useCallback, useRef } from 'react'
import type {
  DetailedHTMLProps,
  FC,
  KeyboardEvent,
  TextareaHTMLAttributes,
} from 'react'

import * as stylex from '@stylexjs/stylex'
import type { StyleXStylesWithout } from '@stylexjs/stylex'

import { styles } from './textarea.stylex'

type IDefaultProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

type ITextareaProps = Omit<IDefaultProps, 'onInput' | 'rows'> & {
  style?: StyleXStylesWithout<{
    whiteSpace: unknown
    resize: unknown
    overflow: unknown
  }>
}

const Textarea: FC<ITextareaProps> = ({ maxLength = 255, ...rest }) => {
  const growerRef = useRef<HTMLDivElement>(null)

  const onInput = useCallback((event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (growerRef.current) {
      const str = event.currentTarget.value

      growerRef.current.innerHTML = str.endsWith('\n') ? str + 'k' : str
    }
  }, [])

  return (
    <section {...stylex.props(styles.container)}>
      <textarea
        {...stylex.props(styles.textarea, styles.commun)}
        onInput={onInput}
        maxLength={maxLength}
        {...rest}
      />
      <div ref={growerRef} {...stylex.props(styles.grower, styles.commun)} />
    </section>
  )
}

export default Textarea
