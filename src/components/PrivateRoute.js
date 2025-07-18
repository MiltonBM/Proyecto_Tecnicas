import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children, adminOnly = false }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && currentUser.email !== 'admin@example.com') {
    return <Navigate to="/user" />;
  }

  return children;
};

export default PrivateRoute;