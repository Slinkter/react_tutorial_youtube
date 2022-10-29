import React, { useState, useReducer } from "react";
import Modal from "./Modal";
// reducer function
import { reducer, defaultState, types } from "./reducer";

const Index = () => {
    const [name, setName] = useState("");
    const [state, dispatch] = useReducer(reducer, defaultState);
    //
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const newItem = { id: new Date().getTime().toString(), name };
            dispatch({ type: types.addItem, payload: newItem });
            setName("");
        } else {
            dispatch({ type: types.noValue });
        }
    };
    const closeModal = () => {
        dispatch({ type: types.closeModal });
    };
    return (
        <>
            {state.isModalOpen && (
                <Modal
                    closeModal={closeModal}
                    modalContent={state.modalContent}
                />
            )}
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button type="submit">add </button>
            </form>
            {state.people.map((person) => {
                return (
                    <div key={person.id} className="item">
                        <h4>{person.name}</h4>
                        <button
                            onClick={() =>
                                dispatch({
                                    type: types.removeItem,
                                    payload: person.id,
                                })
                            }
                        >
                            remove
                        </button>
                    </div>
                );
            })}
        </>
    );
};

export default Index;
