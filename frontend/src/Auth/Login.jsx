import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useToast } from '../Loaders/ToastContext';
import WaitingLoader from '../Loaders/WaitingLoader';

import logo from '../Assets/logo.png';
import cooperative from '../Assets/cooperative.jpg'

const Login = () => {
  const { notifyError, notifySuccess, startWaitingLoader, stopWaitingLoader } = useToast()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // console.log(email, password)

  const handleLogin = async (e) => {
    e.preventDefault();
    startWaitingLoader();
  
<<<<<<< Updated upstream
    const apiUsername = 11204161; // Ensure this is the correct username
    const apiPassword = '60-dayfreetrial'; // Ensure this is the correct password
    const authHeader = `Basic ${btoa(`${apiUsername}:${apiPassword}`)}`; // Encode Basic Auth
=======
    // const apiUsername = 11204161; // Ensure this is the correct username
    // const apiPassword = '60-dayfreetrial'; // Ensure this is the correct password
    // const authHeader = `Basic ${btoa(`${apiUsername}:${apiPassword}`)}`; // Encode Basic Auth
>>>>>>> Stashed changes
  
    try {
      // API request
      const res = await axios.post(
        'https://cooperative.codeweborganization.com.ng/api/Member/Login',
        {
          email, // Ensure `email` and `password` are defined correctly in your component's state or scope
          password,
        })
  
      console.log(res.data);
      stopWaitingLoader();
      // notifySuccess(res.data.message);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      stopWaitingLoader();
      // notifyError(error.response?.data?.message || "An error occurred");
    }
  };
  

  return (
    <div className="flex bg-[whitesmoke] h-[100vh] justify-center items-center">
      <WaitingLoader/>
      <div className="bg-white h-[550px] rounded-lg lg:px-6">
        <div className="flex items-center space-x-4 p-3 justify-center">
          <img
            alt="Logo of Tranquility Multipurpose Cooperative Society Limited"
            className="w-16 h-16 rounded-full"
            src={logo}
          />
          <div>
            <h1 className="text-xl w-[300px]">
              TRANQUILITY MULTIPURPOSE COOPERATIVE SOCIETY
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center p-3 my-6 w-[400px]">
          <p className="text-gray-400 text-[15px]">Welcome back! Please enter your login details</p>
        </div>

        <form className="flex flex-col space-y-7 p-4 w-[400px]" action='submit' onSubmit={handleLogin}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
<<<<<<< Updated upstream
=======
              autoComplete='email'
>>>>>>> Stashed changes
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
<<<<<<< Updated upstream
=======
              autoComplete='current-password'
>>>>>>> Stashed changes
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
          <button className="bg-blue-500 rounded-md flex items-center justify-center text-lg text-white p-1 "
            type="submit">
            Sign in
          </button>
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