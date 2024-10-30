// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

const Header = ({ hideLinks }) => {
  return (
    <nav className="bg-sky-500 shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <dix className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-2" />
          <h1 className="text-white text-3xl font-bold">VeggieHealth</h1>
        </dix>
        {!hideLinks ? (
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-white font-medium hover:text-gray-300 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/todolist"
                className="text-white font-medium hover:text-gray-300 transition duration-300"
              >
                Todo List
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="text-white font-medium hover:text-gray-300 transition duration-300"
              >
                Profile
              </Link>
            </li>
          </ul>
        ) : (
          <div className="text-white"> Welcome to MyApp!</div>
        )}
      </div>
    </nav>
  );
};

export default Header;
