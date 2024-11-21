import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleLogOut = () => {
    logOut().catch((err) => console.error("Logout Error:", err));
  };

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      <div className="navbar-start">
        <Link to="/" className="text-2xl font-bold text-primary">
          WinterDonation
        </Link>
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

      <div
        className={`navbar-center lg:flex ${isMenuOpen ? "block" : "hidden"} lg:block`}
      >
        <ul className="menu menu-horizontal lg:flex flex-col lg:flex-row px-1 lg:px-0">
          <li>
            <Link
              to="/"
              className={`${isActive("/") ? "text-cyan-500 font-bold" : "text-gray-700"} hover:text-gray-500`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/campaigns"
              className={`${isActive("/campaigns") ? "text-cyan-500 font-bold" : "text-gray-700"} hover:text-gray-500`}
            >
              Donation Campaigns
            </Link>
          </li>
          <li>
            <Link
              to="/how-to-help"
              className={`${isActive("/how-to-help") ? "text-cyan-500 font-bold" : "text-gray-700"} hover:text-gray-500`}
            >
              How to Help
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className={`${isActive("/dashboard") ? "text-cyan-500 font-bold" : "text-gray-700"} hover:text-gray-500`}
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        {user && user.email ? (
          <>
            <div className="flex items-center gap-2">
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt="Profile"
                className="w-10 h-10 rounded-full border"
              />
              <span className="hidden lg:inline-block font-medium text-gray-700">
                {user.displayName || "User"}
              </span>
            </div>
            <button
              onClick={handleLogOut}
              className="btn bg-white text-indigo-500 font-semibold hover:bg-indigo-500 hover:text-white border-none shadow-md hover:shadow-lg transition-all duration-300"
            >
              Log Out
            </button>
          </>
        ) : (
          <NavLink to="/login">
            <button className="btn bg-white text-indigo-500 font-semibold hover:bg-indigo-500 hover:text-white border-none shadow-md hover:shadow-lg transition-all duration-300">
              Login
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;