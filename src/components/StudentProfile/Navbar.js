// import { useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../02Redux/actions';

const Navbar = () => {
  // const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  const settokenandlogin = () => {
    dispatch(logout());
    sessionStorage.setItem('isLogged', false);
  };
  return (
    <div className="">
      <nav className="navbar navbar-expand-md navbar-dark section mainNavbar">
        <div className="container-fluid ">
          <a href="none" className="navbar-brand">
            <img
              src="Schoollogo.png"
              alt="Company Logo"
              style={{ width: 150 }}
            />
          </a>
          <button
            className="btn navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            Menu
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse checkdivpos " id="navMenu">
            <ul className="navbar-nav mx-auto navbarList ">
              <li className="nav-item text-center testnav h4 fw-normal text-dark mx-1">
                <Link to="/" className="nav-link testnav text-dark fw-bold">
                  Home
                </Link>
              </li>
              <li className="nav-item text-center testnav h4 fw-normal text-warning mx-1">
                <Link
                  to="/listofstudents"
                  className="nav-link testnav text-dark fw-bold"
                >
                  Students
                </Link>
              </li>
              <li className="nav-item text-center testnav h4 fw-normal text-warning mx-1">
                <Link
                  to="/addteacher"
                  className="nav-link testnav text-dark fw-bold"
                >
                  Faculty
                </Link>
              </li>
              <li className="nav-item text-center testnav h4 fw-normal text-warning mx-1">
                <Link
                  to="/addstudent"
                  className="nav-link testnav text-dark fw-bold"
                >
                  Add Student
                </Link>
              </li>
              <li className="nav-item text-center testnav h4 fw-normal text-warning mx-1">
                <Link
                  to="/aboutpage"
                  className="nav-link testnav text-dark fw-bold"
                >
                  About
                </Link>
              </li>
              <li className="nav-item text-center testnav h4 fw-normal text-warning ">
                <Link
                  to="/loginpage"
                  className="nav-link testnav text-warning d-md-none fw-bold"
                  onClick={() => settokenandlogin()}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <button
              className="btn btn-danger d-sm-none d-md-block d-none mx-2"
              onClick={() => settokenandlogin()}
            >
              <Link
                to="/loginpage"
                className="nav-link testnav text-dark fw-bolder"
              >
                Logout
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
