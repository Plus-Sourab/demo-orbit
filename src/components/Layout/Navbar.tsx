import React, { useState } from 'react';
import { NavbarToggle } from 'react-bootstrap';

interface NavbarProps {
  title?: string; // Make title optional for flexibility
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  // const[isNavbar,setIsNavbar]=useState(true)
  const navbarToggle = () => {
    const body = document.body; // Targeting the body element
    body.classList.toggle('sidebar-icons-only');
  }

  return (
    <div className="row">
      <div>
        <div
          className="topbar d-flex align-items-center"
          style={{ height: '60px' }} // Set fixed height here
        >
          <div className="col-1 text-center px-0 icon-box">
            <button
              className="align-self-center p-0"
              type="button"
              onClick={navbarToggle}

            >
              <i
                className="fa fa-bars"
                aria-hidden="true"
                style={{ color: "#4235b4" }}
              ></i>
            </button>
          </div>
          <div
            id="heading_PageTitle_RestaurantLayoutSetStyle"
            className="col-11 text-center pl-0"
          >
            <div className="dropdown-wraps_user">
              <h1 className="head_panel_14" id="heading_PageTitle_RestaurantLayout">
                {title || ''} {/* Keeps height consistent even if no title */}
              </h1>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/Restaurant/Dashboard">
              {title || 'Dashboard'}
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  {/* Additional nav items go here */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
