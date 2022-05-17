import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import GameDetail from './pages/GameDetail';

const App = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/gamedetail" element={<GameDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MainLayout>
  );
};

export default App;
