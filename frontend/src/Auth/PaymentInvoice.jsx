import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToast } from '../Loaders/ToastContext';
import WaitingLoader from '../Loaders/WaitingLoader';

import logo from '../Assets/logo.png';

function PaymentInvoice() {
  const { notifyError, notifySuccess, startWaitingLoader, stopWaitingLoader } = useToast()
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state;
  // console.log(user);
  const date = new Date();

  const makePayment = async (e) => {
    e.preventDefault();
    startWaitingLoader();
    try {
      const res = await axios.post("https://lascoo.codeweborganization.com.ng/api/Member/Initialize-Membership-Upgrade", {
        email: user.memberId
      });
      console.log(res.data);
      stopWaitingLoader();
      notifySuccess(res.data.responseMessage);
    } catch (error) {
      console.log(error);
      notifyError(error.response.data.responseMessage)
      stopWaitingLoader();
    }
  }
  
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <WaitingLoader/>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Invoice Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-4 text-gray-800">Member Registration Fee</h1>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 text-sm">Due Date</p>
              <p className="font-medium text-gray-800">{date.toDateString()}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Billed to {user.contactAddress}</p>
              <p className="font-medium text-gray-800">{user.firstname} {user.lastname}</p>
              <p className="text-gray-600 text-sm">{user.email}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Subject</p>
              <p className="font-medium text-gray-800">Payment Invoice for Services</p>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="mb-8">
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-700">
                <th className="p-2 border border-gray-200">Description</th>
                <th className="p-2 border border-gray-200">Qty</th>
                <th className="p-2 border border-gray-200">Unit Price</th>
                <th className="p-2 border border-gray-200">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-gray-200 flex items-center gap-2">
                  <img src={logo} alt="Product" className="h-8 w-8 object-cover" />
                  <p>One time subscription</p>
                </td>
                <td className="p-2 border border-gray-200">1</td>
                <td className="p-2 border border-gray-200">₦20,000</td>
                <td className="p-2 border border-gray-200">₦20,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Payment Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Payment Options</h2>
          <form action="submit" className="space-y-4" onSubmit={makePayment}>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Pay Now
            </button>
            <p>By clicking "Pay Now," you agree to the terms and conditions of our payment service.</p>
          </form>
        </div>
        
        <button onClick={() => navigate('/login')} className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Pay Later</button>
      </div>
    </div>
  );
}

export default PaymentInvoice;
