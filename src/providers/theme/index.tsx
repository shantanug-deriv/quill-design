import ThemeContext from 'contexts/theme'
import { useEffect, useMemo, useState } from 'react'
import { Theme } from 'types'
import { useMediaQuery } from 'usehooks-ts'

export interface ThemeProviderProps {
  children: React.ReactNode
  theme?: Theme
}

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  const [selectedTheme, setSelectedTheme] = useState<Theme | undefined>(theme)

  const systemPrefersDark = useMediaQuery('(prefers-color-scheme: dark)')

  const toggleTheme = (updatedTheme: Theme) => {
    setSelectedTheme(updatedTheme)
  }

  const currentTheme: Theme = useMemo(() => {
    if (!selectedTheme) {
      return systemPrefersDark ? 'dark' : 'light'
    }
    return selectedTheme
  }, [systemPrefersDark, selectedTheme])

  useEffect(() => {
    const root = document.documentElement
    if (currentTheme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [currentTheme])

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
