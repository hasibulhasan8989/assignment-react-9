import React from "react";
import { Link } from "react-router-dom";
import { IoStar } from "react-icons/io5";


const BookCart = ({book}) => {
  const { bookName, author, category, tags, image,id } = book;
  return (

    <Link to={`/book/${id}`} className="card bg-base-100  shadow-sm p-6">
      <figure className="mx-12 py-12 rounded-2xl bg-[#F3F3F3]">
        <img
          src={image}
          className="w-1/4 
      "
          alt="Shoes"
        />
      </figure>
      <div className="flex justify-start gap-2 mt-3 ml-3">
        {tags.map((tag) => (
          <p key={tag} className="text-[#23BE0A] font-medium ">
            # {tag}
          </p>
        ))}
      </div>
      <div className="card-body">
        <h2 className="card-title text-2xl">{bookName}</h2>
        <p className="border-b-1 border-dotted pb-6 text-lg">By : {author}</p>

        <div className="card-actions justify-between">
          <div className="badge text-lg font-semibold">{category}</div>

          <div className=" flex items-center gap-2 text-xl">
            <p className="font-semibold flex items-center gap-2">5.00 <IoStar color="gold"></IoStar> </p>

            <p>
              {/* <FaStar size={24} color="gold" /> */}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCart;
