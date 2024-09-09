import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './pages/Routes'
import { Header } from './components/Header/Header'
import './index.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
