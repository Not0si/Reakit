import I18N, { type I18NType } from '@enums/I18N'
import dictionaries from '@i18n/eagerLoading/dictionaries'

import { useCallback, useState } from 'react'

interface IObject {
  [key: string]: string
}

interface ILocaleReturn {
  locale: I18NType
  setLocale: (targetLocale: I18NType) => void
  translator: (key: string) => string
}

const useLocale = (): ILocaleReturn => {
  const [currentLocale, setCurrentLocale] = useState<I18NType>('en')

  const setLocale = useCallback((targetLocale: I18NType) => {
    const html = document.querySelector('html')
    const item = I18N.LOCALES.find((item) => item.lang === targetLocale)

    if (html && item) {
      html.setAttribute('dir', item.dir)
      html.setAttribute('lang', item.lang)

      // localStorage.setItem('locale', item.lang)
    }

    setCurrentLocale(targetLocale)
  }, [])

  const translator = useCallback(
    (key: string): string => {
      const dictionary: IObject = dictionaries[currentLocale]

      return Object.hasOwn(dictionary, key) ? dictionary[key] : key
    },
    [currentLocale],
  )

  return { locale: currentLocale, translator, setLocale }
}

export default useLocale
