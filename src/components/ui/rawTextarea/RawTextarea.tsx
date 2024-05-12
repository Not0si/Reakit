import { useCallback, useRef } from 'react'
import type {
  DetailedHTMLProps,
  FC,
  KeyboardEvent,
  TextareaHTMLAttributes,
} from 'react'

import * as stylex from '@stylexjs/stylex'
import type { StyleXStylesWithout } from '@stylexjs/stylex'

import { styles } from './RawTextarea.stylex'

type IDefaultProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

type ITextareaProps = Omit<IDefaultProps, 'onInput'> & {
  style?: StyleXStylesWithout<{
    whiteSpace: unknown
    resize: unknown
    overflow: unknown
  }>
}

const RawTextarea: FC<ITextareaProps> = ({
  maxLength = 255,
  style,
  ...rest
}) => {
  const growerRef = useRef<HTMLDivElement>(null)

  const onInput = useCallback((event: KeyboardEvent<HTMLTextAreaElement>) => {
    console.log({ v: event.currentTarget.value })
    if (growerRef.current) {
      growerRef.current.innerHTML = event.currentTarget.value
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

export default RawTextarea
