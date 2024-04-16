import React, { useEffect, useState } from "react";
import { get } from "../js/httpRequests.js";
import "../styles/card.scss";
import "../styles/get.scss";

const Get = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const fetchdata = await get();
    //console.log(fetchdata);
    setData(fetchdata);
  };

  useEffect(() => {
    // setData(fetchData);
    fetchData();
  }, []);

  // console.log(data[1].firstname);
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
