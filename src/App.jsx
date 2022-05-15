import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import MainLayout from './layouts/MainLayout';
import HalamanContoh from './pages/HalamanContoh';
import Home from './pages/Home';
import Profile from './pages/Profile';

const App = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/halaman-contoh" element={<HalamanContoh />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MainLayout>
  );
};

export default App;
