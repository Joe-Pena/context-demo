import { useContext, useEffect, useState, createContext } from "react";
import axios from "axios";

const CodingContext = createContext();

export const useCoding = () => {
  return useContext(CodingContext);
};

export const CodingProvider = ({ children }) => {
  const [codingData, setCodingData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.sampleapis.com/codingresources/codingResources")
      .then((res) => {
        setCodingData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <CodingContext.Provider value={{ codingData }}>
      {children}
    </CodingContext.Provider>
  );
};
