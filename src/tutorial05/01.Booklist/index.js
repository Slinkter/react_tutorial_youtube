// 4 :20 : 10
import React from "react";
import "./index.css";

const author = "Jordan Moore";
const title = "Interesting Facts For Curious Minds";
const img =
  "./images/book-1.jpghttps://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg";

const Book = () => {
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
      <Book />
      <Book />
    </div>
  );
};

export default index;
