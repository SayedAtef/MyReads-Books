import React from "react";

const Changer = ({ shelfChanger, book, books }) => {
  const changeShelf = (e) => {
    shelfChanger(book, e.target.value);
  };

  let currentShelf = "none";

  // if book is in current list, set current shelf to book.shelf
  for (let item of books) {
    if (item.id === book.id) {
      currentShelf = item.shelf;
      break;
    }
  }

  return (
    <div className="book-shelf-changer">
      <select onChange={changeShelf} defaultValue={currentShelf}>
        <option disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default Changer;
