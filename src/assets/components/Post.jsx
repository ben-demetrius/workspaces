import React, { useState } from "react";
import person from "../js/person.js";

const Post = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");

  return (
    <form className="Post">
      <input
        type="text"
        id="fname"
        value={firstName}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <input
        type="text"
        id="lname"
        value={lastName}
        onChange={(e) => setLastname(e.target.value)}
      />
      <button onClick={() => new person(firstName, lastName)}>POST</button>
    </form>
  );
};

export default Post;
