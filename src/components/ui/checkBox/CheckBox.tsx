import getClassName from '@utils/methods/getClassName'

import type { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

import styles from './checkBox.module.scss'

type IDefaultProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export type ICheckBoxProps = Omit<IDefaultProps, 'type'>

const CheckBox: FC<ICheckBoxProps> = ({ ...rest }) => {
  return (
    <input type="checkbox" className={getClassName(styles.root)} {...rest} />
  )
}

export default CheckBox
