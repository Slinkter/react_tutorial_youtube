import React, { useState } from "react";

const initialPerson = {
    name: "peter",
    age: 24,
    message: "random message",
};

const UseStateObject = () => {
    const [person, setPerson] = useState(initialPerson);

    const changeName = () => {
        setPerson({ ...person, name: "Juan" });
    };
    const changeAge = () => {
        setPerson({ ...person, age: 25 });
    };
    const changeMessage = () => {
        setPerson({ ...person, message: "hello world" });
    };

    const resetPerson = () => {
        setPerson(initialPerson);
    };

    return (
        <React.Fragment>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h4>{person.message}</h4>
            <button className="btn" onClick={changeName}>
                change Name
            </button>
            <button className="btn" onClick={changeAge}>
                change age
            </button>
            <button className="btn" onClick={changeMessage}>
                change message
            </button>
            <button className="btn" onClick={resetPerson}>
                reset
            </button>
        </React.Fragment>
    );
};

export default UseStateObject;
