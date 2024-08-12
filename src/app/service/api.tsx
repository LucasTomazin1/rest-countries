'use client'

// Tipos para os dados dos países
interface Country {
  name: {
    common: string
  }
  capital: string
  region: string
  population: number
  flags: {
    png: string
  }
}

export const getCountries = async (): Promise<Country[]> => {
  try {
    const results = await fetch('https://restcountries.com/v3.1/all')
    const data: Country[] = await results.json()
    return data
  } catch (error) {
    console.log('getCountries error: ', error)
    return []
  }
}

export const getCountry = async (name: string): Promise<Country[] | null> => {
  try {
    const results = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const data: Country[] = await results.json()
    console.log(data)
    return data
  } catch (error) {
    console.log('getCountry error: ', error)
    return null
  }
}
