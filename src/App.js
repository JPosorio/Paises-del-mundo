import Header from "./components/Header";
import Search from "./components/Search";
import Grilla from "./components/Grilla";
import Country from "./components/Country";
import CountryBorder from "./components/CountryBorder";
import Region from "./components/Region";
import { Route, Switch } from "wouter";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/">
          <Search />
          <Grilla />
        </Route>
        <Route path="/search/:country" component={Country} />
        <Route path="/search/border/:country" component={CountryBorder} />
        <Route path="/search/region/:region" component={Region} />
      </Switch>
    </div>
  );
}

export default App;
