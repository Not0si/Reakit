import type { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

import * as stylex from '@stylexjs/stylex'
import type { StyleXStylesWithout } from '@stylexjs/stylex'

import { styles } from './checkBox.stylex'

type IDefaultProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type ICheckBoxProps = Omit<IDefaultProps, 'type'> & {
  style?: StyleXStylesWithout<{
    ':checked::after': unknown
    aspectRatio: unknown
    height: unknown
    appearance: unknown
    position: unknown
  }>
}

const CheckBox: FC<ICheckBoxProps> = ({ ...rest }) => {
  return <input type="checkbox" {...stylex.props(styles.root)} {...rest} />
}

export default CheckBox
