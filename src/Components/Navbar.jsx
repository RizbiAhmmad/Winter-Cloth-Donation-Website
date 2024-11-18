import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="navbar-start">
                <Link to="/" className="text-2xl font-bold text-primary">
                    WinterDonation
                </Link>
            </div>

            <div className="navbar-center lg:flex">
                <ul className="menu menu-horizontal px-1">
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

            <div className="navbar-end">
                <button className="btn btn-primary">Login</button>
            </div>
        </div>
    );
};

export default Navbar;
