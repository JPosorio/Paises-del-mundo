import { BiArrowBack } from "react-icons/bi";
import { useLocation } from "wouter";
import "../styles/Back.css";

const Back = () => {
  const [, setLocation] = useLocation();

  const returnHome = () => {
    setLocation("/");
  };

  return (
    <div onClick={returnHome} className="container-back">
      <BiArrowBack />
      <p>Back</p>
    </div>
  );
};

export default Back;
