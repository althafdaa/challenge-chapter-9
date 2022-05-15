import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import MainLayout from './layouts/MainLayout';
import HalamanContoh from './pages/HalamanContoh';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/halaman-contoh" element={<HalamanContoh />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MainLayout>
  );
};

export default App;
