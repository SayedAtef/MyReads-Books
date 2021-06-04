import React from "react";
import Book from "./Book";

const Shelf = ({ books, shelfTitle, shelfChanger }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <li key={book.id}>
                <Book book={book} shelfChanger={shelfChanger} books={books} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
