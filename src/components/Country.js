import useCountry from "../hooks/useCountry";
import CardCountryDetail from "../components/CardCountryDetail";

const Country = ({ params }) => {
  const { country } = params;

  const [countryArray] = useCountry({
    keyword: country,
    url: `https://restcountries.com/v3.1/name/${country}?fullText=true`,
  });

  return <CardCountryDetail countryArray={countryArray} />;
};

export default Country;
