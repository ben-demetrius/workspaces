import React from "react";
import "./assets/styles/app.scss";
import Cards from "./assets/components/Cards";

const objectToDisplay = "/o/c/snbresearchlibraries/";
const App = () => {
  return (
    <div className="react-template">
      <Cards url={objectToDisplay} />
    </div>
  );
};

export default App;
