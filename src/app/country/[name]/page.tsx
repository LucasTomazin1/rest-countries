'use client'
import Image from 'next/image'
import { getCountry } from '../../service/api'
import { useEffect, useState } from 'react'
import { FaHouseChimney } from 'react-icons/fa6'

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
    <main>
      <button onClick={() => window.history.back()}>
        <FaHouseChimney />
      </button>
      <div>
        <div>
          <Image
            width={250}
            height={250}
            src={countryData.flags.png}
            alt={countryData.flags.alt}
          />
        </div>
        <div>
          <h2>{countryData.name.common}</h2>
          <p>{countryData.capital.join(', ')}</p>
          <p>{countryData.region}</p>
          <p>{countryData.continents.join(', ')}</p>
          <p>{countryData.borders?.join(', ')}</p>
          <p>{countryData.languages[Object.keys(countryData.languages)[0]]}</p>
        </div>
      </div>
    </main>
  )
}
