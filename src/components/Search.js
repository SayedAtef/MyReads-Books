import React, { useState } from "react";
import Book from "./Book";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";

const Search = ({ books, shelfChanger }) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [err, setErr] = useState(false);

  const handleChange = (e) => {
    const input = e.target.value;
    setInput(input);
    if (input) {
      search(input.trim()).then((books) => {
        if (books.length > 0) {
          setResult(books);
          setErr(false);
        } else {
          setResult([]);
          setErr(true);
        }
      });
    } else {
      setResult([]);
      setErr(false);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <div className="close-search">Close</div>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search by title or author"
            value={input}
          />
        </div>
      </div>

      <div className="search-books-results">
        {books.length > 0 && (
          <ol className="books-grid">
            {result.map((book) => {
              return (
                <li key={book.id}>
                  <Book book={book} shelfChanger={shelfChanger} books={books} />
                </li>
              );
            })}
          </ol>
        )}
        {err && <h2>Books Not Found! Please try again</h2>}
      </div>
    </div>
  );
};

export default Search;
