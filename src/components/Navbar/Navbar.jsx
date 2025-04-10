import React from "react";
import { HiOutlineBell } from "react-icons/hi2";

const Navbar = () => {
  const menus = (
    <>
      <li>
        <a> Home</a>
      </li>
      <li>
        <a>Auctions</a>
      </li>
      <li>
        <a>Categories</a>
      </li>
      <li>
        <a>How to works</a>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm xl:px-36">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black"
            >
              {menus}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src="logo.png" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black">{menus}</ul>
        </div>
        <div className="navbar-end">
          <div className="bg-[#EBF0F5] w-10 h-10 rounded-full flex items-center justify-center mr-5 relative text-[#0E2954]">
            <span className="text-xs bg-[#0E2954] text-white w-4 h-4 rounded-full text-center absolute right-1 top-1">
              9
            </span>
            <HiOutlineBell size={22} />
          </div>
          <img className="w-10 h-10 rounded-full" src="user.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
