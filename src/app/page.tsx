'use client'
import { CountryCard } from '@/components/country-card/CountryCard'
import { SearchBar } from '@/components/search-bar/SearchBar'

export default function Home() {
  return (
    <>
      <header className="p-2 md:p-10">
        <SearchBar />
      </header>
      <main>
        <div className="flex gap-10 p-5 md:p-10 flex-wrap justify-center">
          <CountryCard />
        </div>
      </main>
    </>
  )
}
