import React, { useEffect } from 'react';
import { useStoreAuth } from '../../contexts/useAuth';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }) => {
  const { loggedIn } = useStoreAuth();

  useEffect(() => {
    if (!loggedIn) {
      toast.error('Please login first');
    }
  }, []);

  return loggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
