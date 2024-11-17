import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ToastProvider} from './Loaders/ToastContext';

import LandingPage from './Pages/LandingPage';
import SignUp from './Auth/Signup';
import Login from './Auth/Login';
import PaymentInvoice from './Auth/PaymentInvoice';

function App() {
  return (
    <ToastProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/payment" element={<PaymentInvoice />} />
        </Routes>
      </Router>
    </ToastProvider>
  )
}

export default App