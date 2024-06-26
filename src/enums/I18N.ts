const I18N = Object.freeze({
  DEFAULT_LOCALE: 'en',
  LOCALES_CODE: ['en', 'ar'],
  LOCALES: [
    { lang: 'en', dir: 'ltr' },
    { lang: 'ar', dir: 'rtl' },
  ],
})

export type I18NType = 'en' | 'ar'

export default I18N
