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
        {data.map((item) => (
          <div key={item.id} id={item.id} className={item.alkotasAzonosito}>
            <h1>{item.nev}</h1>
            <div>{item.alkotasAzonosito}</div>
            <div>{item.keletkezesKezdoIdopontjaInt}</div>
            <div>{item.tipus}</div>
            <div>{item.megjelenitendoNev}</div>
            <img src={`https://picsum.photos/200/300?random${item.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
