import { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';

const CoffeeContext = createContext();

export const useCoffee = () => {
  return useContext(CoffeeContext);
}

export const CoffeeProvider = ({ children }) => {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    axios.get('https://api.sampleapis.com/coffee/hot')
      .then(res => {
        setCoffeeData(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <CoffeeContext.Provider value={{ coffeeData }}>
      {children}
    </CoffeeContext.Provider>
  )
}

