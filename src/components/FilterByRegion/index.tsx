import { ChangeEvent } from 'react'
import { useTheme } from '../../hooks/UseTheme'

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
  const { theme } = useTheme()
  const isDarkMode = theme === 'dark'

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = e.target.value
    onFilterChange(selectedRegion)
  }

  return (
    <section
      className={`shadow-md rounded-lg w-68 sm:w-80 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      }`}
    >
      <select
        className={`w-full p-3 rounded-lg focus:outline-none text-zinc-400 ${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
        }`}
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
