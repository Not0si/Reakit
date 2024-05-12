const useTheme = () => {
  const toggler = (theme: 'light' | 'dark' | 'auto') => {
    const html = document.querySelector('html')
    if (html) {
      html.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    }
  }

  return { toggler }
}

export default useTheme
