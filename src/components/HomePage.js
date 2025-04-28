import React, { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  const [data, setData] = useState([]);

  const url =
    "https://gist.githubusercontent.com/calvez/56bec47cb9c97d9999574adc65ef5368/raw/51f01cb2a160748d87dd40eae7d3785272a87355/all.json";

  const apiCall = () => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        return setData(res.data);
      })
      .catch((error) => {
        console.error("Error during API call:", error);
      });
  };

  return (
    <div className="home">
      HomePage
      <button className="max-h-[75vh] px-10" onClick={apiCall}>
        Lekérdezés
      </button>
      <div>
        {data.map(
          (
            id,
            nev,
            alkotasAzonosito,
            keletkezesKezdoIdopontjaInt,
            tipus,
            megjelenitendoNev
          ) => (
            <div id={id} className={alkotasAzonosito}>
              <h1>{nev}</h1>
              <div>{megjelenitendoNev}</div>
              <div>{keletkezesKezdoIdopontjaInt}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default HomePage;
