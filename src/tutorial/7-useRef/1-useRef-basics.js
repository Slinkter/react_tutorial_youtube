import React, { useEffect, useRef, useState } from "react";

const initial = null;
const initValue = 0;
const initBoolean = false;

const UseRefBasics = () => {
  //
  const [value, setValue] = useState(initValue);
  const refContainer = useRef(initial);
  const isMounted = useRef(initBoolean);
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current);
    const name = refContainer.current.value;
    console.log(name);
    console.log("refContainer.current.value : ", refContainer.current.value);
  };
  //
  useEffect(() => {
    refContainer.current.focus();
    console.log("useEffect", refContainer.current);
  });
  //
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log("re-render");
    return () => {};
  }, [value]);

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            {" "}
            name
          </label>
          <input
            type="text"
            ref={refContainer}
            id="name"
            className="form-input"
          />
        </div>
        <button className="btn btn-block" type="submit">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </>
  );
};

export default UseRefBasics;
