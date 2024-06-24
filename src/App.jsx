import React from "react";
import "./assets/styles/App.scss";
import Post from "./assets/components/Post";
import Get from "./assets/components/Get";

const App = () => {
  return (
    <div className="App">
      <Post />
      <Get />
    </div>
  );
};

export default App;
