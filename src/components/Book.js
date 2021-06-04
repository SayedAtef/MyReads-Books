import React from "react";
import Changer from "./Changer";
import noCover from "../images/noCover.jpg";

const Book = ({ book, shelfChanger, books }) => {
  const coverImg =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : noCover;
  const title = book.title ? book.title : "No title available";
  const authors = book.authors;

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url(${coverImg})`,
          }}
        />
        <Changer shelfChanger={shelfChanger} book={book} books={books} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors && authors.join(", ")}</div>
    </div>
  );
};

export default Book;
