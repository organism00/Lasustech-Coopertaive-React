import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaWallet,
  FaCreditCard,
  FaHandHoldingUsd,
  FaPiggyBank,
  FaWifi,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

const LandingPage = () => {
  return (
    <div>
      <header class="bg-white w-screen p-5 shadow-md fixed z-10">
        <div class="flex flex-col md:flex-row md:space-x-36 items-center">
          <div class="font-bold text-lg ml-5 mt-[-10px] flex items-center">
            <img src="../logo.jpg" alt="" class="h-[50px]" />
            <div class="flex flex-col ml-2">
              <p>TRANQUILITY MULTIPURPOSE</p>
              <p> COOPERATIVE SOCIETY LTD</p>
            </div>
          </div>
          <div class="flex justify-center space-x-8 mt-3 md:mt-0">
            <a href="" class="text-gray-700 hover:text-black hover:underline">
              Home
            </a>
            <a href="" class="text-gray-700 hover:text-black hover:underline">
              Cards
            </a>
            <a href="" class="text-gray-700 hover:text-black hover:underline">
              How it works
            </a>
            <a href="" class="text-gray-700 hover:text-black hover:underline">
              Blog
            </a>
          </div>
          <div class="flex justify-center items-center mt-3 md:mt-0">
            <div class="bg-blue-300 h-10 w-10 border-black border-2 rounded-full"></div>
            <div class="bg-black h-9 w-9 rounded-full p-1 -ml-2">
              <i class="fas fa-arrow-right text-white text-xl flex items-center"></i>
            </div>
          </div>
        </div>
      </header>

      <footer className="px-24 py-16 bg-black w-screen h-[450px]">
        <div className="flex justify-between space-5">
          <div className="flex flex-col ">
            <div className="flex flex-row space-x-3">
              <img src="../logo.jpg" alt="" className="h-[40px] bg-black " />
              <p className="text-white  font-bold text-2xl">
                {" "}
                TRANQUILITY MULTIPURPOSE <br />
                COOPERATIVE SOCIETY LTD
              </p>
            </div>
            <p className="text-white text-xl mt-20">
              Subscribe to our newsletter
            </p>
            <div className="mt-4">
              <button className="bg-white rounded-full shadow-2xl w-80 py-3 px-5 mt-3 text-left flex items-center justify-between">
                <span>Enter your email </span>
                <div className="bg-blue-300 h-10 w-10 rounded-full">
                  <i className="fas fa-arrow-right text-black ml-2 text-xl rotate-[-50deg]  flex items-center "></i>
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center mb-40">
            <div className="mb-2 md:mb-0 md:mr-10">
              <h3 className="font-bold mb-2 text-white">LENDING</h3>
              <ul className="text-white">
                <li>SMALL BUSINESS</li>
                <li>STARTUP</li>
                <li>ENTERPRISES</li>
              </ul>
            </div>
          </div>
          <div className="mb-6 md:mb-0 md:mr-10">
            <h3 className="font-bold  text-white">ABOUT</h3>
            <ul className="text-white">
              <li>OUR STORY</li>
              <li>CAREERS</li>
              <li>NEWS</li>
              <li>INVESTORS</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0 md:mr-10 text-white">
            <h3 className="font-bold mb-2">RESOURCES</h3>
            <ul className="text-white">
              <li>ACCESSIBILITY</li>
              <li>PRIVACY POLICY</li>
              <li>LEGAL</li>
              <li>HELP CENTRE</li>
            </ul>
          </div>
          <div className="relative">
            <button className="bg-white text-black py-2 px-4 rounded-full flex items-center">
              English <i className="fas fa-chevron-down ml-2"></i>
            </button>
          </div>
        </div>
        <div className="container mx-auto mt-10 text-center">
          <hr className="border-gray-600 mb-4" />
          <p className="text-sm text-white">
            All rights reserved 2024@TRANQUILITY MULTIPURPOSE COOPERATIVE
            SOCIETY LTD
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
