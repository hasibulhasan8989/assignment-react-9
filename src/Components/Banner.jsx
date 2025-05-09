import React from "react";
import book1 from '../assets/book1.png'
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero bg-[#1313130D] min-h-[554px] rounded-lg my-16">
     
       <div className="flex flex-row-reverse items-center justify-around w-full ">

       <div>
       <img
          src={book1}
          className="max-w-sm bg-[#1313130D] rounded-lg shadow-2xl"
        />
       </div>
        <div>
          <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
          
          <Link to={'/listedBooks'} className="btn bg-[#23BE0A] text-white font-bold px-7 py-6 rounded-xl text-lg mt-6">View The List</Link>
        </div>


       </div>
     
    </div>
  );
};

export default Banner;
