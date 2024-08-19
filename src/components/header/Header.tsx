import { IoMoonOutline } from 'react-icons/io5'

export const Header = () => {
  return (
    <header className="flex px-3 py-5 justify-between shadow-md md:px-14">
      <h1 className="font-bold md:text-2xl">Where in the world?</h1>
      <button className="flex gap-1 items-center text-sm md:text-base">
        <IoMoonOutline />
        Dark mode
      </button>
    </header>
  )
}
