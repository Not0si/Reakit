import I18N, { type I18NType } from '@enums/I18N'
import dictionaries from '@i18n/lazyLoading/dictionaries'

import { useCallback, useState } from 'react'

interface IObject {
  [key: string]: string
}

interface ILocaleReturn {
  locale: I18NType
  toggler: (targetLocale: I18NType) => void
  translator: (key: string) => Promise<string>
}

const useLocale = (): ILocaleReturn => {
  const [locale, setLocale] = useState<I18NType>('en')

  const toggler = useCallback((targetLocale: I18NType) => {
    const html = document.querySelector('html')
    const item = I18N.LOCALES.find((item) => item.lang === targetLocale)

    if (html && item) {
      html.setAttribute('dir', item.dir)
      html.setAttribute('lang', item.lang)

      // localStorage.setItem('locale', item.lang)
    }

    setLocale(targetLocale)
  }, [])

  const translator = useCallback(
    async (key: string): Promise<string> => {
      const dictionary: IObject = await dictionaries[locale as I18NType]()

      return Object.hasOwn(dictionary, key) ? dictionary[key] : key
    },
    [locale],
  )

  return { locale, translator, toggler }
}

export default useLocale
