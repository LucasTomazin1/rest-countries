'use server'

export interface Country {
  name: {
    common: string
    official: string
  }
  capital: string[]
  region: string
  population: number
  continents: string[]
  borders: string[]
  flags: {
    alt: string
    png: string
  }
  languages: {
    [key: string]: string
  }
}

export const getCountriesByRegion = async ({
  region,
}: {
  region: string
}): Promise<Country[]> => {
  try {
    const results = await fetch(
      `https://restcountries.com/v3.1/region/${region}`,
    )
    const data: Country[] = await results.json()
    return data
  } catch (error) {
    console.log('getCountriesByRegion error: ', error)
    return []
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

export const getCountry = async (name: string): Promise<Country | null> => {
  try {
    const results = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const data: Country = await results.json()
    return data
  } catch (error) {
    console.log('getCountry error: ', error)
    return null
  }
}
