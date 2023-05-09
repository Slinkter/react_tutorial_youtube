import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const firstValue = text || "A";
  const secondValue = text && "B";

  return (
    <React.Fragment>
      <hr />
      {<p> Rpta 11: {firstValue}</p> && <p>value : {secondValue}</p>}
      <p> Rpta : {text || "john doe"}</p>
      <hr />
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>

      {isError && <h1>Error...</h1>}

      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>no error</h2>
        </div>
      )}
      <hr />
    </React.Fragment>
  );
};

export default ShortCircuit;
