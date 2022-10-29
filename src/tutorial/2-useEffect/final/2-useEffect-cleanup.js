import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth);
    const [show, setShow] = useState(false);

    const checkSize = () => {
        setSize(window.innerWidth);
    };

    useEffect(() => {
        console.log("2- useEffect");
        window.addEventListener("resize", checkSize);
        return () => {
            console.log("3 - cleanup");
            window.removeEventListener("resize", checkSize);
        };
    }, []);
    console.log("1 - render");
    return (
        <>
            <button onClick={() => setShow(!show)}>show</button>

            {show && (
                <div>
                    <h1>window</h1>
                    <h2>{size} PX</h2>
                </div>
            )}
        </>
    );
};

export default UseEffectCleanup;
