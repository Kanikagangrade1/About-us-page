// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import HardwareDetails from "./pages/About/HardwareDetails";




function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/hardware-details" element={<HardwareDetails />} />
      {/* Catch-all for nested routes */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
