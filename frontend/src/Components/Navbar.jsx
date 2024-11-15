import React from 'react';
import { Link } from 'react-router-dom';

import { FaArrowRight } from "react-icons/fa";

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
          <div className="hidden lg:flex justify-center items-center mt-3 md:mt-0">
            <div className="bg-blue-300 h-10 w-10 border-black border-2 rounded-full"></div>
            <div className="bg-black h-9 w-9 rounded-full p-1 -ml-2 flex justify-center items-center ">
              <FaArrowRight className='text-white'/>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar