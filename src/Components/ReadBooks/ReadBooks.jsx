import React, { useState } from "react";
import { getBooks } from "../Utils";
import ReadBookCart from "./ReadBookCart";
import { FaChevronDown } from "react-icons/fa";
import Short from "./Short";

const ReadBooks = () => {
  const books = getBooks();
  const [sortBooks, setSortBooks] = useState(books);



  

  const handleSort = (sortType) => {
    if (sortType === "rating") {
      const newSort1 =[...sortBooks].sort((a, b) => {
        return b.rating - a.rating;
      });
      setSortBooks(newSort1);
    } else if (sortType === "page") {
      const newSort2 = [...sortBooks].sort((a, b) => {
        return b.totalPages - a.totalPages;
      });

      setSortBooks(newSort2);
    }
  };

 

  return (
    <div>
      {/* Dropdown */}

    <Short handleSort={handleSort}></Short>
    <h1 className='text-xl font-bold my-4'>Read Books : {books.length}</h1>
     
      <div>
        {sortBooks.map((book) => (
          <ReadBookCart key={book.id} book={book}></ReadBookCart>
        ))}
      </div>
    </div>
  );
};

export default ReadBooks;
