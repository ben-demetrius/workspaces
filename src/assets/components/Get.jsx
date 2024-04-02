import React, { useEffect, useState } from "react";
import { get } from "../js/httpRequests.js";

const Get = () => {
  const [data, setData] = useState("");

  const fetchData = async () => {
    const fetchdata = await get();
    //console.log(fetchdata);
    setData(fetchdata.items[0].firstname);
  };

  useEffect(() => {
    //    console.log("holla Ben");
    fetchData();
  }, [data]);

  return (
    <div div className="get">
      Hello {data}
    </div>
  );
};

export default Get;
