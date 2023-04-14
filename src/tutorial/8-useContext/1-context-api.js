import React, { useState, useContext } from "react";
import { data } from "../../../data";
// create context
const PersonContext = React.createContext();
// Combine context and funciones
const ContextAPI = () => {
  // hook
  const [people, setPeople] = useState(data);
  // func-remove
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  //
  const values = { people, removePerson };
  // render
  return (
    <PersonContext.Provider value={values}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  //
  const mainData = useContext(PersonContext);
  //
  return (
    <div>
      {mainData.people.map((person) => (
        <SinglePerson key={person.id} {...person} />
      ))}
    </div>
  );
};

const SinglePerson = ({ id, name }) => {
  // consumir
  const { removePerson } = useContext(PersonContext);
  //
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
