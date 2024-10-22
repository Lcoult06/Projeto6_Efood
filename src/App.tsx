import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from './components/Banner'
import Header from './components/Header'
import Product from './components/Product'
import { GlobalCss } from './styles'
import ProductsList from './components/ProductsList'
import Footer from './components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductsList />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
