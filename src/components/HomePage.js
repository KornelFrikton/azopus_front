import React, { useState } from "react";
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
    <div className=" mx-auto flex flex-col items-center justify-center p-5">
      <button
        className=" rounded border-4 border-gray-400 p-3 text-2xl font-bold uppercase tracking-wider hover:scale-110"
        onClick={apiCall}
      >
        Lekérdezés
      </button>
      <div className=" flex flex-wrap items-center justify-center gap-5 p-5">
        {data.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className="w-72 h-[550px] flex flex-col items-center p-5"
          >
            <img
              className="p-2"
              alt={item.nev}
              src={`https://picsum.photos/300/400?random${item.id}`}
            />
            <div className="font-bold text-center uppercase tracking-wider">
              {item.nev}
            </div>
            <div>{item.alkotasAzonosito}</div>
            <div>{item.keletkezesKezdoIdopontjaInt}</div>
            <div>{item.tipus}</div>
            <div>{item.megjelenitendoNev}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
