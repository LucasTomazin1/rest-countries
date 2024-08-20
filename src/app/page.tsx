'use client'
import { CountryCard } from '@/components/country-card/CountryCard'
import { SearchBar } from '@/components/search-bar/SearchBar'

// TODO: pegar a logica do CountryCard e passar por props para ele e para o SearchBar

export default function Home() {
  return (
    <>
      <header className="p-2 md:p-10">
        <SearchBar countries={countries} />
      </header>
      <main>
        <div className="flex gap-10 p-5 md:p-10 flex-wrap justify-center">
          <CountryCard />
        </div>
      </main>
    </>
  )
}
