import React, { useEffect, useState } from "react";

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  // value
  useEffect(() => {
    console.log(" useEffect value");
    return () => {};
  }, [value]);
  // secondValue
  useEffect(() => {
    console.log(" useEffect secondvalue");
    return () => {};
  }, [secondValue]);

  return (
    <div>
      <h1>MultipleEffects </h1>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)}>value</button>
      <h1>secondValue : {secondValue}</h1>
      <button onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
    </div>
  );
};

export default MultipleEffects;
