import Grilla from "../components/Grilla";
import Back from "../components/Back";

const Region = ({ params }) => {
  const { region } = params;
  const url = `https://restcountries.com/v3.1/region/${region}`;

  return (
    <div>
      <Back />
      <Grilla url={url} />
    </div>
  );
};

export default Region;
