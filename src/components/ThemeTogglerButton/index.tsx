import { useContext } from 'react'

import ThemeContext from '@/app/contexts/ThemeContext'

export const ThemeSwiftcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded ${
        theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'
      }`}
    >
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  )
}
