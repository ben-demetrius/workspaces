import React from "react";
import { get } from "../js/httpRequests.js";

const text = get();
const Get = () => {
  console.log(get());
  return <div className="get">{text}</div>;
};

export default Get;
