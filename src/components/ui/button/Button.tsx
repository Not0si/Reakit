import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'

type IDefaultProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type IButtonProps = IDefaultProps

const Button: FC<IButtonProps> = ({ type, ...rest }) => {
  return <button type={type || 'button'} {...rest}></button>
}

export default Button
