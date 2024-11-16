import React from "react";
import Logo from "../Assets/logo.png";
import man from "../Assets/man.jpg";

const SignUp = () => {
  return (
    <>
      <section className="w-full flex items-center">
        <div className="hidden rounded-r-[30px] lg:block w-[40vw] h-[100vh] p-6 bg-blue-400">
          <img
            src={Logo}
            className="w-20 xl:w-28 h-20 xl:h-28 object-cover"
            alt="logo"
          />
          <div className="flex text-lg space-y-5 text-white mt-2 flex-col px-6">
            <div>
              <p>TRANQUILITY MULTIPURPOSE</p>
              <p> COOPERATIVE SOCIETY LTD</p>
            </div>

            <div>
              <h1 class="text-3xl xl:text-4xl font-semibold">
                Let's setup your Operating Agreement
              </h1>
              <p class="text-[13px] xl:text-[15px] mt-4">
                All-in-one solution to for your business in the state. Form a
                new company from scratch or onboard your existing US company.
              </p>
            </div>
          </div>

          <div className="absolute bottom-5 w-[30vw] xl:w-[33vw] ml-6 bg-blue-300 px-6 py-8 rounded-t-lg bg-opacity-40">
            <p className="text-xl font-semibold mb-2">
              I barely had to do anything
            </p>
            <p className="mb-4 text-[10px]">
              Love the experience. Got my business set up and all necessary
              details in about a month and I barely had to do anything.
              Definitely recommend!
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  alt="Catherine Johns"
                  className="w-10 h-10 object-cover rounded-full mr-3"
                  src={man}
                />
                <p className="font-semibold py-3">Catherine Johns</p>
              </div>
              <div className="px-2 py-1 rounded-md bg-black bg-opacity-85">
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100vw] lg:w-[60vw] h-[100vh] ">
          <div className="lg:hidden w-full bg-white border border-gray-300 p-4 shadow-sm fixed top-0 z-80 font-bold text-lg flex items-center">
            <img src={Logo} alt="" className="h-[50px]" />
            <div className="flex flex-col ml-2">
              <p>TRANQUILITY MULTIPURPOSE</p>
              <p> COOPERATIVE SOCIETY LTD</p>
            </div>
          </div>
          <div className="px-4 lg:px-14 py-32 lg:py-20 z-0">
            <p className="text-2xl font-semibold z-0">Let's get started</p>

            <form action="">
              <div className="  space-y-5 py-10">
                <div className=" flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
                  <div className="w-full lg:w-[50%]">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      for="first-name"
                    >
                      Firstname
                    </label>
                    <input
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      id="first-name"
                      name="first-name"
                      type="text"
                      placeholder="Alex"
                    />
                  </div>
                  <div className="w-full lg:w-[50%]">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      for="form"
                    >
                      Lastname
                    </label>
                    <input
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      id="form"
                      name="form"
                      type="text"
                      placeholder="Parkinson"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    for="form"
                  >
                    Email
                  </label>
                  <input
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    id="form"
                    name="form"
                    type="email"
                    placeholder="Alexexample@gmail.com"
                  />
                </div>

                <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
                  <div className="w-full lg:w-[50%]">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      for="form"
                    >
                      Country of Residence
                    </label>
                    <input
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      id="form"
                      name="form"
                      type=" text"
                      placeholder="Country"
                    />
                  </div>
                  <div className="w-full lg:w-[50%]">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      for="form"
                    >
                      State
                    </label>
                    <input
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      id="form"
                      name="form"
                      type="text"
                      placeholder="State"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    for="form"
                  >
                    Phone number
                  </label>
                  <input
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    id="form"
                    name="form"
                    type="number"
                    placeholder="Phone number"
                  />
                </div>

                <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
                  <div className="w-full lg:w-[50%]">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      for="form"
                    >
                      Password
                    </label>
                    <input
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      id="form"
                      name="form"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="w-full lg:w-[50%]">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      for="form"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      id="form"
                      name="form"
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
              </div>

              <button className="w-full lg:w-[30%] float-end bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
