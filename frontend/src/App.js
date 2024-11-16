import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ToastProvider} from './Loaders/ToastContext';

import LandingPage from './Pages/LandingPage';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';

function App() {
  return (
    <ToastProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ToastProvider>
  )
}

export default App