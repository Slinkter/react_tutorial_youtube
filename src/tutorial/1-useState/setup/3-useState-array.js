import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  /*   console.log(data); */

  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((persona) => persona.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      <h2>useState array example</h2>
      {people.map((persona) => {
        const { id, name } = persona;

        return (
          <div key={id} className="item">
            <h3>{name} </h3>
            <button className="" onClick={() => removeItem(id)}>remove </button>
          </div>

      
          
        );
      })}

      <button className="btn" onClick={()=> setPeople([])} >Clear items</button>
    </>
  );
};

export default UseStateArray;
