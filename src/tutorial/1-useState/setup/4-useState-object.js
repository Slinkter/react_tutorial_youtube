import React, { useState } from "react";

const UseStateObject = () => {
  const obj = {
    name: "peter",
    age: 24,
    message: " message",
  };

  const [person, setPerson] = useState(obj);

  const changeMessage = () => {
    console.log(person);
    setPerson({ ...person, message: "hello world" });
    console.log(person);
  };

  return (
    <>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>

      <button className="btn" onClick={changeMessage}> Change Message</button>
    </>
  );
};

export default UseStateObject;
