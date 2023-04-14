import React, { useEffect, useRef } from "react";

const initial = null;

const UseRefBasics = () => {
  //
  const refContainer = useRef(initial);
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", refContainer.current.value);
  };
  //
  useEffect(() => {
    refContainer.current.focus();
    console.log("useEffect", refContainer.current);
  });
  //
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
