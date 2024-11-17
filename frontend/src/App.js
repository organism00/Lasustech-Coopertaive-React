import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ToastProvider} from './Loaders/ToastContext';

import LandingPage from './Pages/LandingPage';
import Login from './Auth/Login';
import Signup from './Auth/Signup';

function App() {
  return (
    <ToastProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </ToastProvider>
  )
}

export default App