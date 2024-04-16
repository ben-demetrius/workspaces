import React, { useEffect, useState } from "react";
import { get } from "../js/httpRequests.js";
import "../styles/card.scss";
import "../styles/get.scss";

const Get = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    get().then(setData);
  }, []);
  console.log(data);
  
  return (
    <div className="get">
      {data.map((data, index) => {
        return (
          <div className="card" key={index}>
            <h1>{data.firstname}</h1>
            <h3>{data.lastname}</h3>
            <p>{data.yearsLeft}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Get;
