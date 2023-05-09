import React, { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      console.log("hola");
    }, 3000);

    return () => {};
  }, []);

  if (isLoading) {
    return <h2> Loading ...</h2>;
  }

  return (
    <div>
      <h1>hola</h1>
    </div>
  );
};

export default MultipleReturnsBasics;
