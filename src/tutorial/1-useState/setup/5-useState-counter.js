import React, { useState } from "react";

const UseStateCounter = () => {
  const [num, setNum] = useState(0);

  return (
    <>
      <h2>useState counter example</h2>

      <section style={{margin:'4rem'}}>
        <div>
          <h1>{num}</h1>
        </div>

        <div>
          <button
            className="btn "
            onClick={() => {
              setNum(num - 1);
            }}
          >
            decrease
          </button>
          <button
            className="btn "
            onClick={() => {
              setNum(0);
            }}
          >
            reset
          </button>
          <button
            className="btn "
            onClick={() => {
              setNum(num + 1);
            }}
          >
            increase
          </button>
        </div>
      </section>
    </>
  );
};

export default UseStateCounter;
