import React, { useState } from "react";
import Person from "../js/Person.js";

const Post = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [age, setAge] = useState("");

  return (
    <form className="Post">
      <input
        type="text"
        placeholder="First Name"
        id="fname"
        value={firstName}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        id="lname"
        value={lastName}
        onChange={(e) => setLastname(e.target.value)}
      />
      <input
        type="int"
        placeholder="Age"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={() => new Person(firstName, lastName, age)}>POST</button>
    </form>
  );
};

export default Post;
