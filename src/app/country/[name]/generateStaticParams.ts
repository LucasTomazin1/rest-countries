import { getCountries, Country } from '@/app/service/api'

export async function generateStaticParams() {
  const countries: Country[] = await getCountries()
  return countries.map((country) => ({
    name: country.name.common,
  }))
}
