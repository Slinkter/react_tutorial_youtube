import React, { useState, useEffect } from "react";

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>Windows </h1>
      <h2>Size : {size}</h2>
    </div>
  );
};

const ShowHide = () => {
  //
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>show/hide</h1>
      <button
        className="btn "
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
      {show && <Item />}

      {console.log(show)}
    </>
  );
};

export default ShowHide;
