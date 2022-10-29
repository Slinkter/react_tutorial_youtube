import React, { useState } from "react";

const UseStateCounter = () => {
    const [value, setValue] = useState(0);

    const increase = () => setValue(value + 1);
    const decrease = () => setValue(value - 1);

    const reset = () => {
        setValue(0);
    };

    return (
        <React.Fragment>
            <section style={{ margin: "4rem 0" }}>
                <h2>regular counter</h2>
                <h1>{value}</h1>
                <button className="btn" onClick={increase}>
                    increase
                </button>
                <button className="btn" onClick={decrease}>
                    decrease
                </button>
                <button className="btn" onClick={reset}>
                    reset
                </button>
            </section>
        </React.Fragment>
    );
};

export default UseStateCounter;
