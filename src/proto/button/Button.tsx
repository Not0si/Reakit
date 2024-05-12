import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'

type IDefaultProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type IButtonProps = IDefaultProps & {}

const Button: FC<IButtonProps> = ({ ...rest }) => {
  return <button {...rest} />
}

export default Button
