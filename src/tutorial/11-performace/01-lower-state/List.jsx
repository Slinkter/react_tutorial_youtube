import React from "react";
import Person from "./Person";

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </div>
  );
};

export default List;
