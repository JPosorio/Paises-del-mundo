import { useLocation } from "wouter";
import "../styles/Search.css";

const Dropdown = () => {
  const [, setLocation] = useLocation();

  const searchRegion = (e) => {
    const region = e.target.innerText;
    setLocation(`/search/region/${region}`);
  };

  return (
    <div className="dropdown">
      <p onClick={searchRegion}>Asia</p>
      <p onClick={searchRegion}>Africa</p>
      <p onClick={searchRegion}>Americas</p>
      <p onClick={searchRegion}>Europe</p>
      <p onClick={searchRegion}>Oceania</p>
    </div>
  );
};

export default Dropdown;
