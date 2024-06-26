import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactElement,
} from 'react'

import styles from './button.module.scss'

type IDefaultProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type IButtonProps = IDefaultProps & {
  size?: 'small' | 'medium' | 'large'
  shape?: 'circular' | 'square' | 'rounded'
  iconPosition?: 'before' | 'after'
  icon?: ReactElement
}

const Button: FC<IButtonProps> = ({
  type = 'button',
  iconPosition = 'before',
  shape = 'square',
  size = 'medium',
  children,
  ...rest
}) => {
  return (
    <button
      type={type}
      data-icon-position={iconPosition}
      data-shape={shape}
      data-size={size}
      className={styles.button}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
