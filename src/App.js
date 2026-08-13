/**
 * Duwadi Agrovets - Main App Component
 * ---------------------------------------------------
 * HOW TO RUN THIS PROJECT:
 * 1. Make sure Node.js (v16+) is installed.
 * 2. Place all files in the folder structure shown in the README.
 * 3. Open a terminal in the project root and run:
 *      npm install
 *      npm start
 * 4. The site will open at http://localhost:3000
 * ---------------------------------------------------
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './styles/components.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes/pages here if the site grows beyond a single page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;