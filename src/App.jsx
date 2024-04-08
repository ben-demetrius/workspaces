import React from "react";
import "./assets/styles/App.scss";
import Post from "./assets/components/Post";
import Get from "./assets/components/Get";
import { removePeople } from "../src/assets/js/removePeople";

removePeople();
const App = () => {
  return (
    <div className="App">
      <Post />
      {/* <Get /> */}
    </div>
  );
};

export default App;
