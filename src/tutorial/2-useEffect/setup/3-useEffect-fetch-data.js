import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  /*  */
  const getUser = async () => {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    setUsers(users);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h2>fetch data</h2>
      <h3>Github users</h3>
      <ul className="users">
        {users.map((user) => {
          /* console.log(user) */
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img className="" src={avatar_url} alt="" />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profie</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
