import React, { useState } from "react";

const ShortCircuitExamples = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);
  //

  return (
    <div>
      <h2>{text || "default text"}</h2>
      {text && <div> {name} </div>}
      {!text && <h4>also word</h4>}
      {user && <SomeComponent name={user.name}></SomeComponent>}
      {}
      <button className="btn"> {isEditing ? "edit" : "add"}</button>
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <>
      <h4>hello {name}</h4>
      <button className="btn">Log out</button>
      <br />
    </>
  );
};

export default ShortCircuitExamples;
