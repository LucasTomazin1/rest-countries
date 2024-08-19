import { IoMdSearch } from 'react-icons/io'

export const SearchBar = () => {
  return (
    <div className="flex shadow-xl rounded-lg w-80">
      <button className="p-3 ">
        <IoMdSearch className="text-zinc-500 text-2xl" />
      </button>
      <input
        className="focus:outline-none w-screen rounded-lg"
        placeholder="Search for a country..."
      />
    </div>
  )
}
