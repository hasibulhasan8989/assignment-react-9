import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-2xl font-bold ${isActive ? "text-blue-500" : ""}`
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/listedBooks"}>Listed Books</NavLink>
            </li>
            <li>
              <NavLink to={"/pageToRead"}>Pages to Read</NavLink>
            </li>
          </ul>
        </div>
        <button
          onClick={() => navigate("/")}
          className="btn btn-ghost text-3xl font-bold font-sans text-[#23BE0A] text-pretty"
        >
          {" "}
          Book Vibes{" "}
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  flex gap-4 ">
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? " border border-[#23BE0A] font-semibold rounded-2xl text-[#23BE0A] "
                  : ""
              } text-xl p-2`
            }
            to={"/"}
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? " border border-[#23BE0A] font-semibold rounded-2xl text-[#23BE0A] "
                  : ""
              } text-xl p-2`
            }
            to={"/listedBooks"}
          >
            Listed Books
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? " border border-[#23BE0A] font-semibold rounded-2xl text-[#23BE0A] "
                  : ""
              } text-xl p-2`
            }
            to={"/pagesToRead"}
          >
            Pages to Read
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <div></div>
        <a href="#_" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-6 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out  rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#23BE0A]"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
            <span className="relative">Sign In</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
        <a href="#_" className="relative inline-block text-lg group ml-4">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#59C6D2]"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-secondary group-hover:-rotate-180 ease"></span>
            <span className="relative">Sign Up</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
    </div>
  );
};

export default Nav;
