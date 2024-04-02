import React, { useEffect, useState } from "react";
import { get } from "../js/httpRequests.js";

const Get = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");

  const fetchData = async () => {
    const data = await get();
    for (let i = 0; i <= data.items.length; i++) {
      setFirstname(data.items[i].firstname);
      setLastname(data.items[i].lastname);
      setAge(data.items[i].age);
      console.log(i);
      console.log(firstname);
    }
  };

  useEffect(() => {
    //    console.log("holla Ben");
    fetchData();
  }, []);

  return (
    <div div className="get">
      Hello {firstname} {lastname}, age - {age}
    </div>
  );
};

export default Get;
