import React from "react";
import { useFetch } from "./useFetch02";

const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  const { loading, products } = useFetch(url);
  return (
    <>
      <h2>{loading ? "loading..." : "data"}</h2>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </>
  );
};

export default Example;
