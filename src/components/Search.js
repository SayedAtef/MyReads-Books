import React, { useState } from "react";
import Book from "./Book";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";

const Search = ({ books, shelfChanger }) => {
  const [values, setValues] = useState({
    input: "",
    result: [],
    err: false,
  });

  const handleChange = (e) => {
    const input = e.target.value;
    setValues({ ...values, input });

    if (input) {
      search(input.trim()).then((books) => {
        books.length > 0
          ? setValues({ result: books })
          : setValues({ result: [], err: true });
      });
    } else {
      setValues({ ...values, result: [], err: false });
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search by title or author"
            value={values.input}
          />
        </div>
      </div>

      <div className="search-books-results">
        {books.length > 0 && (
          <ol className="books-grid">
            {values.result.map((book) => {
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
        )}
        {values.err && <h2>Books Not Found! Please try again</h2>}
      </div>
    </div>
  );
};

export default Search;
