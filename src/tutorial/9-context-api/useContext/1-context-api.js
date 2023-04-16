import React from "react";
import { data } from "../../../db/data";
// create context
const PersonContext = React.createContext();
// Combine context and funciones
const ContextAPI = () => {
  // hook
  const [people, setPeople] = React.useState(data);
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
      <h3> CreateContext - useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  //
  const data = React.useContext(PersonContext);
  //
  return (
    <>
      {data.people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </>
  );
};

const Person = ({ id, name }) => {
  //
  const { removePerson } = React.useContext(PersonContext);
  const handleRemove = () => removePerson(id);
  //
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={handleRemove}>remove</button>
    </div>
  );
};

export default ContextAPI;
