import { useRouter } from 'next/router'
import Fuse from 'fuse.js'

const countries = ['']
export const CountryNotFound = () => {
  const router = useRouter()
  const { search } = router.query

  const fuse = new Fuse(countries, {
    includeScore: true,
    threshold: 0.3,
  })

  const results = fuse.search(search as string)
  const similarCountries = results.map((result) => result.item)

  return (
    <div>
      <h1>Country Not Found</h1>
      {similarCountries.length > 0 && (
        <div>
          <h2>Did you mean:</h2>
          <ul>
            {similarCountries.map((country) => (
              <li key={country}>{country}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
