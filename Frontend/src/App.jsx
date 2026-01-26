import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';

import { Toaster } from 'sonner';
import Dashboard from './pages/Dashboard';
import Jobs from './pages/Jobs';
import UploadCandidate from './pages/UploadCandidate';
import Candidates from './pages/Candidates';

function App() {
  return (
    <>
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:jobId/upload" element={<UploadCandidate />} />
          <Route path="/candidates" element={<Candidates />} />
        </Routes>
      </div>
    </Router>
    {/* 👈 THIS MUST BE HERE */}
    <Toaster position="top-center" richColors />
    </>
  );
}

export default App;
