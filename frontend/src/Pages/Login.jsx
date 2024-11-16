import React from 'react'
import Logo from "../Assets/logo.png";
import LoginCoverImage from '../Assets/cooperative.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <section className="w-full flex items-center">
        <div className="w-full lg:w-[45vw] h-[100vh] lg:p-6">
          <div className=" hidden lg:flex flex-row lg:flex-col">
            <img
              src={Logo}
              className="w-20 xl:w-28 h-20 xl:h-28 object-cover"
              alt="logo"
            />

            <div className="ml-6 mt-2">
              <p>TRANQUILITY MULTIPURPOSE</p>
              <p> COOPERATIVE SOCIETY LTD</p>
            </div>
          </div>

          {/* Mobile NavLogo */}

          <div className="lg:hidden w-full bg-white border border-gray-300 p-4 shadow-sm fixed top-0 z-80 font-bold text-lg flex items-center">
            <img src={Logo} alt="" className="h-[50px]" />
            <div className="flex flex-col ml-2">
              <p>TRANQUILITY MULTIPURPOSE</p>
              <p> COOPERATIVE SOCIETY LTD</p>
            </div>
          </div>

          <h1 className="text-center text-3xl font-semibold mt-[17vh] lg:my-6">Login</h1>
          <p className="text-center text-sm">
            Welcome back! Please enter your details
          </p>
          <div className="px-6 mt-10">
            <form action="">
              <div className="w-full">
                <label
                  className="block text-sm font-medium text-gray-700"
                  for="email"
                >
                  Email address
                </label>
                <input
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  id="first-name"
                  name="first-name"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="w-full mt-6">
                <label
                  className="block text-sm font-medium text-gray-700"
                  for="email"
                >
                  Password
                </label>
                <input
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center mt-6 justify-between">
                <div className="flex items-center gap-2">
                  <input className="w-4 h-4" type="checkbox" name="" id="" />
                  <p className="text-[13px]">Remember me</p>
                </div>
                <a href="#" className="text-blue-700 text-[13px]  ml-14">
                  Forgot Password?
                </a>
              </div>

              <button className="w-full mt-6  bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">
                Login
              </button>
            </form>

            <div className="flex items-center space-x-1 justify-center mt-6">
              <p class="text-gray-400 text-[15px]">Don't have an account?</p>
              <Link to={"/signup"} class="font-semibold text-[15px] text-black">
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-[55vw] h-[100vh] ">
          <img
            src={LoginCoverImage}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default Login