import { useState, useEffect } from "react";

const useCountries = ({ url }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      try {
        const response = await fetch(url);
        const countriesArray = await response.json();
        setCountries(countriesArray);
      } catch (e) {
        console.log(e);
      }
    }
    getCountries();
  }, [url]);

  return [countries];
};

export default useCountries;
