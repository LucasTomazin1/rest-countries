import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './pages/Routes'
import { Header } from './components/Header/Header'
import { ThemeProvider } from './contexts/ThemeContext'
import './index.css'

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
