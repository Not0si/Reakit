import { useCallback } from 'react'

type ITheme = 'light' | 'dark' | 'auto'

interface IUseThemeReturn {
  setTheme: (theme: ITheme) => void
}

const useTheme = (): IUseThemeReturn => {
  const setTheme = useCallback((theme: ITheme): void => {
    const html = document.querySelector('html')
    if (html) {
      html.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    }
  }, [])

  return { setTheme }
}

export default useTheme
