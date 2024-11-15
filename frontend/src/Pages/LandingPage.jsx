import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaWifi,
  FaWallet,
  FaCreditCard,
  FaHandHoldingUsd,
  FaPiggyBank,
} from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

// Images
import smiling from "../Assets/smiling.png";
import phone from "../Assets/phone.jpg";
import pos from "../Assets/pos.jpg";
import business from "../Assets/business.jpg";
import man from "../Assets/man.jpg";
import laptop from "../Assets/laptop.jpg";
import office from "../Assets/office.jpg";
import board from "../Assets/board.jpg";
import cris from "../Assets/cris.jpg";
import adam from "../Assets/adam.jpg";
import jem from "../Assets/jem.jpg";

const LandingPage = () => {
  return (
    <div>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>

      <div>
        {/* Meet the credit card of the future */}
        <div class="mx-4 md:mx-6 lg:mx-20 my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Image Section --> */}
          <div class="bg-blue-300 w-full max-w-md mx-auto p-6 rounded-2xl">
            <img
              src={smiling}
              alt="Smiling person"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* <!-- Content Section --> */}
          <div class="w-full max-w-lg mx-auto px-5 py-6 flex flex-col justify-center">
            <h1 class="text-3xl lg:text-4xl font-bold leading-snug">
              Meet the credit card of the future
            </h1>
            <p class="text-gray-700 mt-4">
              We've redefined what managing your finances can be like. This
              cutting-edge card is committed to providing you with the guidance
              you need.
            </p>
            <div class="mt-6">
              <button class="bg-white rounded-full shadow-lg w-full py-3 px-5 text-left flex items-center justify-between hover:bg-blue-100 transition-all duration-300">
                <span>Get the App</span>
                <div class="bg-blue-300 flex items-center justify-center h-10 w-10 rounded-full">
                  <MdArrowOutward className="text-[25px]" />
                </div>
              </button>
            </div>
          </div>

          {/* <!-- Cards Section --> */}
          <div class="space-y-6 flex flex-col items-center md:items-start md:relative">
            {/* <!-- Credit Card --> */}
            <div class="p-6 w-full max-w-sm bg-black text-white rounded-lg shadow-lg">
              <div class="flex items-center justify-between">
                <div>
                  <h1 class="font-bold text-lg mb-4">VISA</h1>
                  <p class="text-gray-400">Balance</p>
                  <p class="text-2xl font-semibold">$38,458.00</p>
                </div>
                <button class="bg-blue-300 text-black text-xs font-semibold px-3 py-1 rounded-md">
                  SET BUDGET
                </button>
              </div>
              <div class="mt-4 flex justify-between items-center">
                <p class="text-gray-400 text-sm">**** **** **** 0789</p>
                <div class="bg-blue-300 w-12 h-10 flex items-center justify-center rounded-lg">
                  <FaWifi className="text-2xl h-6 w-6 text-black rotate-90" />
                </div>
              </div>
              <div class="mt-4 flex justify-between items-center text-sm text-gray-400">
                <p>Adam Smith</p>
                <p>Exp 08/29</p>
              </div>
            </div>

            {/* <!-- Statistics Card --> */}
            <div class="w-full max-w-xs md:absolute md:-top-6 md:-right-[350px] lg:static ">
              <div class="bg-blue-300 p-6 rounded-xl flex flex-col items-center text-center">
                <h1 class="font-bold text-4xl text-black">900K</h1>
                <p class="text-black font-bold">HAPPY</p>
                <p class="text-black font-bold">CUSTOMERS</p>
              </div>
            </div>
          </div>
        </div>

        {/* Browse our set of banking service and offerings */}
        <div class="bg-gray-300 px-4 py-20 lg:px-20 lg:py-28 flex justify-center items-center ">
          <div class="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p class="text-4xl font-bold">
                Browse our set of banking service and offerings
              </p>
              <p class="text-sm mt-5">
                We offer a variety of tools and resources to help you manage
                your finances more efficiently
              </p>

              <div class="mt-3 ">
                <button class="bg-blue-300 rounded-full shadow-md h-12 w-44 py-4 px-4 text-left flex items-center justify-between hover:bg-blue-500 transition-all duration-600">
                  <span>Learn More</span>
                  <div class="bg-black flex items-center justify-center h-8 w-8 rounded-full">
                    <MdArrowOutward className="text-[25px] text-blue-300" />
                  </div>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-10">
              <div class="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center space-y-4">
                <div class="bg-blue-100 p-4 rounded-full mb-4">
                  <FaWallet className="text-3xl text-blue-700" />
                </div>
                <p class="text-black font-semibold">Checking accounts</p>
              </div>
              <div class="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center space-y-4">
                <div class="bg-blue-100 p-4 rounded-full mb-4">
                  <FaCreditCard className="fas fa-credit-card text-blue-700 text-3xl" />
                </div>
                <p class="text-black font-semibold">Credit & debit cards</p>
              </div>
              <div class="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center space-y-4">
                <div class="bg-blue-100 p-4  rounded-full mb-4">
                  <FaHandHoldingUsd className="fas fa-hand-holding-usd text-blue-700 text-3xl" />
                </div>
                <p class="text-black font-semibold">Loans and credits</p>
              </div>
              <div class="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center space-y-4">
                <div class="bg-blue-100 p-4 rounded-full mb-4">
                  <FaPiggyBank className="fas fa-piggy-bank text-blue-700 text-3xl" />
                </div>
                <p class="text-black font-semibold">Wealth Management</p>
              </div>
            </div>
          </div>
        </div>

        {/* What makes our bank stand out */}
        <div class="px-20 py-20 flex space-x-2 ">
          <div class="flex  flex-col justify-center items-center  h-[150px] w-[1500px] ">
            <p class="font-bold text-3xl">What makes our bank stand out</p>
            <p class="font-bold text-3xl">from the rest?</p>
          </div>
        </div>
        <div class="px-20 my-6 flex space-x-2 mt-[-150px]">
          <div class=" bg-white rounded-xl h-[500px] w-[1500px] shadow-md">
            <div class="flex flex-col md:flex-row">
              <div class="md:w-1/2 p-8">
                <h1 class="text-4xl font-bold mb-4">
                  Security
                  <i class="fas fa-chevron-down"></i>
                </h1>
                <p class="text-lg mb-8">
                  One important feature of banking security is multi-factor
                  authentication. This means that in addition to the traditional
                  username and password, customers are required to provide
                  additional verification.
                </p>
                <div class="space-y-6">
                  <div class="flex items-center text-2xl">
                    <span>Technology</span>
                    <i class="fas fa-chevron-right ml-2"></i>
                  </div>
                  <div class="flex items-center text-2xl">
                    <span>Innovation</span>
                    <i class="fas fa-chevron-right ml-2"></i>
                  </div>
                  <div class="flex items-center text-2xl">
                    <span>Mobile App</span>
                    <i class="fas fa-chevron-right ml-2"></i>
                  </div>
                </div>
              </div>
              <div class="md:w-1/2 p-8 grid grid-cols-2 gap-4">
                <div class="rounded-lg overflow-hidden">
                  <img
                    src={phone}
                    alt=""
                    class="w-full h-full object-cover"
                    height="200"
                    width="300"
                  />
                </div>
                <div class="rounded-lg overflow-hidden row-span-2">
                  <img
                    src={business}
                    alt=""
                    class="w-full h-full object-cover"
                    height="200"
                    width="300"
                  />
                </div>
                <div class="rounded-lg overflow-hidden ">
                  <img
                    src={pos}
                    alt=""
                    class="w-full h-full object-cover"
                    height="200"
                    width="300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Discover the mission & story behind our company */}
        <div className="px-6 md:px-12 lg:px-20 flex items-center justify-center">
          <div className="bg-gray-200 p-6 md:p-10 rounded-lg shadow-md flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <img
                src={man}
                alt="Discover the mission"
                className="rounded-lg w-full h-auto max-h-[400px] object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 md:pl-8">
              <h1 className="text-[4vmax] font-bold mb-4 leading-tight">
                Discover the mission & story behind our company
              </h1>
              <p className="text-[14px] mb-6">
                Discover is a US-based bank that was founded in 1985 with a
                mission to help people achieve a brighter financial future. The
                company was originally known as Sears Financial Network, but it
                was later acquired by Morgan Stanley.
              </p>

              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <button className="bg-black hover:bg-blue-500 transition-all duration-300 text-white rounded-full shadow-lg py-2 px-4 flex items-center justify-center">
                  <span className="mr-2 text-[12px]">Learn More</span>
                  <div className="bg-blue-300 flex items-center justify-center h-6 w-6 rounded-full">
                    <MdArrowOutward className="text-[16px] text-black" />
                  </div>
                </button>
                <button className="text-black px-6 py-2 flex items-center bg-blue-300 shadow-lg hover:bg-blue-500 transition-all duration-300 rounded-full">
                  <span className="mr-2 text-[12px]">About Us</span>
                  <BsArrowRight className="text-[16px] font-medium" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Our services are designed for business of all sizes */}
        <div className="px-6 md:px-12 lg:px-20 my-6 space-y-10">
  {/* Section Title */}
  <div className="flex flex-col items-center text-center">
    <p className="font-bold text-2xl md:text-3xl">
      Our services are designed for
    </p>
    <p className="font-bold text-2xl md:text-3xl">business of all sizes</p>
  </div>

  {/* Cards Section */}
  <div className="flex justify-center">
    <div className="border rounded-lg shadow-md p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            alt="Small Business"
            className="w-full h-[250px] md:h-[400px] object-cover"
            src={laptop}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 flex justify-between items-center">
            <span className="text-white font-bold text-lg">
              FOR SMALL BUSINESS
            </span>
            <div className="bg-blue-300 flex items-center justify-center text-black rounded-full p-2">
              <FaChevronRight className="text-[18px]" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            alt="Startups"
            className="w-full h-[250px] md:h-[400px] object-cover"
            src={office}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 flex justify-between items-center">
            <span className="text-white font-bold text-lg">FOR STARTUPS</span>
            <div className="bg-blue-300 flex items-center justify-center text-black rounded-full p-2">
              <FaChevronRight className="text-[18px]" />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            alt="Business Enterprises"
            className="w-full h-[250px] md:h-[400px] object-cover"
            src={board}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 flex justify-between items-center">
            <span className="text-white font-bold text-lg">
              BUSINESS ENTERPRISES
            </span>
            <div className="bg-blue-300 flex items-center justify-center text-black rounded-full p-2">
              <FaChevronRight className="text-[18px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Testimonials Section */}
  <div className="flex justify-center">
    <div className="bg-gray-200 p-6 md:p-10 rounded-lg shadow-md">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
          You're in good company
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <blockquote className="text-lg md:text-xl font-semibold mb-4">
              “One Bank Is A Truly Great Bank”
            </blockquote>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
              ullamcorper mi sem porttitor vel ut quis egestas.
            </p>
            <div className="flex items-center">
              <img
                alt="Jem Smith"
                className="w-12 h-12 rounded-full mr-4"
                src={jem}
              />
              <div>
                <p className="font-bold">Jem Smith</p>
                <p className="text-gray-500">Head of Sales at Tesla</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <blockquote className="text-lg md:text-xl font-semibold mb-4">
              “You Have Found The Best Bank”
            </blockquote>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
              ullamcorper mi sem porttitor vel ut quis egestas.
            </p>
            <div className="flex items-center">
              <img
                alt="Adam White"
                className="w-12 h-12 rounded-full mr-4"
                src={adam}
              />
              <div>
                <p className="font-bold">Adam White</p>
                <p className="text-gray-500">Accountant at Ozone</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <blockquote className="text-lg md:text-xl font-semibold mb-4">
              “The Best Customer Service, Period”
            </blockquote>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
              ullamcorper mi sem porttitor vel ut quis egestas.
            </p>
            <div className="flex items-center">
              <img
                alt="Cris Lee"
                className="w-12 h-12 rounded-full mr-4"
                src={cris}
              />
              <div>
                <p className="font-bold">Cris Lee</p>
                <p className="text-gray-500">CFO at Montee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
