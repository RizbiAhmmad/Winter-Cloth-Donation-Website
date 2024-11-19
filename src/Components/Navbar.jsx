import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      {/* Navbar Start */}
      <div className="navbar-start">
        <Link to="/" className="text-2xl font-bold text-primary">
          WinterDonation
        </Link>
        {/* Hamburger Menu for Small Screens */}
        <button
          className="btn btn-ghost lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Navbar Center */}
      <div
        className={`navbar-center lg:flex ${
          isMenuOpen ? "block" : "hidden"
        } lg:block`}
      >
        <ul className="menu menu-horizontal lg:flex flex-col lg:flex-row px-1 lg:px-0">
          <li>
            <Link
              to="/"
              className={`${
                isActive("/") ? "text-cyan-500 font-bold" : "text-gray-700"
              } hover:text-gray-500`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/campaigns"
              className={`${
                isActive("/campaigns") ? "text-cyan-500 font-bold" : "text-gray-700"
              } hover:text-gray-500`}
            >
              Donation Campaigns
            </Link>
          </li>
          <li>
            <Link
              to="/how-to-help"
              className={`${
                isActive("/how-to-help") ? "text-cyan-500 font-bold" : "text-gray-700"
              } hover:text-gray-500`}
            >
              How to Help
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className={`${
                isActive("/dashboard") ? "text-cyan-500 font-bold" : "text-gray-700"
              } hover:text-gray-500`}
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
