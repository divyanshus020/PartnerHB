import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';

import './App.css'; // Leaving it but likely unused or empty
import { Toaster } from 'sonner';

function App() {
  return (
    <>
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
    {/* 👈 THIS MUST BE HERE */}
    <Toaster position="top-center" richColors />
    </>
  );
}

export default App;
