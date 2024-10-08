import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import CountryDetails from './CountryDetails'

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/rest-countries" element={<Home />} />
      <Route path="/country/:name" element={<CountryDetails />} />
    </Routes>
  )
}
