import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'

import * as stylex from '@stylexjs/stylex'

import { styles } from './button.stylex'

type IDefaultProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type IButtonProps = IDefaultProps & {}

const Button: FC<IButtonProps> = ({ type = 'button', ...rest }) => {
  return <button {...stylex.props(styles.base)} type={type} {...rest} />
}

export default Button
