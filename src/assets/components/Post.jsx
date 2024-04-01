import React from "react";
import person from "../js/person.js";
import { post } from "../js/httpRequests.js";

const Ben = new person("Ben", "Demetrius", 25);

const Post = () => {
  return (
    <div className="Comp">
      <p>
        {Ben.firstname}! {Ben.age}.
      </p>
      <button onClick={() => post(Ben)}>POST</button>
    </div>
  );
};

export default Post;
