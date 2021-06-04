import React, { useEffect, useState, useMemo } from "react";
import * as BooksAPI from "../BooksAPI";
import Search from "./Search";
import Shelf from "./Shelf";
import { Link, Switch, Route } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  const crB = useMemo(
    () => books.filter((b) => b.shelf === "currentlyReading"),
    [books]
  );
  const wtrB = useMemo(() => books.filter((b) => b.shelf === "wantToRead"), [
    books,
  ]);
  const rB = useMemo(() => books.filter((b) => b.shelf === "read"), [books]);

  const shelfChanger = (bookToBeChanged, shelfValue) => {
    BooksAPI.update(bookToBeChanged, shelfValue).then((res) => {
      bookToBeChanged.shelf = shelfValue;

      // to update the shelf inside book, filter out the old book and then add the updated one
      setBooks(books.filter((b) => bookToBeChanged.id !== b.id));
      setBooks((prevBooks) => prevBooks.concat(bookToBeChanged));
    });
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await BooksAPI.getAll();
        setBooks(response);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBooks();
  }, []);

  return (
    <Switch>
      <Route path="/" exact>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Shelf
              books={crB}
              shelfTitle={`Currently Reading`}
              shelfChanger={shelfChanger}
            />
            <Shelf
              books={wtrB}
              shelfTitle={`Want To Read`}
              shelfChanger={shelfChanger}
            />
            <Shelf books={rB} shelfTitle={`Read`} shelfChanger={shelfChanger} />
          </div>
          <div className="open-search">
            <Link to="/search">
              <button>Add a book</button>
            </Link>
          </div>
        </div>
      </Route>
      <Route path="/search">
        <Search books={books} shelfChanger={shelfChanger} />
      </Route>
    </Switch>
  );
};

export default Home;
