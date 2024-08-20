'use client'
import { Country } from '@/app/service/api'
import Image from 'next/image'
import Link from 'next/link'

export const CountryCards: React.FC<{ countries: Country[] }> = ({
  countries,
}) => {
  return (
    <>
      {countries.map((country, index) => (
        <Link
          onClick={() => country.name.common}
          key={index}
          href={`/country/${country.name.common.toLowerCase()}`}
          className="flex flex-col overflow-hidden rounded shadow-md"
        >
          <div className="w-56">
            <Image
              width={230}
              height={150}
              src={country.flags.png}
              alt={`flag of: ${country.name.common}`}
              className="object-center w-screen h-36"
            />
          </div>
          <div className="p-6 flex flex-col gap-2 text-sm">
            <h2 className="font-bold text-lg">{country.name.common}</h2>
            <p>Population: {country.population.toLocaleString('pt-BR')}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        </Link>
      ))}
    </>
  )
}
