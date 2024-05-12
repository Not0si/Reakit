import type { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

import * as stylex from '@stylexjs/stylex'
import type { StyleXStylesWithout } from '@stylexjs/stylex'

import { styles } from './rawCheckBox.stylex'

type IDefaultProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type IRawCheckBoxProps = Omit<IDefaultProps, 'type'> & {
  style?: StyleXStylesWithout<{
    ':checked::after': unknown
    aspectRatio: unknown
    height: unknown
    appearance: unknown
    position: unknown
  }>
}

const RawCheckBox: FC<IRawCheckBoxProps> = ({ ...rest }) => {
  return <input type="checkbox" {...stylex.props(styles.root)} {...rest} />
}

export default RawCheckBox
