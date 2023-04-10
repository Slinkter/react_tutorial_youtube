// 4 :20 : 10
import React from "react";
import { books } from "./db";
import "./App.css";
const Book = (props) => {
  console.log(props);
  const { id, img, title, author, getBook } = props;
  //
  const handleSingleBook = () => {
    console.log("take book");
  };

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title} </h2>
      <button onClick={handleSingleBook}>Display title</button>
      <h4>{author}</h4>
    </article>
  );
};

const App = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
};

export default App;
