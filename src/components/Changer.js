import React from "react";

const Changer = ({ shelfChanger, bookToBeChanged }) => {
  const changeShelf = (e) => {
    shelfChanger(bookToBeChanged, e.target.value);
  };
  return (
    <div className="book-shelf-changer">
      <select onChange={changeShelf}>
        <option value="none">Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default Changer;
