import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";
const initialDefault = null;

const MultipleReturns = () => {
  // HOOKS
  const [user, setUser] = useState(initialDefault);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // FUNCTION AUX
  const getOneUser = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.log(res);
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const data = await res.json();
      setUser(data);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };
  //
  useEffect(() => {
    getOneUser();
  }, []);
  //
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error....</h1>
      </div>
    );
  }
  const { avatar_url, name, company, bio } = user;
  return (
    <div>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};

export default MultipleReturns;

/*
useEffect(() => {
        fetch(url)
            .then((resp) => {
                if (resp.status >= 200 && resp.status <= 299) {
                    return resp.json();
                } else {
                    setIsLoading(false);
                    setIsError(true);
                    throw new Error(resp.statusText);
                }
            })
            .then((user) => {
                const { login } = user;
                setUser(login);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, []); 
*/
