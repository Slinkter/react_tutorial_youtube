import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.group('handleSubmit')
    console.log('refContainer.current.value');
    console.log(refContainer.current.value);
    console.groupEnd()
  };

  useEffect(() => {
    console.group('UseEffect')
    refContainer.current.focus();
    console.log(' refContainer.current.focus');
    console.log(refContainer.current);
    console.groupEnd()
  });

  return (
    <>
      <h2>useRef</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" className="" ref={refContainer} />
          <button type="submit" className="btn ">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
