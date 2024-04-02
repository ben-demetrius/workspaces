import React from "react";
import person from "../js/person.js";
import { post } from "../js/httpRequests.js";

const Ben = new person("Ben", "Demetrius");
const Ben10 = new person("Ben10", "Demetrius");
const Ben100 = new person("Ben100", "Demetrius");

const Post = () => {
  return (
    <div className="Comp">
      <p>
        {Ben.firstname}! {Ben.age}.
      </p>
      <button onClick={() => post(Ben)}>POST</button>
      <button onClick={() => post(Ben10)}>POST 10</button>
      <button onClick={() => post(Ben100)}>POST 100</button>
    </div>
  );
};

export default Post;
