'use client'
import Image from 'next/image'
import { getCountry } from '../../service/api'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FaHouseChimney } from 'react-icons/fa6'

export default function Country({ params }: { params: { name: string } }) {
  const router = useRouter()
  const { name } = router.query
  const [country, setCountry] = useState<any>()

  useEffect(() => {
    if (!router.isReady) return
    const fetchData = async () => {
      const data = await getCountry(name as string)
      if (data) setCountry(data[0])
    }
    fetchData()
  }, [params.name])

  console.log(country)

  if (!country) return <p>Loading...</p>
  return (
    <main>
      <button onClick={() => router.back()}>
        <FaHouseChimney />
      </button>
      <div>
        <div>
          <Image src={country.flags.png} alt={country.name.common} />
        </div>
        <div>
          <h2>{country.name.common}</h2>
          <p>{country.capital}</p>
          <p>{country.region}</p>
          <p>{country.population.toLocaleString('pt-BR')}</p>
          <p>{country.languages[Object.keys(country.languages)[0]]}</p>
        </div>
      </div>
    </main>
  )
}
