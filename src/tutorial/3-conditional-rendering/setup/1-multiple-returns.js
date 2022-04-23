import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  /*  */
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");
  /*  */
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          /*  */
          if (response.status >= 200 && response.status <= 300) {
            const rpta = response.json();
            console.log(response);
            console.log(rpta);
            return rpta;
          } else {
            setIsLoading(false);
            setIsError(true);
            throw new Error(response.statusText);
          }
          /*  */
        })
        .then((user) => {
          const { name } = user;
          setUser(name);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  }, []);

  /*  */
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  /*  */
  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }
  /*  */
  return (
    <div>
      <h3>{user}</h3>
    </div>
  );
};

export default MultipleReturns;
