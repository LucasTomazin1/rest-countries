import { ChangeEvent } from 'react'

interface FilterByRegionProps {
  onFilterChange: (region: string) => void
}

export const FilterByRegion = ({ onFilterChange }: FilterByRegionProps) => {
  const regions = [
    'All regions',
    'Africa',
    'Americas',
    'Antarctic',
    'Asia',
    'Europe',
    'Oceania',
  ]

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = e.target.value
    onFilterChange(selectedRegion)
  }

  return (
    <section className="shadow-md rounded-lg w-68 sm:w-80">
      <select
        className="w-full p-3 rounded-lg focus:outline-none text-zinc-400"
        onChange={handleSelectChange}
      >
        <option disabled selected className="text-black">
          Filter by Region
        </option>
        {regions.map((region) => (
          <option key={region} value={region} className="text-black">
            {region}
          </option>
        ))}
      </select>
    </section>
  )
}
