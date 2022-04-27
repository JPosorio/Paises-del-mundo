const getNativeName = (item) => {
  let valuesName = Object.values(item.name.nativeName);
  return valuesName[0].common;
};

const getCurrency = (item) => {
  let currency = Object.values(item.currencies);
  return currency[0].name;
};

const getLanguage = (item) => {
  let valuesLanguages = Object.values(item.languages);
  let finalLanguages = "";
  valuesLanguages.forEach((language) => {
    if (language === valuesLanguages[valuesLanguages.length - 1])
      return (finalLanguages += language);
    finalLanguages += `${language}, `;
  });
  return finalLanguages;
};

const getBorders = (item, setLocation) => {
  if (item.borders === undefined) return " Not found";
  return item.borders.map((border) => {
    return (
      <div
        className="country-border"
        key={border}
        onClick={() => borderCountryDetail(setLocation, border)}
      >
        {border}
      </div>
    );
  });
};

const borderCountryDetail = (setLocation, border) => {
  setLocation(`/search/border/${border}`);
};

const getCountry = async (word) => {
  async function existCountry() {
    try {
      const country = await fetch(
        `https://restcountries.com/v3.1/name/${word}?fullText=true`
      );
      const response = await country.json();
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  return await existCountry();
};

export { getNativeName, getCurrency, getLanguage, getBorders, getCountry };
