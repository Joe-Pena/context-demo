import { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';

const BeerContext = createContext();

export const useBeer = () => {
  return useContext(BeerContext);
}

export const BeerProvider = ({ children }) => {
  const [beerData, setBeerData] = useState([]);

  useEffect(() => {
    axios.get('https://api.sampleapis.com/beers/stouts')
      .then(res => {
        setBeerData(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <BeerContext.Provider value={{ beerData }}>
      {children}
    </BeerContext.Provider>
  )
}

