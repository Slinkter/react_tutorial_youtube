import React from "react";
import { useState } from "react";
import "../../index.css";

/* const initialCount = 0;

const Index = () => {
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h4> you clicked {count} times</h4>
      <button className="btn" onClick={handleClick}>
        Click
      </button>
    </div>
  );
};
 */

const initialPeople = [
  { id: 1, name: "bob", nickName: "Stud Muffin" },
  { id: 2, name: "peter" },
  {
    id: 3,
    name: "oliver",
    images: [
      {
        small: {
          url: "https://res.cloudinary.com/diqqf3eq2/image/upload/ar_1:1,bo_5px_solid_rgb:ff0000,c_fill,g_auto,r_max,w_1000/v1595959121/person-1_aufeoq.jpg",
        },
      },
    ],
  },
  { id: 4, name: "david" },
];

const Index = () => {
  const [people, setPeople] = useState(initialPeople);

  const handleRemoveItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      <h1> Array hook</h1>
      {people.map((person) => {
        console.log(person);
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="" onClick={() => handleRemoveItem(id)}>
              delete me
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={() => setPeople([])}
      >
        clear items
      </button>
    </>
  );
};

export default Index;
