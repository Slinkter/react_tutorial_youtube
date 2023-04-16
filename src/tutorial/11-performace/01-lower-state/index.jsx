import React from "react";
import { useState } from "react";
import { data } from "../../../db/data";
import Counter from "./Counter";
import List from "./List";

const LowerState = () => {
  const [people, setPeople] = useState(data);

  return (
    <section>
      <Counter />
      <List people={people} />
    </section>
  );
};

export default LowerState;
