import React, { useState, useEffect } from "react";

// cleanup function
// second argument
const initialValue = window.innerWidth;

const UseEffectCleanup = () => {
  //
  const [size, setSize] = useState(initialValue);
  const [show, setShow] = useState(false);
  //
  const handleUpdateSize = () => {
    setSize(window.innerWidth);
  };
  //
  useEffect(() => {
    console.log("2- useEffect start");
    window.addEventListener("resize", handleUpdateSize);
    return () => {
      console.log("3 - cleanup - useEffect end");
      window.removeEventListener("resize", handleUpdateSize);
    };
  }, []);
  console.log("1 - render component ");
  return (
    <>
      <button onClick={() => setShow(!show)}>show</button>
      {show && (
        <div>
          <h1>window</h1>
          <h2>{size} PX</h2>
        </div>
      )}
    </>
  );
};

export default UseEffectCleanup;
