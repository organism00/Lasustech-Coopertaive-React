import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="px-4 md:px-8 lg:px-12 py-16 bg-black h-[450px]">
        <div className="flex justify-between ">
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
        <div className="container mt-10 text-center">
          <hr className="border-gray-600 mb-4" />
          <p className="text-sm text-white">
            All rights reserved 2024@TRANQUILITY MULTIPURPOSE COOPERATIVE
            SOCIETY LTD
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer