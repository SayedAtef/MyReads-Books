import React from "react";
import Changer from "./Changer";

const Book = ({
  backgroundImage,
  bookTitle,
  authors,
  shelfChanger,
  bookToBeChanged,
}) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        <Changer
          shelfChanger={shelfChanger}
          bookToBeChanged={bookToBeChanged}
        />
      </div>
      <div className="book-title">{bookTitle}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};

export default Book;
