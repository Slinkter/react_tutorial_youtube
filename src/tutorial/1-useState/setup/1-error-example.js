import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    title = "hello people";
    console.log(title);
  };

  return (
    <>
      <h2>{title}</h2>
      <button onClick={handleClick}>Change Title</button>
    </>
  );
};

export default ErrorExample;
