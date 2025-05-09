import React from 'react';
import { FaChevronDown } from "react-icons/fa";

const Short = ({handleSort}) => {



    return (
        <div className="flex justify-center mb-8 mt-8">
        <div className="dropdown dropdown-center  ">
          <div
            tabIndex={0}
            role="button "
            className="btn bg-[#23BE0A] flex items-center justify-center  text-white text-lg rounded-2xl m-1"
          >
            Sort By <FaChevronDown color="black"></FaChevronDown>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSort("rating")}> Rating</a>
            </li>
            <li>
              <a onClick={() => handleSort("page")}>Number Of Pages</a>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Short;