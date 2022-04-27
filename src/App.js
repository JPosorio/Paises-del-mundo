import Header from "./components/Header";
import Search from "./components/Search";
import Grilla from "./components/Grilla";
import Country from "./components/Country";
import CountryBorder from "./components/CountryBorder";
import Region from "./components/Region";
import { Route } from "wouter";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Route path="/">
        <Search />
        <Grilla url="https://restcountries.com/v3.1/all" />
      </Route>
      <Route path="/search/:country" component={Country} />
      <Route path="/search/border/:country" component={CountryBorder} />
      <Route path="/search/region/:region" component={Region} />
    </div>
  );
}

export default App;
