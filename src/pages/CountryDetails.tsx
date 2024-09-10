import { getCountry } from '../service/api'
import { useEffect, useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import type { Country } from '../service/api'
import { useParams, Link } from 'react-router-dom'

export default function CountryDetails() {
  const { name } = useParams<{ name?: string }>()
  const [country, setCountry] = useState<Country[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      if (name) {
        const data = await getCountry(name)
        if (data && Array.isArray(data)) {
          setCountry(data)
        }
      }
    }
    fetchData()
  }, [name])

  console.log(country)

  if (!country || country.length === 0) return <p>Loading...</p>

  const countryData = country[0]

  return (
    <div className="flex flex-col p-3 gap-5 md:p-10 md:gap-10 min-h-screen-m-72">
      <div className="flex gap-8 items-center">
        <Link
          to="/"
          className="flex gap-2 items-center px-6 py-2 rounded shadow"
        >
          <FaArrowLeftLong />
          <p>Back</p>
        </Link>
      </div>
      <main className="flex flex-col gap-4 w-full md:flex-row">
        <div className=" md:max-w-[40%]">
          <img
            src={countryData.flags.png}
            alt={countryData.flags.alt}
            className="object-contain w-[500px] h-auto"
          />
        </div>
        <div className="flex flex-col flex-1">
          <h2 className="font-bold text-2xl mb-6">{countryData.name.common}</h2>
          <div className="flex flex-col gap-2 mb-10 witchspace-nowrap">
            <p>
              <strong>Oficial Name:</strong> {countryData.name.official}
            </p>
            <p>
              <strong>Population:</strong>{' '}
              {countryData.population.toLocaleString('pt-BR')}
            </p>
            <p>
              <strong>Capital:</strong> {countryData.capital.join(', ')}
            </p>
            <p>
              <strong>Region:</strong> {countryData.region}
            </p>
            <p>
              <strong>Continents:</strong> {countryData.continents.join(', ')}
            </p>
            <p>
              <strong>Language:</strong>{' '}
              {countryData.languages[Object.keys(countryData.languages)[0]]}
            </p>
          </div>
          {countryData.borders ? (
            <div className="flex flex-col gap-2 items-start md:flex-row">
              <h3 className="font-bold whitespace-nowrap">Border Countries:</h3>
              <ul className="flex flex-wrap gap-2">
                {countryData.borders?.map((border: string) => (
                  <li
                    key={border}
                    className="py-[1px] px-5 hover:cursor-pointer rounded shadow"
                  >
                    <p className="text-sm">{border}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  )
}
