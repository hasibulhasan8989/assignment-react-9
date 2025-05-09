import React from 'react';
import { setBooks, setWishList } from './Utils';
import{ Toaster } from 'react-hot-toast';

const BookDetailsCart = ({book}) => {
    const {
        image,
        bookName,
        author,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing,
      } = book;


    return (
        <div className="hero  max-h-[711px] mt-4">
      <div className="hero-content flex-col gap-10   lg:flex-row">
        <div
          className="w-1/2 bg-[#1313130D] min-h-[711px]
          flex justify-center items-center rounded-2xl"
        >
          <img src={image} className="w-[300px] " />
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p
            className="py-6 text-xl text-[#131313CC]
            font-semibold"
          >
            By : {author}
          </p>
          <p className="border-b-1 border-t-1 border-[#13131326] py-4 text-lg font-semibold text-gray-400">
            {category}
          </p>
          <p className="font-bold my-2">
            Review:{" "}
            <span
              className="font-medium
                text-[#131313B2]"
            >
              {review}
            </span>
          </p>
          <div className="flex items-center border-b-1 pb-4   border-[#13131326]">
            <p className="font-bold mr-2">Tag :</p>
            {tags.map((tag) => (
              <p
                key={tag}
                className="
                        mr-2 text-[#23BE0A] p-1 bg-[#23BE0A0D] rounded-2xl"
              >
                #{tag}
              </p>
            ))}
          </div>

          <div className="mt-4 space-y-2">
            <p className="text-[#131313B2]">
              Number of Pages:{" "}
              <span className="font-bold text-black ml-2">{totalPages}</span>{" "}
            </p>
            <p className="text-[#131313B2]">
              Publisher:
              <span className="font-bold text-black ml-2">{publisher}</span>{" "}
            </p>
            <p className="text-[#131313B2]">
              Year of Publishing :{" "}
              <span className="font-bold text-black ml-2">
                {yearOfPublishing}
              </span>{" "}
            </p>
            <p className="text-[#131313B2]">
              Rating:{" "}
              <span className="font-bold text-black ml-2">{rating}</span>{" "}
            </p>
          </div>
          <div className="flex items-center justify-start mt-4 gap-4">
            <button
             onClick={()=>setBooks(book)}
              className="btn px-7 py-4]"
            >
              {" "}
              Read
            </button>
            <button
             onClick={()=>setWishList(book)}
              className="btn px-7 py-4] bg-[#50B1C9] text-white"
            >
              {" "}
              Wishlist
            </button>
            
          </div>
        </div>
      </div>
      <Toaster />
    </div>
    );
};

export default BookDetailsCart;