import React, { useState } from "react";

const UseStateBasics = () => {
  /*  */
  const [text, setText] = useState("random title");
  const handleClick = () => {
    if (text === "random title") {
      setText("Hello worlds");
    } else {
      setText("random title");
    }
  };

  /*  */
  return (
    <>
      <h1>{text}</h1>
      <button className="btn" type="button" onClick={handleClick}>
        Changle Title
      </button>
    </>
  );
};

export default UseStateBasics;
