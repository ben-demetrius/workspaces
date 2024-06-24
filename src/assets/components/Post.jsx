import React, { useState } from "react";
import Person from "../js/Person.js";

const Post = () => {
  const [age, setAge] = useState("");

  return (
    <form className="Post">
      <input
        type="int"
        placeholder="Age"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={() => new Person(age)}>POST</button>
    </form>
  );
};

export default Post;
