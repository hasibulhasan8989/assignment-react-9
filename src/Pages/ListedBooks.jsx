import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1
        className="h-[80px] text-center bg-green-50 flex justify-center items-center my-10
      text-4xl font-bold rounded-full"
      >
        Books
      </h1>
      {/* <div className=" h-10  items-center flex justify-center gap-6">
        <button onClick={()=>navigate('/listedBooks')}  className=" btn bg-primary  hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          Read Books
        </button>
        <button onClick={()=>navigate('/listedBooks/wishlist')} className=" btn bg-secondary hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          WishList
        </button>
      </div> */}

      {/* Tab */}
      <div
        className="flex  -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:text-gray-800  pb-8 border-b-1 border-gray-400"
        bis_skin_checked="1"
      >
        <Link
          onClick={() => setValue(0)}
          to={"/listedBooks"}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  rounded-t-lg dark:border-gray-600  
    ${value === 0 ? "border-b-0 border text-primary font-bold" : "border-b"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Books</span>
        </Link>
        <Link
          onClick={() => setValue(1)}
          to={"/listedBooks/wishlist"}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  rounded-t-lg dark:border-gray-600 
    ${value === 1 ? "border-b-0 border text-secondary font-bold" : "border-b"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>WishList</span>
        </Link>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
