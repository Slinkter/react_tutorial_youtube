import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState("default user");

    const getOneUser = async () => {
        try {
            const res = await fetch(url);
            if (res.status !== 200) {
                alert("error en el fetch");
                setIsError("error");
            }
            const user = await res.json();
            return user;
        } catch (error) {
            setIsError(error);
        }
    };

    useEffect(() => {
        // si la url esta mal , falla en await fetch(url)
        getOneUser()
            .then((data) => {
                const { login } = data;
                setUser(login);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                setIsError(err);
                console.log(err);
            });

        return () => {};
    }, []);

    /* useEffect(() => {
        fetch(url)
            .then((resp) => {
                if (resp.status >= 200 && resp.status <= 299) {
                    return resp.json();
                } else {
                    setIsLoading(false);
                    setIsError(true);
                    throw new Error(resp.statusText);
                }
            })
            .then((user) => {
                const { login } = user;
                setUser(login);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, []); */

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }
    if (isError) {
        return (
            <div>
                <h1>Error....</h1>
            </div>
        );
    }
    return (
        <div>
            <h1>{user}</h1>
        </div>
    );
};

export default MultipleReturns;
