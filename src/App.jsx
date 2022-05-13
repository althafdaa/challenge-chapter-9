import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';
import MainLayout from './layouts/MainLayout';
import HalamanContoh from './pages/HalamanContoh';
import Home from './pages/Home';

const App = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/halaman-contoh" element={<HalamanContoh />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
};

export default App;
