import React, { useState, useContext } from "react";
import { data } from "../../../data";
//
const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3> CONTEXT API </h3>
      <List />
    </PersonContext.Provider>
  );
};
//
const PersonContext = React.createContext();
//

const List = () => {
  const mainData = useContext(PersonContext);
  console.log(mainData);
  return (
    <div>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </div>
  );
};

const SinglePerson = (props) => {
  //
  const { id, name } = props;
  const { removePerson } = useContext(PersonContext);

  //
  return (
    <div className="item">
      <h4>
        <span>{id}</span> {name}
      </h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};
export default ContextAPI;
