import React from "react";
import { useState } from "react";

const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);

  const toggle = () => {
    setShow(!show);
  };
  // variable , function
  return { show, toggle };
};

export default useToggle;
