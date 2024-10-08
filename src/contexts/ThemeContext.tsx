import { createContext, useState, ReactNode } from 'react'
import { themes } from '../constants/Themes'
type ThemeContextType = {
  theme: keyof typeof themes
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<keyof typeof themes>('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={themes[theme]}>{children}</div>
    </ThemeContext.Provider>
  )
}
