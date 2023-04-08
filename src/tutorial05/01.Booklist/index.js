// 4 :20 : 10
import React from "react";

const Author = () => <h1>Author</h1>;
const Imagen = () => <h2>imagne placeholder</h2>;
const Title = () => {
  return <h2>Book title </h2>;
};

const Book = () => {
  return (
    <article>
      <Imagen></Imagen>
      <Title></Title>
      <Author></Author>
    </article>
  );
};

const index = () => {
  return <div>index</div>;
};

export default index;
