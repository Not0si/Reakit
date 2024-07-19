import { getCaretPosition, setCaretPosition } from '@utils/UDOM'
import { type BundledLanguage, type BundledTheme, codeToHtml } from 'shiki'

import type {
  FC,
  FormEventHandler,
  KeyboardEventHandler,
  RefObject,
} from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'

import styles from './codeBloc.module.scss'

interface ICodeBlockProps {
  lang?: BundledLanguage
  light?: BundledTheme
  dark?: BundledTheme
  children: string
  editable?: boolean
  onChange?: (text: string, html: string) => void
}

const generateHtml = async (
  code: string,
  containerRef: RefObject<HTMLDivElement>,
  onChange?: (text: string, html: string) => void,
) => {
  try {
    const generatedHtml = await codeToHtml(code, {
      lang: 'javascript',
      theme: 'min-light',
    })

    if (containerRef?.current) {
      if (onChange) onChange(code, generatedHtml)

      const caretPosition = getCaretPosition(containerRef)

      containerRef.current.innerHTML = generatedHtml

      if (caretPosition >= 0) {
        setCaretPosition(containerRef, caretPosition)
      }
    }
  } catch (error) {
    console.error('Error generating HTML:', error)
  }
}

const CodeBlock: FC<ICodeBlockProps> = ({
  children,
  editable = false,
  onChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [code, setCode] = useState<string>(
    children.endsWith('\n') ? children : children + '\n',
  )

  useEffect(() => {
    generateHtml(code, containerRef, onChange)
  }, [code])

  const updateCode = useCallback((str: string) => {
    const input = str.endsWith('\n') ? str : str + '\n'
    setCode(input)
  }, [])

  const handleElementChange: FormEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      const divTextValue = event.currentTarget.innerText
      updateCode(divTextValue)
    },
    [],
  )

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        event.preventDefault()
        const caretPosition = getCaretPosition(containerRef)
        const codeBeforeCaret = code.slice(0, caretPosition)
        const codeAfterCaret = code.slice(caretPosition)
        const newCode = `${codeBeforeCaret}\n${codeAfterCaret}`

        updateCode(newCode)

        setCaretPosition(containerRef, caretPosition + 1)
      }
    },
    [code],
  )

  return (
    <div
      className={styles.container}
      ref={containerRef}
      onInput={handleElementChange}
      onKeyDown={handleKeyDown}
      contentEditable={editable}
    />
  )
}

export default CodeBlock
