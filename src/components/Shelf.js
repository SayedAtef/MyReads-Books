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
                <Book
                  backgroundImage={book.imageLinks.thumbnail}
                  bookTitle={book.title}
                  authors={book.authors}
                  shelfChanger={shelfChanger}
                  bookToBeChanged={book}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
