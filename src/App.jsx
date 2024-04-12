import React from "react";
import "./assets/styles/App.scss";
import Post from "./assets/components/Post";
import Get from "./assets/components/Get";
import { removePeople } from "../src/assets/js/removePeople";
import { addPeople } from "./assets/js/addPeople";

//removePeople();
//await addPeople();
const App = () => {
  return (
    <div className="App">
      <Post />
      <button onClick={addPeople}>POST from App</button>
      <button onClick={removePeople}>Remove from App</button>
      <Get />
    </div>
  );
};

export default App;
