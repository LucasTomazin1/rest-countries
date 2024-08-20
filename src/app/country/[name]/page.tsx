'use client'
import Image from 'next/image'
import { getCountry } from '../../service/api'
import { useEffect, useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import Link from 'next/link'

export default function Country({ params }: { params: { name: string } }) {
  const { name } = params
  const [country, setCountry] = useState<any>()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountry(name)
      if (data) setCountry(data)
    }
    fetchData()
  }, [name])

  if (!country) return <p>Loading...</p>
  const countryData = country[0]
  console.log(countryData)

  return (
    <div className="flex flex-col p-3 md:p-10 gap-5 md:gap-10">
      <div className="flex gap-8 items-center">
        <Link
          href="/"
          className="flex gap-2 items-center px-6 py-2 hover:bg-slate-100 rounded  shadow-slate-400 shadow-md"
        >
          <FaArrowLeftLong />
          <p>Back</p>
        </Link>
      </div>
      <main className="flex flex-col gap-7 md:flex-row">
        <div>
          <Image
            width={400}
            height={250}
            src={countryData.flags.png}
            alt={countryData.flags.alt}
            className="object-contain h-auto"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl mb-6">{countryData.name.common}</h2>
          <div className="flex flex-col gap-2 mb-10">
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
                    className="py-[1px] px-5 hover:bg-slate-100 hover:cursor-pointer rounded shadow-slate-400 shadow-md"
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
