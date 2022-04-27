import {
  getNativeName,
  getLanguage,
  getCurrency,
  getBorders,
} from "../helpers/countryHelpers";
import Back from "./Back";
import { useLocation } from "wouter";
import "../styles/Country.css";

const CardCountryDetail = ({ countryArray }) => {
  const [, setLocation] = useLocation();

  return (
    <div>
      <Back />
      {countryArray.map((item) => {
        return (
          <div key={item.name.common} className="countryDetail-container">
            <img src={item.flags.svg} alt="flag" />
            <div className="container-text">
              <div className="countryDetail-text">
                <div className="countryDetail-first-child">
                  <h2>{item.name.common}</h2>
                  <p>
                    <strong>Native Name:</strong> {getNativeName(item)}
                  </p>
                  <p>
                    <strong>Population: </strong> {item.population}
                  </p>
                  <p>
                    <strong>Region:</strong> {item.region}
                  </p>
                  <p>
                    <strong>Subregion: </strong> {item.subregion}
                  </p>
                  <p>
                    <strong>Capital:</strong> {item.capital[0]}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Top Level Domain:</strong> {item.tld}
                  </p>
                  <p>
                    <strong>Currencies: </strong> {getCurrency(item)}
                  </p>
                  <p>
                    <strong>Languages: </strong> {getLanguage(item)}
                  </p>
                </div>
              </div>
              <div className="container-borders">
                <strong>Border Countries: </strong>
                {getBorders(item, setLocation)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardCountryDetail;
