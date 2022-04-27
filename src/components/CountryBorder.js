import useCountry from "../hooks/useCountry";
import CardCountryDetail from "../components/CardCountryDetail";

const CountryDetail = ({ params }) => {
  const { country } = params;

  const [countryArray] = useCountry({
    keyword: country,
    url: `https://restcountries.com/v3.1/alpha/${country}`,
  });

  return <CardCountryDetail countryArray={countryArray} />;
};

export default CountryDetail;
