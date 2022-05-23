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
import GamePlay from './pages/Game';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/game-detail" element={<GameDetail />} />
          <Route
            path="/game"
            element={
              <ProtectedRoute>
                <GamePlay />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MainLayout>
  );
};

export default App;
