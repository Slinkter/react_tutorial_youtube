import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const updateSizeWindow = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("Inicia useEffect");
    window.addEventListener("resize", updateSizeWindow);
    console.log("cleanup");
    return () => {
    
      window.removeEventListener("resize", updateSizeWindow);
    };
  }, []);

  return (
    <>
      <h2>useEffect cleanup</h2>
      <h1>Window innerWidth</h1>
      {size}
    </>
  );
};

export default UseEffectCleanup;
