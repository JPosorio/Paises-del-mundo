import { BsMoon } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [dark, setDark] = useState();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (localStorage.getItem("darkmode") === "true") {
      document.querySelector("body").classList.add("darkmode");
      setDark("darkmode");
    } else {
      document.querySelector("body").classList.remove("darkmode");
    }
  }, []);

  const returnHome = () => {
    setLocation("/");
  };

  const changeMode = () => {
    const body = document.querySelector("body").classList;
    body.toggle("darkmode");
    setDark(body[0]);
    if (document.body.classList.contains("darkmode")) {
      localStorage.setItem("darkmode", "true");
    } else {
      localStorage.setItem("darkmode", "false");
    }
  };

  return (
    <div className="container-header">
      <div className="return-text" onClick={returnHome}>
        Where in the world?
      </div>
      <div onClick={changeMode}>
        {dark === "darkmode" ? <BsFillMoonFill /> : <BsMoon className="moon" />}
        <p className="moon">Dark Mode</p>
      </div>
    </div>
  );
};
export default Header;
