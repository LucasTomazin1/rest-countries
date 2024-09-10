import { Link } from 'react-router-dom'
import { Country } from '../../service/api'

export const CountryCards: React.FC<{ countries: Country[] }> = ({
  countries,
}) => {
  return (
    <>
      {countries.map((country, index) => (
        <Link
          onClick={() => country.name.common}
          key={index}
          to={`/country/${country.name.common.toLowerCase()}`}
          className="flex flex-col overflow-hidden rounded shadow-md w-64 sm:w-56"
        >
          <div className="">
            <img
              width={250}
              height={160}
              src={country.flags.png}
              alt={`flag of: ${country.name.common}`}
              className="object-center w-screen h-36"
            />
          </div>
          <div className="p-4 flex flex-col gap-2 text-sm">
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
