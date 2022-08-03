import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestList from './pages/TestList/TestList';
import CreateReport from './pages/CreateReport/CreateReport';
import SummaryReport from './pages/SummaryReport/SummaryReport';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestList />} />
        <Route path="/create" element={<CreateReport />} />
        <Route path="/summary" element={<SummaryReport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
