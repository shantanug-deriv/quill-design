import { createContext } from 'react'
import { Theme } from 'types'

export type ThemeContextType = {
  theme: Theme
  toggleTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
})

export default ThemeContext
