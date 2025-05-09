import React from "react";
import { useNavigate } from "react-router-dom";

const ReadBookCart = ({ book }) => {

    const navigate=useNavigate()
  const {
    image,
    bookName,
    author,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,id
  } = book;

  return (
    <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-md max-w-3xl mb-12">
      {/* Book Cover */}
      <div className="w-24 h-32 flex-shrink-0">
        <img
          src={image}
          alt="Book Cover"
          className="rounded-lg object-cover w-full h-full"
        />
      </div>

      {/* Book Info */}
      <div className="flex-1 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">{bookName}</h2>
        <p className="text-sm text-gray-600">
          By: <span className="font-medium">{author}</span>
        </p>

        {/* Tags */}
        <div className="flex gap-2 text-xs">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
          <span>Year of Publishing: {yearOfPublishing}</span>
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16h8M8 12h8m-8-4h8M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Publisher:{publisher}
          </span>
          <span>📄 Page {totalPages}</span>
        </div>

        {/* Footer buttons */}
        <div className="flex gap-3 mt-3 text-sm">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            Category: {category}
          </span>
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
            Rating: {rating}
          </span>
          <button onClick={()=>navigate(`/book/${id}`)} className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-full font-medium transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadBookCart;
