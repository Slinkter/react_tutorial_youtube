import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const [text, setText] = useState(""); // text : ''  , setText : 'sadasdasd '
  const [isError, setIsError] = useState(false); // isError : false , setIsError: True o false

  return (
    <>
      <h1>{text || "no name "} </h1>

      <button className="btn" onClick={() => setIsError(!isError)}>
        Aplicar Error
      </button>

      {isError && <h1>Error...</h1>}
      {console.log(isError)}

      {isError ? (
        <p> there is an error ...</p>
      ) : (
        <div>
          <p> there is no error </p>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
