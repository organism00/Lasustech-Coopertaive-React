import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../Assets/logo.png';
import cooperative from '../Assets/cooperative.jpg'

const Login = () => {
  return (
    <div className="flex bg-[whitesmoke] h-[100vh] justify-center items-center gap-10">
      <div className="bg-white h-[550px] w-[400px] rounded-lg">
        <div className="flex items-center space-x-4 p-3 justify-center">
          <img
            alt="Logo of Tranquility Multipurpose Cooperative Society Limited"
            className="w-16 h-16 rounded-full"
            src={logo}
          />
          <div>
            <h1 className="text-xl">
              <b>Tranquility Multipurpose Cooperative Society</b>
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center p-3 space-y-3 w-[400px]">
          <p className="text-4xl font-bold">Login</p>
          <p className="text-gray-400 text-[15px]">Welcome back! Please enter your details</p>
        </div>

        <form className="flex flex-col space-y-7 p-4 w-[400px]">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-xl shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-xl shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              id="password"
              name="password"
              type="password"
              placeholder="Input password"
            />
          </div>
          <div className="flex space-x-10 gap-16">
            <div className="flex gap-2">
              <input type="checkbox" name="remember" />
              <p className="text-[13px]">Remember for 30 days</p>
            </div>
            <Link to="/forgot-password" className="text-blue-700 text-[13px] ml-14">
              Forgot Password?
            </Link>
          </div>
          <div className="bg-blue-500 rounded-md flex items-center justify-center text-lg text-white p-1 cursor-pointer">
            Sign in
          </div>
          <div className="ml-16">
            <p className="text-gray-400 text-[15px]">
              Don't have an account?{' '}
              <Link to="/signup" className="font-semibold text-[15px] text-black">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
      <img
        src={cooperative}
        alt="Cooperative"
        className="h-full 2xl:h-3/4 w-[38%] md:block object-cover hidden "
      />
    </div>
  );
};

export default Login;