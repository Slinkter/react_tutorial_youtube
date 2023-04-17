import React, { useCallback, useMemo } from "react";
import { useState } from "react";
import { data } from "../../../db/data";
import Counter from "./Counter";
import List from "./List";
import Form from "./Form";
import slowFunction from "./slowFunction";

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const value = useMemo(() => slowFunction(), []);
  console.log(value);

  const removePerson = useCallback(
    (id) => {
      console.log(people);
      const newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    },
    [people]
  );

  const addPerson = (name) => {
    const fakeId = Date.now();
    const newPerson = {
      id: fakeId,
      name: name,
    };
    setPeople([...people, newPerson]);
  };

  return (
    <section>
      <Counter />
      <List people={people} removePerson={removePerson} />
      <Form addPerson={addPerson}></Form>
    </section>
  );
};

export default LowerState;
