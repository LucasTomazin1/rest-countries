import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'
import { useTheme } from '../../hooks/UseTheme'

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const isDarkMode = theme === 'dark'
  return (
    <header
      className={`flex px-3 py-5 justify-between shadow-md md:px-14 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      }`}
    >
      <h1 className="font-bold md:text-2xl">Where in the world?</h1>
      <button
        className="flex gap-1 items-center text-sm md:text-base"
        onClick={toggleTheme}
      >
        {isDarkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
        {isDarkMode ? 'Light mode' : 'Dark mode'}
      </button>
    </header>
  )
}
