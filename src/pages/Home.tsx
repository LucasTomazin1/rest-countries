import { CountryCards } from '../components/CountryCard'
import { SearchBar } from '../components/SearchBar'
import { useEffect, useState } from 'react'
import { Country, getCountries, getCountriesByRegion } from '../service/api'
import { FilterByRegion } from '../components/FilterByRegion'

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries()
      setCountries(data)
    }
    fetchData()
  }, [])

  const handleFilterChange = async (region: string) => {
    if (region === 'All regions') {
      const data = await getCountries()
      setCountries(data)
    } else {
      const data = await getCountriesByRegion({ region })
      setCountries(data)
    }
  }

  return (
    <>
      <section className="flex flex-col p-2 min-w-full justify-between gap-5 md:p-10 md:flex-row">
        <SearchBar countries={countries} />
        <FilterByRegion onFilterChange={handleFilterChange} />
      </section>
      <section>
        <div className="flex gap-10 p-2 md:p-10 flex-wrap justify-center">
          <CountryCards countries={countries} />
        </div>
      </section>
    </>
  )
}
