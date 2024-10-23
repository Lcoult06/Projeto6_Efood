import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'

import { GlobalCss } from './styles'

import Footer from './components/Footer'
import Home from './components/pages/Home'
import Restaurante from './components/pages/Restaurantes'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes" element={<Restaurante />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
