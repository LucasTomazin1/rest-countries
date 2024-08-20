'use client'
import { CountryCards } from '@/components/country-card/CountryCard'
import { SearchBar } from '@/components/search-bar/SearchBar'
import { useEffect, useState } from 'react'
import { Country, getCountries } from './service/api'

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries()
      setCountries(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <header className="p-2 md:p-10">
        <SearchBar countries={countries} />
      </header>
      <main>
        <div className="flex gap-10 p-5 md:p-10 flex-wrap justify-center">
          <CountryCards countries={countries} />
        </div>
      </main>
    </>
  )
}
