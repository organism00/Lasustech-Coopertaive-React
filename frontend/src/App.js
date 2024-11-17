import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ToastProvider} from './Loaders/ToastContext';

import LandingPage from './Pages/LandingPage';
<<<<<<< Updated upstream
import Login from './Auth/Login';
import Signup from './Auth/Signup';
=======
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import PaymentInvoice from './Auth/PaymentInvoice';
>>>>>>> Stashed changes

function App() {
  return (
    <ToastProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
<<<<<<< Updated upstream
          <Route path="/signup" element={<Signup />} />
=======
          <Route path="/payment" element={<PaymentInvoice />} />
>>>>>>> Stashed changes
        </Routes>
      </Router>
    </ToastProvider>
  )
}

export default App