import { useLocation } from "wouter";
import "../styles/Card.css";

const Card = ({ item }) => {
  const [, setLocation] = useLocation();

  const detailInfo = (item) => {
    setLocation(`/search/${item.name.common}`);
  };
  return (
    <div onClick={() => detailInfo(item)} className="card-container">
      <img className="card-flag" alt="flag" src={item.flags.png} />
      <div>
        <h4>{item.name.common}</h4>
        <p>
          <strong>Population: </strong> {item.population}
        </p>
        <p>
          <strong>Region: </strong> {item.region}
        </p>
        <p>
          <strong>Capital: </strong> {item.capital}
        </p>
      </div>
    </div>
  );
};
export default Card;
