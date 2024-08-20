import { useState } from 'react'
import { IoMdSearch } from 'react-icons/io'

interface SearchBarProps {
  countries: string[]
}
export const SearchBar = ({ countries }: SearchBarProps) => {
  const [search, setSearch] = useState('')

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const onClickHandler = () => {
    const lowercaseSearch = search.toLowerCase()
    if (lowercaseSearch !== '') {
      window.location.href = `/country/${lowercaseSearch}`
    } else {
      return
    }
  }
  return (
    <div className="flex shadow-xl rounded-lg w-80">
      <button className="p-3 ">
        <IoMdSearch
          onClick={onClickHandler}
          className="text-zinc-500 text-2xl"
        />
      </button>
      <input
        onChange={onChangeHandler}
        className="focus:outline-none w-screen rounded-lg"
        placeholder="Search for a country..."
      />
    </div>
  )
}
