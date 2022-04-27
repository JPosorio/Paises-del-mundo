import { useLocation } from "wouter";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import Dropdown from "../components/Dropdown";
import { getCountry } from "../helpers/countryHelpers";
import "../styles/Search.css";

const Search = () => {
  const [, setLocation] = useLocation();
  const [word, setWord] = useState("");

  const searching = async (e) => {
    e.preventDefault();
    if (word === "") return;
    const verify = await getCountry(word);
    if (verify.status === 404) return;
    setLocation(`/search/${word}`);
    setWord("");
  };

  const inputChange = (e) => {
    setWord(e.target.value);
  };

  return (
    <div className="container-search">
      <form onSubmit={searching}>
        <AiOutlineSearch className="lupa" onClick={searching} />
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={inputChange}
        />
      </form>
      <div className="filter-region">
        <div className="filter-region-container">
          <p>Filter by Region</p>
          <RiArrowDropDownLine className="down" />
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Search;
