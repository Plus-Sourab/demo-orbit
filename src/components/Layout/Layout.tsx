import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true); // State to toggle sidebar visibility

  // Function to toggle sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="page-body-wrapper">
      <div className="sidebar sidebar-offcanvas">

        <Sidebar isOpen={sidebarOpen} />
      </div>

      <div className="main-panel min-h-screen" style={{ marginLeft: 'auto' }}>
        <div className="z-3">
          <Navbar title='Dashboard' toggleSidebar={toggleSidebar} />
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;