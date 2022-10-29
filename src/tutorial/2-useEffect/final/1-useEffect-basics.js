import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
    const [value, setValue] = useState(0);

    const increment = () => setValue(value + 1);

    useEffect(() => {
        console.log("2 call useEffect");
        if (value > 0) {
            document.title = `New Messages(${value})`;
        }
    });

    console.log("1 render component");
    return (
        <React.Fragment>
            <h1>{value}</h1>
            <button className="btn" onClick={increment}>
                click me
            </button>
        </React.Fragment>
    );
};

export default UseEffectBasics;
