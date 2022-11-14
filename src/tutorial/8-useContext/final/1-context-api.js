import React, { useState, useContext } from "react";
import { data } from "../../../data";

const PersonContext = React.createContext();
// two components - Provider, Consumer

const ContextAPI = () => {
    //
    const [people, setPeople] = useState(data);
    //
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        });
    };
    //
    return (
        <PersonContext.Provider value={{ people, removePerson }}>
            <h3>Context API / useContext</h3>
            <List />
        </PersonContext.Provider>
    );
};

const List = () => {
    // consumir
    const mainData = useContext(PersonContext);
    //
    return (
        <div>
            {mainData.people.map((person) => {
                return <SinglePerson key={person.id} {...person} />;
            })}
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
