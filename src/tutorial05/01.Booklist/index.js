// 4 :20 : 10
import React from "react";
import "./index.css";

/*
author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2,

*/

const Book = (props) => {
  const { id, author, title, img } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const index = () => {
  return (
    <div>
      <Book />
    </div>
  );
};

export default index;
