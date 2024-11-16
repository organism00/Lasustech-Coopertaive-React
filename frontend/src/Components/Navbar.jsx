import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../Assets/logo.png'

function Navbar() {
  return (
    <div>
      <header className="bg-white py-5 lg:px-20 shadow-md sticky top-0 z-10 flex justify-center">
        <div className="flex flex-col lg:flex-row justify-between w-full items-center">
          <div className="font-bold text-lg flex items-center">
            <img src={logo} alt="" className="h-[50px]" />
            <div className="flex flex-col ml-2">
              <p>TRANQUILITY MULTIPURPOSE</p>
              <p> COOPERATIVE SOCIETY LTD</p>
            </div>
          </div>
          <div className="flex justify-center space-x-8 mt-3 md:mt-0">
            <Link to="" className="text-gray-700 hover:text-black hover:underline">
              Home
            </Link>
            <Link to="" className="text-gray-700 hover:text-black hover:underline">
              Cards
            </Link>
            <Link to="" className="text-gray-700 hover:text-black hover:underline">
              How it works
            </Link>
            <Link to="" className="text-gray-700 hover:text-black hover:underline">
              Blog
            </Link>
          </div>

          <div className="hidden lg:flex justify-center items-center gap-2 ">
            <Link
              to="/signup"
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-full flex items-center"
            >
              Join Now
            </Link>
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-full flex items-center"
            >
              Login
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar