import { Country } from '../../service/api'
import Fuse from 'fuse.js'
import { useState } from 'react'
import { IoMdSearch } from 'react-icons/io'
import { Link } from 'react-router-dom'

interface SearchBarProps {
  countries: Country[]
}
export const SearchBar = ({ countries }: SearchBarProps) => {
  const [search, setSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const fuse = new Fuse(countries, {
    keys: ['name.common'],
    includeScore: true,
    threshold: 0.3,
  })

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setErrorMessage('')
    setSuggestions([])
  }
  const searchCountry = () => {
    const lowerCaseSearch = search.toLowerCase()
    const result = fuse.search(lowerCaseSearch)
    if (result.length > 0) {
      const exactMatch = result.find(
        (r) => r.item.name.common.toLowerCase() === search.toLowerCase(),
      )
      if (exactMatch) {
        window.location.href = `/country/${lowerCaseSearch}`
      } else {
        setErrorMessage('This is not a country')
        setSuggestions(result.slice(0, 5).map((r) => r.item.name.common))
      }
    } else {
      setErrorMessage('This is not a country')
      setSuggestions([])
    }
  }
  const onClickHandler = () => {
    searchCountry()
  }
  const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchCountry()
    }
  }
  return (
    <>
      <div className="flex shadow-md rounded-lg w-68 sm:w-80">
        <button className="p-3 ">
          <IoMdSearch
            onClick={onClickHandler}
            className="text-zinc-500 text-2xl"
          />
        </button>
        <input
          onChange={onChangeHandler}
          onKeyPress={onEnterPress}
          className="focus:outline-none w-screen rounded-lg"
          placeholder="Search for a country..."
        />
      </div>
      {errorMessage && (
        <div>
          <p className="text-red-500">{errorMessage}</p>
          {suggestions.length > 0 && (
            <div className="flex gap-2">
              <p className="text-red-500">Did you mean:</p>
              <ul className="flex gap-4">
                {suggestions.map((suggestion) => (
                  <li key={suggestion}>
                    <Link to={`/country/${suggestion.toLowerCase()}`}>
                      {suggestion}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  )
}
