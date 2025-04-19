import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true); // State to toggle sidebar visibility
    // Function to toggle sidebar
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    return (_jsxs("div", { className: "page-body-wrapper", children: [_jsx("div", { className: "sidebar sidebar-offcanvas", children: _jsx(Sidebar, { isOpen: sidebarOpen }) }), _jsxs("div", { className: "main-panel min-h-screen", style: { marginLeft: 'auto' }, children: [_jsx("div", { className: "z-3", children: _jsx(Navbar, { title: 'Dashboard', toggleSidebar: toggleSidebar }) }), _jsx(Outlet, {})] })] }));
};
export default Layout;
