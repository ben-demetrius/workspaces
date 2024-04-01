import React, { useEffect, useState } from "react";
import { get } from "../js/httpRequests.js";

const [text, setText] = useState("");

const fetchData = async () => {
  const data = await get();
  setText(data);
};

useEffect(() => {
  fetchData();
  console.log(text);
}, []);

const Get = () => {
  console.log(get());
  return <div className="get">{text}</div>;
};

export default Get;
