import React from 'react';
import AdminPanel from '../components/AdminPanel';
import UserProfile from '../components/UserProfile';

const Admin = () => {
  return (
    <div className="admin-page">
      <UserProfile />
      <AdminPanel />
    </div>
  );
};

export default Admin;