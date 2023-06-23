import { BeerProvider } from "@/context/beerContext";
import { CodingProvider } from "@/context/codingContext";
import { CoffeeProvider } from "@/context/coffeeContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <CoffeeProvider>
      <BeerProvider>
        <CodingProvider>
          <Component {...pageProps} />
        </CodingProvider>
      </BeerProvider>
    </CoffeeProvider>
  );
}
