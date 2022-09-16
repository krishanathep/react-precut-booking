import React from "react";
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()

  function signOut() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/")
  }

  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="fas fa-user"></i>{' '}admin
            </a>
            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
              <a href="#" className="dropdown-item">
                <i className="fas fa-user mr-2"></i> Profile
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item" onClick={signOut}>
                <i className="fas fa-sign-out-alt mr-2"></i> Sign out
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
