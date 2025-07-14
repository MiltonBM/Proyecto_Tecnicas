import React from 'react';
import UserDashboard from '../components/UserDashboard';
import UserProfile from '../components/UserProfile';

const User = () => {
  return (
    <div className="user-page">
      <UserProfile />
      <UserDashboard />
    </div>
  );
};

export default User;