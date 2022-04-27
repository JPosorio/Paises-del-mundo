import { useState, useEffect } from "react";

const useCountry = ({ keyword, url }) => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    async function getCountry() {
      try {
        const response = await fetch(url);
        const countryArray = await response.json();
        setCountry(countryArray);
      } catch (e) {
        console.log(e);
      }
    }
    getCountry();
  }, [keyword, url]);

  return [country];
};

export default useCountry;
