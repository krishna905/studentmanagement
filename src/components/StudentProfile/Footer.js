import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mainNavbar">
        <div className="container-fluid d-sm-flex  justify-content-between">
          <div>
            <p className="text-light my-auto"> Contact: +910008034545</p>
          </div>
          <div className="collapse navbar-collapse checkdivpos " id="navMenu">
            <ul className="navbar-nav mx-auto navbarList ">
              <li className="nav-item text-center testnav h4 fw-normal nav-link testnav text-warning text-warning mx-1">
                <i className="fab fa-facebook"></i>
              </li>
              <li className="nav-item text-center testnav h4 fw-normal text-warning mx-1 nav-link testnav text-warning">
                <i className="fab fa-youtube"></i>
              </li>
              <li className="nav-item text-center testnav h4 fw-normal text-warning mx-1 nav-link testnav text-warning">
                <i className="fab fa-twitter"></i>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <div>
              <button className="btn btn-danger mx-2">
                <Link
                  to="/changepassword"
                  className="nav-link testnav text-dark"
                >
                  Change Password
                </Link>
              </button>
            </div>
            <div>
              <button className="btn btn-danger">
                <Link to="/addadmin" className="nav-link testnav text-dark">
                  Add Admin
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
