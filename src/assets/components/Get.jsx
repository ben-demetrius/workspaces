import React, { useEffect, useState } from "react";
import { get } from "../js/httpRequests.js";

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

  const cards = (data) => {
    return (
      <div>
        <p>{data.firstname}</p>
        <p>{data.lastname}</p>
        <p>{data.yearsLeft}</p>
      </div>
    );
  };

  return (
    <div>
      {data.map((data, index) => {
        return <div key={index}>{cards(data)}</div>;
      })}
    </div>
  );
};

export default Get;
