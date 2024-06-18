const I18N = Object.freeze({
  DEFAULT_LOCALE: 'en',
  LOCALES_CODE: ['en', 'fr', 'ar'],
  LOCALES: [
    { lang: 'en', dir: 'ltr' },
    { lang: 'fr', dir: 'ltr' },
    { lang: 'ar', dir: 'rtl' },
  ],
})

export type I18NType = 'en' | 'ar' | 'fr'

export default I18N
