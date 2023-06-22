import { BeerProvider } from '@/context/beerContext'
import { CoffeeProvider } from '@/context/coffeeContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <CoffeeProvider>
    <BeerProvider>
      <Component {...pageProps} />
    </BeerProvider>
    </CoffeeProvider>
  )
}
