import useCountries from "../hooks/useCountries";
import Card from "./Card";
import "../styles/Grilla.css";

const Grilla = ({ url = "https://restcountries.com/v3.1/all" }) => {
  const [countries] = useCountries({ url });

  return (
    <div className="container-grilla">
      {countries.map((item) => (
        <Card key={item.name.common} item={item} />
      ))}
    </div>
  );
};

export default Grilla;
