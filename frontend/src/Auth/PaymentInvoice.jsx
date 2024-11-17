import React from 'react';

function PaymentInvoice() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Invoice Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-4 text-gray-800">Payment Invoice</h1>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 text-sm">Due Date</p>
              <p className="font-medium text-gray-800">10th December 2024</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Billed to</p>
              <p className="font-medium text-gray-800">John Doe</p>
              <p className="text-gray-600 text-sm">johndoe@me.com</p>
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
                  <img src="" alt="Product" className="h-8 w-8 object-cover" />
                  <p>One time subscription</p>
                </td>
                <td className="p-2 border border-gray-200">1</td>
                <td className="p-2 border border-gray-200">$100</td>
                <td className="p-2 border border-gray-200">$100</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-200"></td>
                <td className="p-2 border border-gray-200"></td>
                <td className="p-2 border border-gray-200 font-semibold">Subtotal</td>
                <td className="p-2 border border-gray-200">$100</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-200"></td>
                <td className="p-2 border border-gray-200"></td>
                <td className="p-2 border border-gray-200 font-semibold">Total</td>
                <td className="p-2 border border-gray-200">$100</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Payment Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Payment Options</h2>
          <form action="submit" className="space-y-4">
            <div>
              <select name="paymentMethod" id="paymentMethod" className='p-2 mb-4 border rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'>
                <option value="selctMethod">Select Payment Method</option>
                <option value="creditCard">Credit Card</option>
                <option value="paystack">Paystack</option>
              </select>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="expirationDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="expirationDate"
                  name="expirationDate"
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentInvoice;
