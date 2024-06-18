import type { I18NType } from '@enums/I18N'
import dictionaries from '@i18n/dictionaries'

import { useEffect, useState } from 'react'

interface IObject {
  [key: string]: unknown
}

const useTranslator = () => {
  const [locale, setLocale] = useState<string | undefined>(undefined)

  useEffect(() => {
    const langAttribute = document.documentElement.getAttribute('lang')
    console.log('Using getAttribute:', langAttribute)

    setLocale('en')
  }, [])

  return async (key: string) => {
    if (Object.hasOwn(dictionaries, locale as string)) {
      const dictionary: IObject = await dictionaries[locale as I18NType]()

      return Object.hasOwn(dictionary, key) ? dictionary[key] : key
    }

    return key
  }
}

export default useTranslator
