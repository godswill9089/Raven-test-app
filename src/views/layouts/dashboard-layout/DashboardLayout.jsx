import React, { useEffect } from 'react';
import './DashboardLayout.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
const DashboardLayout = () => {
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
    } else {
      // go to sign up page and create an account
      window.location.replace('/sign-up');
    }
  }, []);
  return (
    <>
      <div className='dashboard-layout'>
        <Navbar />
        <div className='dashboard-layout-content'>
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
